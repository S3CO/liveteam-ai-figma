// Tuti AI Image Generator - Figma Plugin v4
// Yan yana dizilim, 40px gap, aynı üst hiza

figma.showUI(__html__, { width: 360, height: 620 });

const GAP = 40;

// İlk banner'ın Y pozisyonunu bul (tüm banner'lar aynı hizada olacak)
function getBaseY() {
  const aiFrames = figma.currentPage.children.filter(
    n => n.name.startsWith('AI:') && n.type === 'FRAME'
  );
  if (aiFrames.length === 0) return figma.viewport.center.y - 300;
  return aiFrames[0].y; // İlk frame'in Y'si referans
}

// Sıradaki X pozisyonunu bul
function getNextX() {
  const aiFrames = figma.currentPage.children.filter(
    n => n.name.startsWith('AI:') && n.type === 'FRAME'
  );
  if (aiFrames.length === 0) return figma.viewport.center.x - 400;

  let maxRight = -Infinity;
  for (const f of aiFrames) {
    const right = f.x + f.width;
    if (right > maxRight) maxRight = right;
  }
  return maxRight + GAP;
}

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'place-image') {
    try {
      const { imageBytes, width, height, name } = msg;
      const bytes = new Uint8Array(imageBytes);
      const image = figma.createImage(bytes);

      const frame = figma.createFrame();
      frame.name = `AI: ${name}`;
      frame.resize(width, height);

      // Yan yana + aynı üst hiza
      frame.x = getNextX();
      frame.y = getBaseY(); // Hepsi aynı Y'de

      frame.fills = [{
        type: 'IMAGE',
        scaleMode: 'FILL',
        imageHash: image.hash
      }];

      frame.cornerRadius = 8;

      // Tüm AI frame'leri seç ve görünüme al
      const allAI = figma.currentPage.children.filter(
        n => n.name.startsWith('AI:') && n.type === 'FRAME'
      );
      figma.currentPage.selection = allAI;
      figma.viewport.scrollAndZoomIntoView(allAI);

      figma.notify(`✅ ${name}`);
      figma.ui.postMessage({ type: 'placed', width, height });

    } catch (error) {
      figma.ui.postMessage({ type: 'error', message: error.message });
      figma.notify(`❌ ${error.message}`, { error: true });
    }
  }
};
