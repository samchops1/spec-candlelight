# Scott Hanley / Candlelight — visual system (v2 · Web 3.0 sleek)
Graphic Designer drop for Web Designer. Mobile-first. **Frames/poster unchanged** — only shell, type, color, glass, space.

Sameer reject: dive-bar template look + broken film. Direction: **Web 3.0 sleek/slick** — glass, clean type, bold space.

Files: `/workspace/previews/candlelight/visual-system/`
Frames: `frames/01-who.jpg` … `07-mic-cards.jpg` (keep)
Video poster: `video-poster.jpg` (+ `assets/scott-summary-poster-v2.jpg`) (keep)

---

## Color (v2 — glass night, not wood dive)

| Token | Hex | Use |
| --- | --- | --- |
| `--bg` | `#07080c` | Near-black cool ground (not brown) |
| `--bg-elev` | `#0e1018` | Soft lift behind glass |
| `--glass` | `rgba(255,255,255,0.06)` | Frosted panels / nav / cards |
| `--glass-border` | `rgba(255,255,255,0.12)` | 1px hairline on glass |
| `--glass-blur` | `16–24px` | `backdrop-filter: blur(...)` |
| `--ink` | `#f4f2ef` | Primary type (clean off-white) |
| `--muted` | `#9a9aa8` | Meta, chips, hours |
| `--amber` | `#ff8a1a` | Kickers, primary CTA fill |
| `--amber-soft` | `rgba(255,138,26,0.18)` | Chip / focus glow |
| `--red` | `#e11d2e` | Thin accent only (HOSPY / listen rail) |
| `--gold` | `#e8c48a` | Lisa pull + soft rules only |

**Do:** cool black, frosted glass, amber as the one heat source, lots of empty.  
**Don’t:** wood fills, heavy brown panels, neon blue stacks, cream-on-brown “pub menu,” busy texture backgrounds.

---

## Type (v2 — clean, not tavern)

| Role | Face | Size (mobile → desktop) | Weight | Notes |
| --- | --- | --- | --- | --- |
| Display / H1 | **Syne** or **Outfit** | 42 → 72 | 700 | Tight tracking (−0.02em); sentence case OK |
| Chapter H2 | **Outfit** / Syne | 28 → 40 | 600 | Short, airy; not Garamond display dumps |
| Kicker | Outfit | 11–13 | 600 | Letter-spaced `0.14em` UPPER amber |
| Body | **Inter** or Source Sans 3 | 16–18 | 400 | line-height **1.65**, max-width ~38rem |
| Quote | Inter medium italic OR gold | 18–20 | 500 | Max **two** guest lines sitewide |
| Meta / chips | Inter | 12–13 | 500 | muted on glass |

Load: `Syne` + `Inter` (or Outfit + Inter). Drop Oswald/Cormorant for this rebuild unless Lisa pull keeps a quiet italic for hero only.

**Lisa “legend” pull (hero only):** Inter/Outfit italic, `--gold`, generous padding, no sticker chrome.

---

## Space & layout (the “slick”)

- Section padding: **88–120px** desktop, **56–72px** mobile — don’t crush chapters.
- One column story; max content width **720px** for prose; frames can break out to ~960.
- Sticky nav: glass bar, blur, hairline bottom — not a opaque wood strip.
- Chapter shell order unchanged: **kicker → H2 → frame → copy** (Architect IA).
- Between chapters: 1px `--glass-border` or 48px air — no thick wood rules.

---

## Glass components

**Nav / cards / chips / listen**
```
background: var(--glass);
backdrop-filter: blur(20px);
border: 1px solid var(--glass-border);
border-radius: 16–20px;
```

**Chip row (beat 02):** wrap only (no h-scroll). Glass pills, muted labels — Pearl · Pool · darts · Best Dive 2020.

**Listen card:** glass panel, **2–3px** red left rail (not 8px dive), amber meta, ≤1 optional spoken line, text link.

**CTA primary:** solid `--amber`, black label, radius 999 / 14px.  
**CTA ghost:** glass + amber text, hairline border.  
Primary labels: “Watch his story” / “Find him at the bar”.

**Film chapter:** large poster, centered play on glass disc; user-initiated play only; no broken autoplay.

---

## Journey frames (unchanged map)

Still 01–07 + film poster. Same files. New shell sits **on / around** them — don’t re-bake photos.

| Beat | File | Notes |
| --- | --- | --- |
| 01 Who | `frames/01-who.jpg` | Soft bottom gradient into `--bg` so type stays clean |
| 02 Bar | `frames/02-bar.jpg` | |
| 03 Years | `frames/03-years.jpg` | Timeline beside (desk) / under (mobile) |
| 04 2018 | `frames/04-2018.jpg` | Soft — no clinical overlays |
| 05 2025 | `frames/05-2025.jpg` | Award as glass chip, not trophy CGI |
| 06 Voices | `frames/06-stools.jpg` | Olya + Kathy only |
| 07 Listen | `frames/07-mic-cards.jpg` | Three cards A/B/C |

Frame rules: one photo/beat; fade-in only; no ken-burns; no overlay traps.

---

## Motion

- Opacity + **8–16px** Y fade on enter (shorter than dive v1)
- Prefer CSS transitions 200–320ms ease-out
- No parallax stacks, no hover-trap overlays
- Film: click-to-play only

---

## Don’t invent

No painting, no shooting art, no shuffleboard hero, no stock sickbed, no fake trophies. Typography frame if a beat lacks verified photo (06 pattern).
