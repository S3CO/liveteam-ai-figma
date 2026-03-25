// Live Team AI - Figma Plugin v6

figma.showUI(__html__, { width: 360, height: 650 });

const GAP = 40;

// Başlangıç: kayıtlı key'i UI'a gönder
(async () => {
  const key = await figma.clientStorage.getAsync('liveteam_key') || '';
  figma.ui.postMessage({ type: 'init', key });
})();

function getBaseY() {
  const f = figma.currentPage.children.filter(n => n.type === 'FRAME' && n.name.match(/\(\d+×\d+\)/));
  return f.length ? f[0].y : figma.viewport.center.y - 300;
}

function getNextX() {
  const f = figma.currentPage.children.filter(n => n.type === 'FRAME' && n.name.match(/\(\d+×\d+\)/));
  if (!f.length) return figma.viewport.center.x - 400;
  let max = -Infinity;
  for (const fr of f) { const r = fr.x + fr.width; if (r > max) max = r; }
  return max + GAP;
}

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'save-key') {
    await figma.clientStorage.setAsync('liveteam_key', msg.key);
    return;
  }
  if (msg.type === 'clear-key') {
    await figma.clientStorage.deleteAsync('liveteam_key');
    return;
  }
  // Seçili element'i resize et (frame, component, instance, her şey)
  if (msg.type === 'resize-selected') {
    try {
      const sel = figma.currentPage.selection;
      if (!sel.length) {
        figma.ui.postMessage({ type: 'error', message: 'Выберите элемент / Select an element' });
        return;
      }
      const source = sel[0];
      const baseName = source.name.replace(/\s*\(\d+×\d+\)/, '').replace(/\s*\d+$/, '').trim() || 'banner';
      const sizes = msg.sizes;

      // Orijinal görseli büyük kalitede export et, FILL ile crop
      const exportBytes = await source.exportAsync({ format: 'PNG', constraint: { type: 'SCALE', value: 1 } });
      const image = figma.createImage(exportBytes);

      const position = msg.position || 'center';

      for (let i = 0; i < sizes.length; i++) {
        const s = sizes[i];
        if (s.w === Math.round(source.width) && s.h === Math.round(source.height)) continue;

        const frame = figma.createFrame();
        frame.name = baseName + ' (' + s.w + '×' + s.h + ')';
        frame.resize(s.w, s.h);
        frame.x = getNextX();
        frame.y = getBaseY();
        frame.clipsContent = true;
        frame.cornerRadius = 8;
        frame.fills = [];

        // Görseli tüm banner'ı kaplayacak şekilde büyüt (cover)
        const srcRatio = Math.round(source.width) / Math.round(source.height);
        const tgtRatio = s.w / s.h;

        let imgW, imgH;
        // Her zaman büyük tarafı kapla - boşluk kalmasın
        if (srcRatio > tgtRatio) {
          imgH = s.h;
          imgW = s.h * srcRatio;
        } else {
          imgW = s.w;
          imgH = s.w / srcRatio;
        }

        const inner = figma.createRectangle();
        inner.resize(imgW, imgH);
        inner.fills = [{ type: 'IMAGE', scaleMode: 'FILL', imageHash: image.hash }];

        // Yatay pozisyon - karakter nerede olsun
        // left = karakter solda = görseli sola hizala (sağ taraf crop)
        // right = karakter sağda = görseli sağa hizala (sol taraf crop)
        if (position === 'right') inner.x = 0;
        else if (position === 'left') inner.x = s.w - imgW;
        else inner.x = (s.w - imgW) / 2;

        // Dikey - üstten hizala (yüz görünsün)
        inner.y = 0;

        frame.appendChild(inner);
      }

      const all = figma.currentPage.children.filter(n => n.type === 'FRAME' && n.name.match(/\(\d+×\d+\)/));
      figma.currentPage.selection = all;
      figma.viewport.scrollAndZoomIntoView(all);
      figma.notify('✅ Resized to ' + sizes.length + ' sizes');
      figma.ui.postMessage({ type: 'resize-done', count: sizes.length });
    } catch (e) {
      figma.ui.postMessage({ type: 'error', message: e.message });
    }
    return;
  }

  // HD için seçili görseli export et (orijinal boyut bilgisi ile)
  if (msg.type === 'export-for-hd') {
    try {
      const sel = figma.currentPage.selection;
      if (!sel.length) {
        figma.ui.postMessage({ type: 'error', message: 'Bir görsel seçin / Select an image' });
        return;
      }
      const source = sel[0];
      const w = Math.round(source.width);
      const h = Math.round(source.height);
      const exportBytes = await source.exportAsync({ format: 'PNG', constraint: { type: 'SCALE', value: 1 } });
      figma.ui.postMessage({ type: 'exported-for-hd', imageBytes: Array.from(exportBytes), origW: w, origH: h });
      figma.notify('🔍 HD işleniyor...');
    } catch (e) {
      figma.ui.postMessage({ type: 'error', message: e.message });
    }
    return;
  }

  // Seçili görseli export et ve UI'a gönder (paint editor için)
  if (msg.type === 'export-selected') {
    try {
      const sel = figma.currentPage.selection;
      if (!sel.length) {
        figma.ui.postMessage({ type: 'error', message: 'Bir görsel seçin / Select an image' });
        return;
      }
      const source = sel[0];
      const w = Math.round(source.width);
      const h = Math.round(source.height);
      const exportBytes = await source.exportAsync({ format: 'PNG', constraint: { type: 'SCALE', value: 1 } });
      figma.ui.postMessage({ type: 'exported-image', imageBytes: Array.from(exportBytes), origW: w, origH: h });
      figma.notify('✏️ Görsel düzenleme moduna alındı (' + w + '×' + h + ')');
    } catch (e) {
      figma.ui.postMessage({ type: 'error', message: e.message });
    }
    return;
  }

  if (msg.type === 'place-image') {
    try {
      const { imageBytes, width, height, name } = msg;
      const image = figma.createImage(new Uint8Array(imageBytes));
      const frame = figma.createFrame();
      frame.name = name;
      frame.resize(width, height);
      frame.x = getNextX();
      frame.y = getBaseY();
      frame.fills = [{ type: 'IMAGE', scaleMode: 'FILL', imageHash: image.hash }];
      frame.cornerRadius = 8;
      const all = figma.currentPage.children.filter(n => n.type === 'FRAME' && n.name.match(/\(\d+×\d+\)/));
      figma.currentPage.selection = all;
      figma.viewport.scrollAndZoomIntoView(all);
      figma.notify('✅ ' + name);
    } catch (e) {
      figma.ui.postMessage({ type: 'error', message: e.message });
    }
  }
};
