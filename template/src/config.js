// config.js: project settings.
//   duration: the video's length in seconds.
//   bpm:      the rhythm that bounces, dances and pulse() follow. Clawd always moves to some beat; if the video has music,
//             set this to the song's tempo, and set offset to the time in seconds of its first downbeat.
//   pixel:    set true for pixel-lyric mode (see references/pixel-lyric-mv.md). Skips paper/grain; use src/pixel.js.
//   pixelGrid:[logicalW, logicalH], e.g. [320, 180] then nearest-neighbor upscale to 1920×1080.
//   lyricUI:  'rpgBox' | 'ktvCaption' when pixel is true.
const PROJECT = {
  duration: 11, bpm: 120, offset: 0,
  // pixel: true,
  // pixelGrid: [320, 180],
  // lyricUI: 'rpgBox',
};
