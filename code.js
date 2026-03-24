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
  // Seçili frame'i resize et
  if (msg.type === 'resize-selected') {
    try {
      const sel = figma.currentPage.selection;
      const allowed = ['FRAME', 'COMPONENT', 'INSTANCE', 'RECTANGLE', 'GROUP'];
      if (!sel.length || !allowed.includes(sel[0].type)) {
        figma.ui.postMessage({ type: 'error', message: 'Выберите фрейм или компонент / Select a frame or component' });
        return;
      }
      const source = sel[0];
      const fills = source.fills || [];
      const baseName = source.name.replace(/\s*\(\d+×\d+\)/, '').replace(/\s*\d+$/, '').trim() || 'banner';
      const sizes = msg.sizes; // [{w,h}]

      for (let i = 0; i < sizes.length; i++) {
        const s = sizes[i];
        // Aynı boyutsa atla
        if (s.w === Math.round(source.width) && s.h === Math.round(source.height)) continue;
        const frame = figma.createFrame();
        frame.name = baseName + ' (' + s.w + '×' + s.h + ')';
        frame.resize(s.w, s.h);
        frame.x = getNextX();
        frame.y = getBaseY();
        frame.fills = JSON.parse(JSON.stringify(fills));
        frame.cornerRadius = 8;
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
