# Style notes: three pixel lyric MV references

Grounded only in frames actually opened with Read (plus ffprobe). Parent labels for 1.mp4 / 3.mp4 do **not** match the picture: write rules from what is on screen.

## Frames read

Times assume dense extract every 5s: `fNNN` ≈ `(N-1)*5` seconds. Strips are a motion burst around t≈60s.

- **1.mp4** (1920×1080, 30 fps, 268.2 s): f001, f003, f006, f010, f014, f018, f022, f026, f030, f034, f038, f042, f046, f050, f054; strips s01, s06, s12.
- **2.mp4** (960×544, ~24 fps, 288.2 s): f001, f005, f007, f010, f013, f015, f020, f025, f030, f031, f035, f040, f045, f050, f054, f058; strips s01, s05, s12.
- **3.mp4** (1920×1080, 30 fps, 291.2 s): f001, f003, f006, f010, f014, f018, f022, f026, f030, f034, f038, f042, f046, f050, f054, f058; strips s01, s06, s12.

---

## Per-video summary

### 1.mp4 — 周杰伦《Mine Mine》（不是标注里的《麦恩莉》）

**Evidence:** f001 title card reads “Mine Mine / 周杰伦 / yy” over a night interior. Spoken/sung lines on later frames are this song (desk manuscript, parked car on a red curb, umbrella, bilingual “mine mine / bye-bye” hooks). Duration 268.2 s at 1080p30.

**Story metaphors.** A single continuous romance world, not a game. Opening is a writer's room at night: rain outside a 2×3 window of warm yellow panes, cork board, shelf, green desk lamp, glowing manuscript roll, mug, stacked books, crumpled paper on wood floor (f001, f003). The same desk returns mid-song as the man in a tan coat and red scarf stands at it, hand to his head (f026, f030). Exterior chapters stage the lyric literally: rainy brick street, teal umbrella, white sedan parked on a red-painted curb, the woman walking away (f006, f014, f018, f034, f038, f046); a brighter daytime memory of the couple facing each other on a tiled sidewalk with potted plants (f010); a rooftop clothesline and water tower over a city silhouette (f042, f054, strips). f050 **cross-dissolves** the interior desk over the wet street so both layers are visible at once. Ending fades the rooftop almost to black, lyric still on (f054).

**UI systems.** Almost none. Title is typographic overlay, not a HUD. No HP, score, or dialogue panel. World props do the storytelling (manuscript, umbrella, red line, car).

**Palette.** Dusk mauve walls; indigo/violet wet brick; warm window ochre and lamp bloom; tan coat, red scarf, teal umbrella, white car; cool rooftop blue; wood-floor brown. Limited, chapter-stable. Soft circular bokeh and lamp/scarf bloom sit **on top of** hard pixels (f003, f026, f038). Rain is short 1–2 px white/blue streaks.

**Lyric treatment.** KTV captions, bottom-center, not a game box. Current line: white/cream with a dark outline, larger. Next (and sometimes previous) line: smaller, gray, stacked above or below. Up to three rows (f026, f034). Chinese and English hooks can share the stack (f014, f018, f042). No typewriter reveal in the frames read — a full current line is present, with the upcoming line already dimly visible. Action stays above the caption band.

**Camera.** Locked or slowly held 16:9 wides and mediums; occasional tight desk insert (f003, f030). Character scale changes with shot size: roughly half the frame in a medium (f014, f038), small in a building-wide (f018, f046). No HUD, so the camera can go wide. Recurring sets (room, street+car, rooftop) return instead of inventing a new location every line.

**Motion (strips s01–s12, rooftop at ~60s).** Very small. Clothes on the line change angle slightly between s01 and s06/s12; sky, tower, and caption are otherwise held. Language is atmospheric loops (rain, laundry sway, distant lights) plus walk cycles in other shots — not per-frame line boil.

---

### 2.mp4 — 方大同《麦恩莉》JRPG / 16-bit 重制

**Evidence:** f001 title plate “麦恩莉 / 方大同”. 960×544, ~24 fps, 288 s. End card “STAFF ROLL / KNIGHT / WHITE MAGE” (f054) and dithered “THE END” (f058).

