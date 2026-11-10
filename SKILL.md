---
name: painted-animation
description: >-
  用代码做手绘水彩墨线卡通短片/MV，或像素风歌词 MV（MP4）：p5.js 无头 Chrome 逐帧渲染，ffmpeg 编码。水彩路径用
  p5.brush；像素路径用逻辑网格 nearest-neighbor 放大。歌词 MV
  必须先产出「歌词→场景」分镜文本并确认，再写画面。屏幕文案须与歌曲/用户语言一致，中文片使用 CJK 字体与可读歌词排版。用户要做动画、卡通短片、音乐视频、歌词 MV、像素风 / JRPG / 街机 MV、循环 GIF，或提到
  Clawd / PDoomVideo / ClaudeAnimationBase 时使用。覆盖分镜、引擎 API、节拍与 LRC
  同步、预览审查，以及本地/云端完整渲染选择。
---
# Painted animation

用代码做手绘水彩短片的方法，源自 [JohnHeibel/PDoomVideo](https://github.com/JohnHeibel/PDoomVideo) 与 [ClaudeAnimationBase](https://github.com/JohnHeibel/ClaudeAnimationBase)（MIT），引擎在本技能的 `template/`。也可做**像素风歌词 MV**（见 [references/pixel-lyric-mv.md](references/pixel-lyric-mv.md)）。

**原理：** 每一帧是时间 `t` 的纯函数。`studio.html` 加载 p5.js + p5.brush 与场景；`render.mjs` 用无头 Chrome 渲接触片或并行渲全帧，ffmpeg 编码 MP4（可带音频）。

本技能目录即本文件所在文件夹；脚手架脚本、模板、参考与示例都在旁边。本机已具备 Node、Google Chrome、ffmpeg、Python3+numpy。像素路径的屏上语言、CJK 字体与 rpgBox 排版见 [references/pixel-lyric-mv.md](references/pixel-lyric-mv.md)；逐句分镜硬门禁与词画对齐见 [references/lyric-storyboard.md](references/lyric-storyboard.md)。

## Workflow

### 0. Scaffold

```bash
bash <本技能目录>/scripts/new_project.sh <project-dir>        # 加 --keep-demo 可保留示例场景
```

把 `<本技能目录>` 换成 Skill 加载后给出的技能目录绝对路径。脚本会复制 `template/`、跑 `npm install`，并检查 node / ffmpeg / Chrome。然后**完整阅读** `<project-dir>/ANIMATION_GUIDE.md`，再用 Read 看 `docs/emotions.jpg` 与 `docs/views.jpg`。

音乐视频或超过约 20 秒的片子，再读 [references/music-video.md](references/music-video.md)。

若用户要的是**像素风歌词 MV**（像素 / 点阵 / JRPG / 街机 / 平台动作 / 卡点像素），再读 [references/pixel-lyric-mv.md](references/pixel-lyric-mv.md)，并在 `src/config.js` 设 `PROJECT.pixel = true`（以及 `pixelGrid`、`lyricUI`）。该模式下不要使用「只用 paint/inkLine」和默认 Clawd 规则，改走像素网格、tiled 场景与 `overlayHook` 卡拉 OK。水彩短片仍走原流程。

做音乐 MV 时，分镜前必须完成：

1. 请用户提供歌曲音频和 `.lrc` 歌词文件；缺少时不要编造或近似歌词。
2. 用**一条自然语言问题**问创作方向（故事与整体感觉、想反复出现的画面、想避开的内容），不要拆成多问或多字段；告诉用户可一句话回答或留空。
3. 确认文件并概括推断出的方向；空白当作「无偏好」。缺音频或 LRC 就暂停。
4. 用 `scripts/beat_grid.py` 测节拍；以用户提供的音频和 LRC 为时间真相。

### 1. 歌词 → 场景分镜文本（硬门禁，先于任何画面）

歌词 MV（水彩或像素）**必须先产出分镜文本，再生成画面**。完整写法见 [references/lyric-storyboard.md](references/lyric-storyboard.md)。非歌词短片仍写 `STORYBOARD.md`（格式见 `ANIMATION_GUIDE.md`），同样先给人看再写代码。

1. 在项目根写 `STORYBOARD.md`：锁定整片隐喻、介质、角色、母题、开场/收尾；再按 LRC **逐句**填表——每句对应一个可拍的背后场景（地点、事件、角色反应、镜头、出镜转场、读点）。
2. 把同一份分镜发到对话里请用户确认。未确认前：禁止写 `src/scenes/*` 绘制代码、禁止填完就开渲的「先画后补分镜」、禁止全片渲染。用户明确说「不用看分镜 / 直接干」时，分镜文件仍要写全，可跳过等待。
3. 用户只改某几行时，先改表并复述变更，再进入下一步。
4. 通过后才：把时间写入 `src/karaoke.js` 的 `LY`，按章节建场景文件，严格按表实施。

一行歌词 ≈ 一个镜头；「画面事件」必须是可拍场景，不是情绪词；先演后标（场景演词意，卡拉 OK 出字）；副歌回到同一场景并升级。

示例结构见 [examples/xiaozhen/STORYBOARD.md](examples/xiaozhen/STORYBOARD.md)。

### 2. Build shot by shot

- 在 `src/config.js` 设 `duration`、`bpm`、`offset`（及 `audio`）。像素模式再设 `pixel`、`pixelGrid`、`lyricUI`。
- 每个场景一个 IIFE 文件放在 `src/scenes/`，末尾 `shots([[t0, fn], ...])`；在 `studio.html` 加对应 `<script>`。
- 先挡关键姿势成静帧，再补中间运动。
- 像素模式下：模板已含 `src/pixel.js`（写法见 `references/pixel-lyric-mv.md`）；镜头函数里用 `pxBegin` / 瓦片与精灵 / `pxBlit`，不要调用 `paint()`、`inkLine()` 或 `brushWipe()`。卡拉 OK 仍写在 `src/karaoke.js` 的 `LY` 与 `overlayHook` 里，按 `PROJECT.lyricUI` 画 `ktvCaption` 或 `rpgBox`。歌词排版要清晰可读、不挡住角色、气质与像素/街机画面一致；无唱词时不要画空框。
- 像素片或中文（及其他非英语）片子：屏上 HUD、特效字、招牌、标题卡与结束卡须与歌曲（或用户指定）语言一致，使用支持该文字的字体（中文用 CJK 黑体，不要只用 Press Start 2P / Courier）；细则见 [references/pixel-lyric-mv.md](references/pixel-lyric-mv.md)。
- 每一镜对照 `STORYBOARD.md` 对应行实施；若画面与分镜冲突，先更新分镜或说明偏离原因。画完后核对各镜 `shots()` 起点是否等于对应 `LY` 起点，并检查词画是否匹配（场景、调色、情绪、道具不得与该句矛盾，后段回访场景要升级而不是原样复用）。

### 3. Render and look — every shot, several times

不能靠读代码看运动。在项目目录：

```bash
node render.mjs --sheet=0.1,0.8,1.6,2.4 --cols=4 --w=480 --out=out/check/a.jpg
node render.mjs --strip=2.1:2.6 --out=out/check/strip.jpg
node render.mjs --sheet=2.3 --crop=760,420,500,400 --w=500 --out=out/check/face.jpg
```

用 Read 打开每张图，对照分镜 reads 与指南审查清单改到满意。像素/歌词片还要抽查标题卡、HUD、亮暗地面上的歌词框，以及场景内文字；确认切镜时间与 `LY` 一致、词画匹配。接触片、短条带等少量预览可在当前环境渲；完整成片前必须先问用户选本地还是云端。

### 4. Render the video

**禁止**未经明确选择就开始完整渲染。预览审完后，说明云端全量可能很慢，并明确问本地还是云端；分镜/预览通过或笼统「继续」都不算授权。

- 选本地：不要在云端跑全片；给出该平台的依赖、`npm install`、渲帧与编码命令。
- 选云端：确认时长、帧数与大致耗时后再用可断点多 worker 渲染。
- 未答或模糊：不要全量渲染，再问一次。

```bash
node render.mjs --clip --out=out/video.mp4
node render.mjs --frames --workers=4 && node render.mjs --encode --out=out/video.mp4 [--audio=assets/song.mp3]
```

汇报输出路径、时长与 ms/frame。

## 最重要的规则

默认（水彩）仍是：

1. **手绘介质。** 只用 `paint()` / `inkLine()`；平面 2D；光用 `glow()`。
2. **禁止正文案。** 歌词 MV 的卡拉 OK 与少量大号 SFX 例外。
3. **每镜有事发生。**
4. **给观众时间读懂。** 列出 reads，一次一件。
5. **活的。** 无静帧、表情走 `emotions()`、角色够大、跟节拍。
6. **每个接缝有转场。**
7. **整片统一。** 一个世界、色彩弧、情绪线、首尾呼应。
8. **歌词先分镜后画面。** 有 LRC 的片子必须先交 `STORYBOARD.md`（逐句场景）并确认（或用户明确跳过确认），再写绘制代码。

`PROJECT.pixel === true` 时，用下面这一组替换第 1、2、5、6 条（3、4、7、8 仍适用）：

1. **硬像素介质。** 在 `PROJECT.pixelGrid` 逻辑画布上作画，`noSmooth()` nearest-neighbor 放大到 1920×1080；坐标取整。不要用 `paint()` / `inkLine()` / 纸纹 multiply 当主外观。灯与霓虹可局部发光；天空用 dither，不用水彩晕染。
2. **文案只能是一种歌词方言 + 少量世界观 UI。** 整片只选 `ktvCaption`（描边 KTV 叠行）或 `rpgBox`（对话框打字机，可加血条/分数等 HUD）。允许少量节拍上的 SFX 词和短主题字，语言须与歌曲/用户语言一致（英文片可用 JUMP!、霓虹 MY ONLY；中文片用中文标签，见 pixel-lyric-mv.md）。不要在场景里再写一遍整句歌词。无唱词时不要画空歌词框。
5. **活的，但是分帧。** 用现成的 `onTwos` / 走路循环 / 雨与闪光 loop；不要墨线 boil。角色轮廓稳定、够大、跟节拍。
6. **每个接缝有像素转场。** 硬切、淡入淡出、dither/点阵溶解、照片翻卡、CRT，不要 `brushWipe`。

## Engine gotchas

- 帧并行乱序：无跨帧状态、无 `Math.random()`；用 `hash(i)` / `jit()`。
- 每个独立背景元素前先 `boilSeed(key)`。
- 别用 p5 全局名（`line`、`text`、`color`…）当顶层函数名。
- 门窗屏：先画里面再盖框。
- 点列里的 `NaN` 会炸 OffscreenCanvas。
- 成本≈填充与描边数；目标约 ≤1.5–2.5 s/帧。无真 GPU 时可用 `--soft-gl`。
- Linux 上 Chrome 一般是 `/usr/bin/google-chrome`；否则传 `--chrome=<path>`。
- `PROJECT.pixel` 为真时：合成阶段跳过 `paperG` 与 grain multiply，仍调用 `overlayHook`。世界画在小缓冲里再 blit；HUD/歌词只画在 overlay。
- 像素模式禁止 `Math.random()` 与跨帧状态的规则不变；抖动与闪光用 `hash(i)`。

## Adapting

- Clawd 是默认主角，不是硬性要求；新角色用同一套 `paint`/`ribbon`/`through`/`glow`。
- `src/karaoke.js` 做逐字卡拉 OK。
- `LOOPS` + `node render.mjs --loop=name --png` 做无缝循环。
- 像素歌词 MV：先锁定整片隐喻（下雨城市 / JRPG / 双人街机…）和 `lyricUI`，再写分镜。用法见 [references/pixel-lyric-mv.md](references/pixel-lyric-mv.md)。
- 新像素角色用同一套 `walk` / `jump` / `pulse` / `kf` 计时，但外形是网格精灵，不是 `clawd()`。
- 逐句歌词分镜模板与检查清单：[references/lyric-storyboard.md](references/lyric-storyboard.md)。
