# Pixel lyric music videos (lessons from three reference MVs)

Use this file **in addition to** [music-video.md](music-video.md) when the user wants a 像素风 / JRPG / 街机 / 平台动作 lyrics MV. Watercolor painted-animation stays the default; this mode is a fork of look and overlay rules, not a different renderer.

It was distilled from three finished pixel lyric videos (frames sampled across each runtime):

- A 1080p30 cinematic rainy-city *Mine Mine* (KTV captions, returning interiors and streets, cross-dissolves).
- A 960×544 ~24 fps JRPG remake of 方大同《麦恩莉》(HP bars, command menus, party screen, staff roll, typewriter box).
- A 1080p30 “双人模式” arcade/platformer 《麦恩莉》(co-op HUD, cream dialogue box, SFX words, CRT ending).

Song grid, LRC, beat measurement, one-shot-per-line budgeting, chapter files, render authorization, and “never invent lyrics” all stay as in `music-video.md`.

## 1. Choose a metaphor and a lyric dialect first

Before the storyboard, lock two decisions and write them at the top of `STORYBOARD.md`.

**Metaphor (one for the whole video).** Examples from the refs: a rainy-city memory play; a JRPG session whose status screens *are* the emotions; a co-op arcade “2P mode.” Every chapter is a skin of that metaphor (recolored overworld, another street, the same cabinet). Do not change genre every line.

**Lyric dialect (one per video, never mixed):**

- `ktvCaption` — bottom-center outlined current line, dim previous/next row, bilingual OK, no game box. Use for diegetic worlds that should feel like a short film.
- `rpgBox` — one fixed bottom box (cream plate + brown double border is the typography default; navy + white is also fine), typewriter via `opts.sing`, optional ▼ or ♪. HUD and a handful of SFX stamps live in the **same language as the song** (or the language the user asked for). English examples such as JUMP!, 2P JOIN, +LOVE, THANK YOU belong in English-language films; a Chinese lyric MV should use Chinese labels instead (see §9).

Act the line in the world (umbrella, HP tick, rain cloud, a blur pass when the lyric says vision blurs). The box/captions carry the words; do not also write the full sentence on a prop unless it is a short motif (in an English-language film, a neon “MY ONLY”; in a Chinese film, a short Chinese motif).

## 2. Storyboard extras for pixel mode

Still obey the lyric→scene hard gate in [lyric-storyboard.md](lyric-storyboard.md): full `STORYBOARD.md` first, user confirms, then code.


Keep the `music-video.md` shape (one idea, cast table, chapters = song sections, `| Time | Lyric | Shot | Out |`). Add these columns or a short note per chapter:

- **Set** — a reusable tiled location (writer’s room, brick street + parked car, field + mountains, arcade, hillside stage, night crosswalk, carnival).
- **Palette** — 16–32 named colors for that chapter.
- **UI state** — what the box/HUD shows (HP 1/99, BLIND, SCORE, empty typewriter, title card).
- **Dialect** — already global, but note SFX words and the beat they land on.

Opening title and a closing card must rhyme in the same typography **and the same language** as the rest of the on-screen UI (not a Chinese film with a Latin “THE END,” and not a mixed pair). Recurring sets should return on choruses and escalate (more characters, fireworks, a thank-you banner), not be abandoned.

Character scale: leads fill a large fraction of a talk/emotion shot; they may shrink in establishing wides. Lock silhouettes and wardrobe and reuse them.

## 3. Grid, canvas, and compositing (no new render flags)

The template canvas stays `W,H = 1920,1080`. `render.mjs` already opens Chrome at 1920×1080. Do not invent `--pixel` or change the window size.

Draw the **world** on a small `p5.Graphics` and nearest-neighbor blit it to the full canvas:

- 320×180 (×6) or 480×270 (×4) for a 1080p indie-pixel look.
- 480×272 (or 320×180 used with chunkier sprites) if the brief wants a 16-bit JRPG softness like a 960×544 source.

Snap positions and camera scroll to integer logical pixels. Call `noSmooth()` before the blit. Animate on twos or fours with the existing `onTwos(t)` (or `Math.floor(t * 8) / 8` for RPG idles). Output 24 or 30 fps is fine.

`PROJECT` in `src/config.js` should include, in addition to `duration`, `bpm`, `offset`, and `audio`:

```js
const PROJECT = {
  duration: 0, bpm: 120, offset: 0, audio: 'assets/clip.m4a',
  pixel: true,
  pixelGrid: [320, 180],          // logical width, height
  lyricUI: 'rpgBox',              // or 'ktvCaption'
};
```

**Required one-guard patch in `template/src/core.js` compositing** (paper and multiply grain will dirty hard pixels). Around the existing `image(paperG)` / grain / `overlayHook` block:

```js
if (!PROJECT.pixel) {
  image(paperG, 0, 0);
}
// ... existing world draw ...
if (!PROJECT.pixel) {
  c.globalCompositeOperation = 'multiply'; c.drawImage(grainC, 0, 0);
}
if (window.overlayHook) window.overlayHook(c, t);
```

