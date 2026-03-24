// Live Team AI - Figma Plugin v5
// Yan yana dizilim + clientStorage API key

figma.showUI(__html__, { width: 360, height: 650 });

const GAP = 40;

// Başlangıçta kayıtlı key'i UI'a gönder
async function init() {
  const savedKey = await figma.clientStorage.getAsync('gemini_key');
  figma.ui.postMessage({ type: 'saved-key', key: savedKey || '' });
}
init();

function getBaseY() {
  const frames = figma.currentPage.children.filter(n => n.type === 'FRAME' && n.name.match(/\(\d+×\d+\)/));
  if (frames.length === 0) return figma.viewport.center.y - 300;
  return frames[0].y;
}

function getNextX() {
  const frames = figma.currentPage.children.filter(n => n.type === 'FRAME' && n.name.match(/\(\d+×\d+\)/));
  if (frames.length === 0) return figma.viewport.center.x - 400;
  let maxRight = -Infinity;
  for (const f of frames) {
    const right = f.x + f.width;
    if (right > maxRight) maxRight = right;
  }
  return maxRight + GAP;
}

figma.ui.onmessage = async (msg) => {
  // API key kaydet
  if (msg.type === 'save-key') {
    await figma.clientStorage.setAsync('gemini_key', msg.key);
    figma.ui.postMessage({ type: 'key-saved' });
    return;
  }

  // API key sil
  if (msg.type === 'delete-key') {
    await figma.clientStorage.deleteAsync('gemini_key');
    figma.ui.postMessage({ type: 'key-deleted' });
    return;
  }

  // Görsel yerleştir
  if (msg.type === 'place-image') {
    try {
      const { imageBytes, width, height, name } = msg;
      const bytes = new Uint8Array(imageBytes);
      const image = figma.createImage(bytes);

      const frame = figma.createFrame();
      frame.name = name;
      frame.resize(width, height);
      frame.x = getNextX();
      frame.y = getBaseY();

      frame.fills = [{
        type: 'IMAGE',
        scaleMode: 'FILL',
        imageHash: image.hash
      }];

      frame.cornerRadius = 8;

      const allFrames = figma.currentPage.children.filter(n => n.type === 'FRAME' && n.name.match(/\(\d+×\d+\)/));
      figma.currentPage.selection = allFrames;
      figma.viewport.scrollAndZoomIntoView(allFrames);

      figma.notify(`✅ ${name}`);
      figma.ui.postMessage({ type: 'placed', width, height });
    } catch (error) {
      figma.ui.postMessage({ type: 'error', message: error.message });
      figma.notify(`❌ ${error.message}`, { error: true });
    }
  }
};
