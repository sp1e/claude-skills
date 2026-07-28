# Bundled assets are not included in this copy

Upstream, this skill ships as "self-contained" — its `assets/` folder carries the
brand fonts, background music and animated background that `SKILL.md` step 0
copies into a new project. **Those four binaries were deliberately left out of
this repository:**

| File | Size | Why omitted |
|---|---|---|
| `assets/fonts/TT_Norms_Pro_{Normal,Medium,Bold}.woff2`, `tt_norms_pro_mono_regular-webfont.woff2` | ~380 KB | **TT Norms Pro** is a commercial retail typeface (TypeType). Webfont licences are per-licensee and normally forbid redistribution. |
| `assets/fonts/ABCSolarDisplay-Bold.woff2` | ~105 KB | **ABC Solar Display** is a commercial retail typeface (ABC Dinamo). Same restriction. |
| `assets/bgm.mp3` | 5.3 MB | HeyGen brand music; no licence grant accompanies it. |
| `assets/bg-pattern.mp4` | 12.8 MB | HeyGen brand background video; likewise. |

The repository's `LICENSE` is Apache-2.0 and `CREDITS.md` states it covers
"all code in this repository". Fonts, music and video are not code, and no
separate asset licence is published upstream — so redistributing them from a
public mirror would be unsafe. The prose, build spec, visualization registry,
caption script and HTML skeleton *are* Apache-2.0 and are all present here.

## Getting the assets

They remain available from the upstream project, which is where any licence to
use them comes from:

```bash
git clone --depth 1 https://github.com/heygen-com/hyperframes
cp -r hyperframes/.claude/skills/changelog-video/assets <this-skill>/assets
```

Or install the upstream plugin, which carries the full skill including assets:

```bash
claude plugin marketplace add heygen-com/hyperframes
claude plugin install hyperframes@hyperframes
```

Without `assets/`, follow `references/build-spec.md` for the brand tokens and
substitute your own typefaces, music bed and background — the doctrine in
`SKILL.md` and the seam/motion skills still applies unchanged.