**Story metaphors.** The whole song is one RPG session. The man is a crying knight whose HP starts at 1/99 with a red “-47” pop (f001); the woman is a white-mage / animal-hood healer. Emotional weather is **game state**: HP bar climbs (23/99, green fill, sparkles over his head as she appears, f005); a battle command list “攻击 / 魔法 / 道具 / 和好” with a cursor on 和好 and a “+LOVE” popup among slime-like creatures (f007); they shelter under a red-roof teahouse in rain, “茶” plaque and a heart on the roof, enacting the “下雨时的屋檐” line (f010); a “PARTY” menu lists KNIGHT LV 2 and a second slot spelled out as “MY ONLY” with floating hearts (f015); a WEIGHT MAX bar and a huge “寂寞” stamp when he is alone (f020); snowy hot-spring (f025) then a tight winter two-shot (f030); a dithered pastel “date” bench (f031); a path with a sign “对” while the box lists 对/错/福/祸 (f035); a village row of identical houses, five colored slimes, a duck, a villager (f040); a “THANK YOU” banner, dragon, and full party for “感谢你的出现” (f045); a tilted printed **photo** of the couple among pink trees, itself a memory object (f050 and strip s05); staff roll and The End over the starting field (f054, f058).

**UI systems.** Diegetic 16-bit UI is the lyric surface and the plot:

- Navy panels with thick white/light borders and a drop shadow.
- Bottom dialogue box + triangular ▼ “continue” chevron; text types in (f007 shows a single mid-line character “感”; f013/f030 show a cursor-like “—|” in an otherwise empty box).
- Status bars (HP, WEIGHT) and short status badges (BLIND in strip s01).
- Command menu, party screen, staff-roll window, title window.
- Occasional world stamps / damage popups / “+LOVE” rather than a second caption track.

**Palette.** Bright grass, circular trees, periwinkle mountains with snow caps, dithered blue or sunset-orange skies, navy/gold UI, character red scarf vs white-and-red hood. Snow chapters go white/blue/navy. A repeating field-and-mountains set is the “overworld hub,” recolored by weather and time of day.

**Lyric treatment.** One line at a time inside the dialogue box, yellow/white pixel-ish type, typewriter. The box stays in a fixed bottom band even when the picture tilts or flashes (f013, f050, strip s05). English appears in the same box when the song does (“My only girl friend”, f015). Big on-screen words (寂寞, THANK YOU, THE END, PARTY) are **motifs**, not a second karaoke bar.

**Camera.** Mostly locked mid-shots, characters cropped at the waist or knees, front-facing chibi portraits. Departures are themselves game cameras: top-down overworld map with path, river, castle (strip s12); full-screen menu (f015); tilted photograph (f050); heavy full-frame dither fades (f013, f031, f058).

**Motion.** Idle sparkles, floating hearts, rain, tears, cloud drift. Strip s01: couple mid-shot, her face slightly softened/blurred to match “模糊了视线,” BLIND badge, white spark arcs. Then a hard cut to a spinning/tilted photo card (s05), then to the overworld map (s12). Motion language = stepped sprite acting + mode cuts, not a sliding cinematic camera.

---

### 3.mp4 — 方大同《麦恩莉》，故事《双人模式》（街机 / 平台动作）

**Evidence:** f001 title “麦恩莉” in scanlined pink pixels plus a smiling heart and “CREDIT 01.” f058 end card: “方大同《麦恩莉》 / 故事：《双人模式》 / 像素动画 MV · 原创剧情 / 一完.” 1920×1080 30 fps, 291.2 s.

**Story metaphors.** Love as co-op play. Arcade “GAME ZONE” with cabinets, a pink CATCH claw, confetti floor, hanging neon tubes (f003); two people at a cabinet, “2P 加入!” and a heart speech-bubble, “准备好了吗?” on a scanlined monitor (f006). A Super-Mario-like day stage: dithered cyan sky, smiling cloud, grass hills, dirt ground, HUD `1P 心 2P`, coin counter, SCORE, stage `1-1`, a raining thundercloud on the right — they lean together under implied shelter for “你是下雨时的屋檐” (f010). Flagpole “JUMP!” with score at 99999 and a timer flipped to infinity (f014). Night city: crosswalk, traffic lights, bakery neon, skyline windows, a pink “♡ MY ONLY ♡” sign (f018). 24H convenience store and a flower stall, holding hands (f022). Festival cotton-candy stall with extras walking by (f026). The lyric “模糊了视线” is staged as **literal defocus + bokeh orbs** over the couple under a yellow umbrella (f030). “广阔寂寞漩涡” becomes a spiral void with the boy tiny at the rim, letter and heart in hand (f034). Carnival: carousel, “爆米花” stand, ferris wheel (f038, f046). A dance-floor cut: cyan/pink checker, “OH YEAH” and a yellow heart, characters waving (f042). Window two-shot with a ring of firework sparks, male tears / female smile, magenta frame (f050). A CRT / RGB-dot dissolve over the street (f054), then the neon title (f058).