Karaoke and HUD stay in `overlayHook` so they remain crisp and, if you want, un-blurred while the world is treated.

## 4. A project-local `src/pixel.js` (existing p5 only)

Add this script to `studio.html` after `core.js` when the project is in pixel mode. It introduces **no** engine API beyond `createGraphics`, `noSmooth`, `image`, and helpers already in `core.js`.

```js
// src/pixel.js — logical-grid buffer for PROJECT.pixel videos.
const [PW, PH] = PROJECT.pixelGrid || [320, 180];
const PSCALE = W / PW;
let PX = null;
function pxEnsure() {
  if (!PX) { PX = createGraphics(PW, PH); PX.pixelDensity(1); }
  return PX;
}
function pxBegin(hex) {
  const g = pxEnsure();
  g.noSmooth(); g.noStroke();
  if (hex) { g.background(hex); }
  else { g.clear(); }
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
// Copy a 1× scale sprite sheet cell into the logical buffer.
function pxSprite(g, sheet, sx, sy, sw, sh, dx, dy) {
  g.noSmooth();
  g.image(sheet, Math.floor(dx), Math.floor(dy), sw, sh, sx, sy, sw, sh);
}
```

Layer a shot back-to-front: sky / dither, tiled mid-background, props, characters, weather, optional full-frame treatment, then `pxBlit()`, then let `overlayHook` paint HUD/lyrics. Use `hash(i)` for dither thresholds and sparkle layout (frames render out of order; no `Math.random()`).

Timing helpers already in `core.js` that you should reuse rather than rewrite: `pulse`, `pulse2`, `kf`, `walk`, `jump`, `spring`, `seg`, `hash`, `onTwos`. Do not call `paint()`, `inkLine()`, or `brushWipe()` in this mode. Local `glow()` is optional for lamps and neon, after the blit or as a contained overlay, not as a whole-frame wash.

## 5. Karaoke hook: keep `LY`, change the draw

`src/karaoke.js` already owns `LY = [[start, end, "text", opts]]`, `opts.sing`, `opts.hold`, `opts.pun`, and `window.overlayHook`. When `PROJECT.pixel` is set, skip the ragged ink lozenge and Ma Shan Zheng brush font. Draw one of the following in overlay coordinates (full 1920×1080, integer positions). The default `rpgBox` sits at **y = 952, height 114, pad 56** — keep faces, feet, and props above this band (action above ≈ y 952). Draw nothing when no `LY` line is active (no empty box).

**`ktvCaption`:** current line in a large outlined CJK-capable gothic or UI font (white/cream fill, dark outline); previous or next line smaller and gray, stacked above or below. `opts.hold` already lifts a finished line — keep that two-row behavior. A left-to-right fill is optional; the reference often shows a complete current line plus a dim upcoming line.

**`rpgBox` typography defaults that held up in production:** Noto Sans CJK SC, about 56px, centered, letter-spacing about 8px. Unsung glyphs: dim brown; already-sung: deep ochre `#6a2408`; current glyph: brighter ochre `#c45a08` plus a gold underline. Cream plate with a brown double border and a soft drop. On bright floors, add a dark gradient scrim behind the plate so the cream still reads. Typewriter: reveal `floor(n * clamp((t-a)/singDur))` characters of the line, using `opts.sing` exactly as the fill duration is used today. One line at a time. Optional chapter HUD draws in the same overlay pass, never on top of the box, and in the same language as the lyrics.

`opts.pun` can become a status stamp or a strike in the box; do not keep the wet brush stroke.

Set `window.EXTRA_FONTS` to a **CJK-capable gothic** that actually contains the `LY` glyphs **and every HUD / sign / title string you draw**, at the sizes you actually use (for example 8, 28, 56, 64, 100). Default stack: `"Noto Sans CJK SC", "Noto Sans SC", "Microsoft YaHei", sans-serif`. Do **not** use 8px ASCII monospace (Press Start 2P / Courier) as the only face when the film has Chinese (or other non-Latin) text. Do not default to Ma Shan Zheng in pixel mode. In-world signs drawn at ~8 logical pixels will look soft after a ×6 nearest-neighbor blit; keep them short, high-contrast, and readable, or draw important UI in the 1920×1080 overlay instead.

## 6. Transitions (same call shape as `brushWipe`)

Put helpers in `src/pixel.js` or at the bottom of `timeline.js`. Call them last in both shots, in screen space, after `pxBlit()`:

```js
// end of shot A:   if (lt > dur - .2) ditherDissolve((lt - (dur - .2)) / .4);
// start of shot B: if (lt < .2) ditherDissolve(.5 + lt / .4);
```

Legal pixel transitions (use these; do not use `brushWipe`):

