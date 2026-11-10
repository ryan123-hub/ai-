// pixel.js — logical-grid buffer + pixel-native transitions for PROJECT.pixel videos.
// Load after core.js. No-ops unless the project calls pxBegin/pxBlit or the transition helpers.
const [PW, PH] = (typeof PROJECT !== 'undefined' && PROJECT.pixelGrid) ? PROJECT.pixelGrid : [320, 180];
const PSCALE = typeof W !== 'undefined' ? W / PW : 6;
let PX = null;
function pxEnsure() {
  if (!PX) { PX = createGraphics(PW, PH); PX.pixelDensity(1); }
  return PX;
}
function pxBegin(hex) {
  const g = pxEnsure();
  g.noSmooth(); g.noStroke();
  if (hex) g.background(hex); else g.clear();
  return g;
}
function pxBlit() {
  noSmooth(); image(PX, 0, 0, W, H);
}
function pxSnap(x, y) { return [Math.floor(x), Math.floor(y)]; }
function pxRect(g, x, y, w, h, hex) {
  g.noStroke(); g.fill(hex);
  g.rect(Math.floor(x), Math.floor(y), Math.floor(w), Math.floor(h));
}
function pxSprite(g, sheet, sx, sy, sw, sh, dx, dy) {
  g.noSmooth();
  g.image(sheet, Math.floor(dx), Math.floor(dy), sw, sh, sx, sy, sw, sh);
}
// CJK-capable label on the logical buffer (integer positions, noSmooth).
// Short in-world signs only; ~8 logical-pixel CJK looks soft after a ×6 blit —
// draw important UI on the 1920×1080 overlay instead.
function pxText(g, str, x, y, col, size) {
  g.push();
  g.noSmooth();
  g.noStroke();
  g.fill(col);
  g.textFont('"Noto Sans CJK SC", "Noto Sans SC", "Microsoft YaHei", sans-serif');
  g.textSize(size || 8);
  g.textAlign(LEFT, TOP);
  g.text(String(str), Math.floor(x), Math.floor(y));
  g.pop();
}
// Screen-space fades / dither (call at the end of both adjacent shots, like brushWipe).
function fadeBlack(k) {
  const a = constrain(k, 0, 1);
  if (a <= 0) return;
  push(); resetMatrix(); translate(-W / 2, -H / 2);
  noStroke(); fill(0, a * 255); rect(0, 0, W, H);
  pop();
}
function ditherDissolve(k) {
  const a = constrain(k, 0, 1);
  if (a <= 0) return;
  push(); resetMatrix(); translate(-W / 2, -H / 2);
  noStroke(); fill(255);
  const step = 8;
  for (let y = 0; y < H; y += step) {
    for (let x = 0; x < W; x += step) {
      if (hash(x * 0.01 + y * 13 + Math.floor(T * 24)) < a) rect(x, y, step, step);
    }
  }
  pop();
}