**UI systems.** Hybrid:

- Cream dialogue box, brown border, note ♪ glyph, always bottom-center (most story beats).
- Platformer HUD only while inside that “game level” (f010, f014): lives, coins, score, stage, timer.
- Arcade / cabinet typography and giant SFX words (2P 加入, JUMP!, OH YEAH, CREDIT 01).
- Title and end cards in the same neon-pixel language.

**Palette.** Night purple arcade; candy cabinet colors; bright day platformer (cyan dither sky, saturated hills); night city gold windows + pink neon; cream box; magenta window frame; yellow/pink/cyan dance floor. Cleaner, more “modern indie pixel” than video 2’s chunky 16-bit, but still hard-edged tiles.

**Lyric treatment.** Same RPG-like box as video 2, but cream instead of navy, and a ♪ mark. Typewriter is explicit: f038 box reads only “Oh it's hard to b” (line still being spelled). One line at a time. SFX words land on the action beat, separate from the box. “MY ONLY” also appears diegetically as neon (f018) and on the end card.

**Camera.** Side-view sidescroller in level chapters; profile walk in street/festival chapters; one graphic vortex; one framed window portrait; one graphic dance cutaway. Character scale is consistent in a chapter (full-body ~1/3–1/2 frame height in levels; slightly smaller in city wides).

**Motion (strips s01, s06, s12, day stage ~60s).** The boy idles/walks on a grass ledge; a star twinkles (shape changes s01→s06→s12); a smiling cloud and rainbow hold; the girl walks in from the right and they face each other by s12. Stepped walk cycle, held poses, looping sparkle — 30 fps output, but animation on twos/fours. Sky uses dotted/dither fill (clearer in s06).

---

## Shared rendering grammar

1. **One metaphor for the whole song.** Video 1 = rainy-city memory play. Video 2 = a JRPG session (knight + white mage). Video 3 = co-op “2P mode.” Every chapter is a skin of that metaphor, not a random new genre.
2. **Act the line, then caption it.** Umbrella and red curb, HP and BLIND, 2P join and a rain cloud, a blur pass when the lyric says vision blurs, a vortex when it says 漩涡. Karaoke never substitutes for the gag.
3. **A tiny recurring cast with lockable silhouettes.** Two leads, stable wardrobe (tan coat + red scarf; hooded mage; blue shirt + yellow dress). Extras are smaller and less detailed.
4. **Tiled, repeating sets that return and recolor.** Brick facade + parked car; field + mountains + round trees; arcade, platformer hillside, night street, carnival. Chorus/hook returns to a known place, sometimes escalated (more characters, fireworks, thank-you banner).
5. **Hard pixel geometry first; atmosphere is a layer, not a medium.** Tiles, chunky sprites, integer window panes. Glow, rain streaks, dither, CRT dots, or a one-shot blur are overlays — not watercolor fills or boiling outlines.
6. **Reserved bottom lyric band.** KTV stack (video 1) or a single game box (videos 2–3). Important faces and props sit above it. The box can survive even when the picture tilts, flashes, or fades.
7. **Two legal lyric dialects, never mixed in one video.** (A) Outlined KTV captions, 2–3 rows, current bright / others dim, bilingual OK. (B) In-world typewriter box + optional diegetic HUD and SFX words.
8. **Diegetic type is allowed.** Neon, shop signs, menus, damage numbers, JUMP! / THANK YOU / 2P 加入. These are motifs or game chrome, not a second paragraph of the same lyric.
9. **Title in, credits out, same language.** Opening card and a closing THE END / 一完 / staff roll, in the metaphor’s typography.
10. **Stepped motion, long holds, looping weather.** Walk cycles, sparkle loops, rain, laundry sway, idle bobs. Wide shots may barely move for a second (video 1 strips). Cuts between camera modes (map, menu, photo) do work that a moving camera would do in live action.
11. **Pixel-native transitions.** Hard cuts, cross-dissolves (1.f050), dither/white flashes (2.f013, 2.f058), photo-card spins (2.s05), CRT dot dissolves (3.f054), fade to black (1.f054). Not brush wipes.
12. **Emotional weather tracks the section.** Rain, clear day, snow, sunset, blur, carnival night. Palette shifts by chapter, inside one world.
13. **Readable scale.** Leads are large in talk/emotion shots, smaller in establishing wides. Faces use a handful of pixel features (dots for eyes, a few frames for blink/tears/smile).
14. **Beat and line edges are edit points.** SFX words, menu cursors, joins, jumps, and chapter cuts land on the lyric or a downbeat, not mid-word.