- Hard cut (do nothing).
- Fade / dip to black: a full-canvas `rect` with alpha from `t`.
- Cross-dissolve: only if you composite both shots yourself for a short overlap; otherwise prefer a fade.
- Ordered-dot / dither dissolve: threshold `hash(x + y * 13 + frame)` against progress (seen as white-dot flashes and ending dots in the JRPG and arcade refs).
- Photo-card tilt: draw the finished frame into a graphics and `translate` / `rotate` / `scale` it on a cream mount.
- Scanline or CRT-dot wipe.

Keep them short (about 4–12 frames) and on a bar or lyric boundary.

## 7. Motion and beat

- Walk and idle: 2–6 frame cycles, snapped to the grid. Wide shots may hold with one looping secondary (rain, laundry, cloud, sparkle).
- Weather and emotion are section-level: rain, snow, sunset, carnival night, a one-shot blur or vortex when the line demands it.
- SFX words and UI state changes land on the word’s beat (`pulse(t)` to flash a bar or a “+LOVE”).
- Chapter cuts and palette changes land on section boundaries.

## 8. Review checklist (still open the sheets)

Same `render.mjs --sheet` / `--strip` / Read loop as the main skill. For every shot also check:

- Edges are blocky, not blurry (forgot `noSmooth` or used subpixel positions).
- The lyric box/captions are readable and not covered by a face or prop (box sits in the lower band; action stays above it). Contact-sheet the title card, the HUD, the lyric box on both dark and bright floors, and any in-world CJK signs.
- Only one lyric dialect is in use.
- The metaphor still holds (no random new genre).
- A returning set or motif is visible across the chapter; if a later verse changes warmth or objects, the returning set is upgraded, not a cold copy of verse 1.
- Each chapter's `shots()` start times equal the corresponding `LY` start times; scene, palette, mood, and props match that line (no leftover shots from another section).
- No `brushWipe`, paper grain, boiling ink, or default Clawd unless requested.
- Title and end cards exist and match the typography **and language** of the UI. If the film is supposed to be Chinese-only, confirm there are zero leftover Latin display strings (HUD, SFX stamps, cabinet art, signs, title, end card).

Performance should be cheaper than brush painting (one small buffer plus tiles). The old 1.5–2.5 s/frame budget is a ceiling, not a target. Frames remain pure functions of `t`.

## 9. On-screen language, CJK typography, and lyric–picture match

These are generic production rules. Apply them to every pixel (and, where relevant, watercolor) lyric MV; do not treat them as notes about one song.

**On-screen language.** HUD, SFX stamps, cabinet / sign / title / end-card text must match the song's (or the user's) language. For a Chinese lyric MV, do not leave decorative English such as PRESS START, TRY AGAIN, 1P, SCORE, TOO HARD, CLEAR!, THE END. Translate the labels you actually need, for example: 一号 / 分数 / 关n / 二号？ / 已加入 / 按开始 / 再来一次 / 一币 / 选关 / 太难了 / 放弃 / 加入 / 过关 / 终 / 继续？. Numbers, hearts, and punctuation may stay. Title and end cards must share typography and language. English-language films may still use English stamps such as JUMP! or MY ONLY; the rule is consistency with the song, not “always Chinese” or “always English.”

**CJK fonts.** Do not use 8px ASCII monospace (Press Start 2P / Courier) as the only face for Chinese. Overlay typography should load a CJK-capable gothic, e.g. `"Noto Sans CJK SC", "Noto Sans SC", "Microsoft YaHei", sans-serif`, and register glyphs via `window.EXTRA_FONTS` (lyrics **plus** all HUD / sign strings, at the sizes you actually draw). In-world signs drawn at ~8 logical pixels will look soft after a ×6 nearest-neighbor blit; keep them short, high-contrast, and readable, or draw important UI in the 1920×1080 overlay instead. The template's `pxText` helper draws CJK on the logical buffer at integer positions with `noSmooth()`.

**rpgBox typography (defaults that worked in production).** Noto Sans CJK SC, ~56px, centered, letter-spacing ~8px. Unsung: dim brown; already-sung: deep ochre `#6a2408`; current glyph: brighter ochre `#c45a08` plus a gold underline. Cream plate with a brown double border. Place the box lower so it does not cover character feet (a good starting box is y=952, height 114, pad 56 — keep action above this band). On bright floors, add a dark gradient scrim behind the plate. Draw nothing when no `LY` line is active (no empty box).

**Lyric–picture match.** Each chapter's `shots()` start times must equal the corresponding `LY` start times; never drift cuts while leaving LRC/`LY` unchanged. Scene, palette, mood, and props must match that line's setting and imagery — no contradictory or leftover shots from another section. If a later verse changes warmth or objects, upgrade the returning set (color, light, props); do not reuse a cold copy of verse 1. After revisions, re-check the full film, not just the edited chapter.

**Review extras.** Contact-sheet the title card, HUD, lyric box on both dark and bright floors, and any in-world CJK signs. Confirm zero leftover Latin display strings if the film is supposed to be Chinese-only.
