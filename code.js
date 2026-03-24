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