---

## Hard rules for a code-generated pixel lyric MV

### Resolution and grid

- Keep the engine canvas at the existing `W,H = 1920,1080` so `render.mjs`, `studio.html`, and `overlayHook` stay valid.
- Draw the **world** on a logical grid and nearest-neighbor scale it up. Recommended grids: **320×180** (×6) or **480×270** (×4) for a 1080p “indie pixel” look like videos 1 and 3; **480×272** (or 320×180) presented in a 960×544-ish sharpness if the brief wants video 2’s chunkier 16-bit look.
- Snap every sprite, tile, and camera scroll to integer logical pixels. No subpixel drift, no bilinear filter (`noSmooth()` before the upscale blit).
- Output may be 30 fps (videos 1, 3) or 24 fps (video 2). Animate **on twos or fours** (`onTwos` already exists in `core.js`; a 8 fps hold is fine for RPG idles).

### Palette

- One 16–32 color chapter palette, named in the storyboard (e.g. “arcade night: purple wall, candy cabinets, cream box, confetti”).
- Recolor the same tileset across chapters rather than painting new hues ad hoc.
- Prefer dither or tiled overlays for sky/gradients. Do not use soft watercolor washes as the base fill.

### Layering (back to front)

1. Sky / dither / far silhouette  
2. Tiled mid-background (buildings, hills, trees)  
3. Props and set dressing  
4. Characters (and walkers)  
5. Weather and local FX (rain, sparkles, tears)  
6. Occasional full-frame treatment (blur, dither flash, CRT)  
7. HUD / dialogue / KTV captions (`overlayHook`, crisp, after any paper/grain)  
8. Title/end cards  

Keep faces and the lyric box unobstructed. If a blur or dither pass is used, the box may stay sharp (videos 2–3 do this).

### Karaoke / UI

Reuse the existing `LY` table and `window.overlayHook` in `src/karaoke.js`. Do **not** invent a new renderer flag for timing — clip time, `opts.sing`, `opts.hold` already model fill and two-row holds.

Pick **one** dialect for the project:

- `ktvCaption` — video 1: outlined current line, dim next/prev, up to two or three rows, bottom-center, pixel or rounded-pixel font (not the default Ma Shan Zheng brush). `opts.hold` already lifts a previous line; keep that.
- `rpgBox` — videos 2–3: fixed box (navy+white or cream+brown), optional ▼ / ♪, typewriter driven by `opts.sing`, one line at a time. Optional chapter HUD (HP, SCORE, 1P/2P) drawn in the same overlay, never covering the box.

Do not also write the same sentence on a sign in the world unless it is a short motif (a neon “MY ONLY”, a “JUMP!”, a status word). Ask for real audio + LRC; never invent lyrics.

### Motion language

- Use existing timing helpers: `onTwos`, `pulse` / `pulse2` for HUD flashes and sparkle kicks, `kf`, `walk`, `jump`, `hash` (no `Math.random()`).
- 2–6 frame walk/idle cycles; looping rain and sparkles; held wides with one secondary motion (laundry, lights, clouds).
- Do not use brush `jit()` boil on outlines in this mode.

### Transitions

Implement as pure functions of `t` called at the end of both adjacent shots, same pattern as `brushWipe` but **do not call `brushWipe`** in pixel mode. Legal set: hard cut, fade / dip to black, cross-dissolve, dither or ordered-dot dissolve, photo-card tilt, iris, scanline wipe. Length typically 4–12 frames, on a bar or a line boundary.

### Beat sync

- One visual idea per lyric line (already in `references/music-video.md`).
- SFX words and UI state changes (cursor onto 和好, 2P join, JUMP, HP tick, BLIND) land on the word’s beat.
- Chapter palette/weather changes at section boundaries (verse / chorus / bridge).

### Forbid (pixel mode)

- `paint()` / `inkLine()` / paper grain / whole-frame multiply grain as the look (they fight hard pixels). A 2-line `PROJECT.pixel` guard in `core.js` compositing is the honest fix; do not pretend grain “reads as film.”
- Default Clawd, unless the user asks to pixel-sprite that character.
- Brush-font karaoke lozenge as the default lyric UI.
- Continuous subpixel camera pans, motion blur on every shot, 3D perspective, or watercolor bleed.
- New locations every line with no returning set.
- Karaoke that merely restates a scene with no staged metaphor.
- Mixing KTV captions and an RPG box in the same video.
- Invented lyrics or timings.

---

## Concrete deltas vs current watercolor painted-animation

| Topic | Current skill / template | Pixel lyric mode |
| --- | --- | --- |
| Medium | `paint()` / `inkLine()`, paper, multiply grain, `glow()` as light in pigment | Snapped tiles + sprites, nearest-neighbor upscale, optional local glow/dither/CRT as FX layers |
| Motion | Line boil (`boilSeed`, `jit`), hand-drawn on twos | Sprite frames and weather loops; `onTwos` still useful; no outline boil |
| Default lead | Clawd via `clawd()` | Project-specific pixel casts; may still use `walk` / `jump` / `pulse` for timing |
| Lyrics | Ragged ink lozenge + Ma Shan Zheng, ochre fill, y≈1024 | `ktvCaption` or `rpgBox` through the same `overlayHook` + `LY` |
| “禁止正文案” | Almost no on-screen type | Diegetic UI and a few SFX words are in-grammar |
| Transitions | `brushWipe` at chapter seams | Cuts, fades, dither, card flip, CRT; no brush wipe |
| Color | Watercolor PAL in `core.js` | Per-chapter indexed palettes in a project file |
| Performance | ≤1.5–2.5 s/frame, fill-costly brushes | Much cheaper if the world is a small buffer blit; still pure functions of `t` |
| Canvas / render | `W,H=1920×1080`, Chrome `--window-size=1920,1080` | Unchanged; upscale happens inside the frame |
| Storyboard | One idea, chapters = song sections, one shot per line | Same, plus an explicit metaphor (RPG / arcade / diegetic city) and a UI dialect |

Keep watercolor as the default path. Pixel lyric is an additional mode, not a replacement.

---

## Recommended skill-file changes (implementable)

Do not invent render flags or change `render.mjs` window size. Hook what already exists: `PROJECT` in `src/config.js`, `shots()`, `onTwos` / `pulse` / `kf` / `walk` / `jump` / `hash` / `boilSeed` in `core.js`, `brushWipe`-style transition functions in `timeline.js`, `LY` + `window.overlayHook` in `karaoke.js`, compositing order (paper → world → grain → `overlayHook`).

1. **`SKILL.md`**
   - Extend the frontmatter description so 像素风 / 像素歌词 MV / JRPG / 街机 MV also triggers the skill.
   - After the existing “音乐视频再读 music-video.md” line, fork: if the user wants pixel, also read `references/pixel-lyric-mv.md` and do **not** apply the “只用 paint/inkLine” rule.
   - Add a short “Pixel lyric mode” subsection (see `SKILL_PATCH.md`) stating grid, no-paper, overlay karaoke dialects, and the forbid list.
   - Leave watercolor workflow, render authorization, and LRC/audio rules in place.

2. **New `references/pixel-lyric-mv.md`**
   - Full body is drafted in `/workspace/ref-videos/pixel-lyric-mv.DRAFT.md`. It covers metaphor choice, UI dialect, storyboard columns (set, palette, UI state), overlay karaoke, a copy-pastable `src/pixel.js` helper that uses only p5 `createGraphics` / `noSmooth` / `image`, transition helpers with the same call shape as `brushWipe`, and review checks.

3. **Template hooks (optional files, no new engine API)**
   - `template/src/pixel.js` (or written into the project when the mode is chosen): `PX` buffer, `pxBegin()` / `pxBlit()`, `pxRect` / `pxSprite` snapped to the grid, `ditherDissolve`, `fadeBlack`, `cardTilt`. Register the script in `studio.html` after `core.js`.
   - `karaoke.js`: if `PROJECT.pixel`, draw `ktvCaption` or `rpgBox` instead of the ink lozenge; keep the `LY` schema.
   - `core.js` compositing, **minimal real patch**: skip `image(paperG)` and grain multiply when `PROJECT.pixel` is truthy, so hard pixels are not multiplied by paper texture. Still call `overlayHook`.
   - `config.js`: document `PROJECT.pixel = true`, `PROJECT.pixelGrid = [320, 180]`, `PROJECT.lyricUI = 'rpgBox' | 'ktvCaption'`.
   - Do not add fictional `render.mjs --pixel` until someone actually needs a different window size.

4. **Review loop**
   - Same `render.mjs --sheet` / `--strip` / Read pass. Extra checks: nearest-neighbor edges, integer snap, lyric-box contrast, metaphor consistency, no leftover brush wipe or Clawd.
