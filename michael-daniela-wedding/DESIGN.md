# Michael & Daniela — Wedding Editorial Luxury

## Vision
A high-end, editorial wedding invitation website, designed like a fine-art fashion magazine. Soft floral palette, generous negative space, sophisticated type, large photography, and restrained cinematic motion. **Not** a generic wedding template. Primary language Spanish, optional English.

## Brand / personality
Romantic, intimate, luminous, modern, warm, sophisticated. The couple is the protagonist, not the interface. Use delicate asymmetry and intentional hierarchy.

## Palette (inspired by the supplied floral reference)
| Token | Hex | Usage |
|---|---|---|
| Cream | `#FAF7F1` | Main background |
| Paper | `#FFFDF9` | Light panels |
| Ink | `#35332E` | Primary text |
| Sky blue | `#BCD5ED` | Subtle decorative accent |
| Peony pink | `#F4B0C2` | Accent |
| Hot pink | `#EF7F9B` | Rare emphasis |
| Coral | `#F5A38E` | Warm accent |
| Apricot | `#F6BF79` | Accent |
| Blush | `#F6D7D5` | Large light pink surfaces |
| Butter yellow | `#FAEFD0` | Subtle panels |
| Daisy yellow | `#F7D574` | Decorative detail |
| Fresh green | `#A4B76D` | Botanical accent |

Keep 80% of the screen in warm neutrals. Use floral hues as carefully selected highlights rather than saturating the interface.

## Typography
- Display: **Italiana**, regular weight, 55–190px responsive; slight negative letter spacing. Refined high-contrast serif.
- UI / navigation: **Jost**, 9–11px uppercase, letter-spacing .15–.28em.
- Paragraphs: **DM Sans**, 14–16px, 300 weight, line-height 1.9–2.
- Avoid overuse of bold, gradients, shadows, and heavy button fills.

## Layout and components
- Header: fixed translucent overlay, transitions to warm cream on scroll. Custom MD monogram, compact navigation, small outlined RSVP action.
- Hero: 100svh background video with static photo fallback, soft dark overlay, asymmetrically aligned couple names, minimalist scroll prompt.
- Section label: small uppercase Jost with a thin pink horizontal line.
- Editorial titles: oversized Italiana, with occasional muted rose highlighted phrase.
- CTA: underline + arrow or precise rectangular outline; avoid generic large rounded pills.
- Cards: subtle 1px borders, roomy padding, asymmetric alignment.
- Gallery: staggered columns and varied vertical offsets.
- Footer: deep charcoal, delicate type.
- Mobile: preserve elegance, reduce visual density, hamburger overlay.

## Content / section order
1. Cinematic hero — names, date, video and first CTA.
2. Our story — editorial typography, portrait and text.
3. Immersive quote — full-width parallax photo.
4. Celebration — ceremony/reception and live countdown.
5. Memories — staggered photographic gallery.
6. RSVP — intimate invitation, replaceable RSVP email link.
7. Footer + floating opt-in audio controller.

## Motion direction
- Reveal on scroll: opacity 0 to 1 and translateY(35px) to 0, ~850ms.
- Hero parallax: background moves ~0.2x scroll speed.
- Full-width image parallax: ~0.12x relative viewport offset.
- Images: restrained scale to 1.065 on hover.
- Microinteractions: arrow rotates, underline grows, CTA gap expands.
- Scroll progress: thin rose bar at top.
- Respect `prefers-reduced-motion` and avoid scroll-jacking.
- No autoplay audio. Audio begins only after user taps the floating control.

## Stack
- HTML5 semantic sections, CSS3 responsive styles, vanilla JavaScript.
- IntersectionObserver for scroll reveals, requestAnimationFrame for light parallax.
- No build step and no JavaScript frameworks required.
- Google Fonts: Italiana, Jost, DM Sans. Photos are currently loaded from Unsplash URLs and can be replaced with local images.
- For a future upgrade: GSAP ScrollTrigger + Lenis only if truly necessary, with accessibility fallbacks.

## Internationalization
`js/main.js` includes `translations.es` and `translations.en`; all displayed UI copy is switched via `data-i18n` / `data-i18n-html` and the document language is updated. To add new copy, add the same key to both dictionaries.

## Editable configuration
- Wedding date/time: `WEDDING_DATE` in `js/main.js` (`2027-04-11T16:00:00-06:00`, editable).
- Hero video: `assets/video/wedding-hero.mp4` (MP4/H.264 recommended).
- Background song: `b-music/wedding-song.mp3` (MP3, starts only after click).
- Poster image: `assets/images/hero-poster.jpg` (optional; photo fallback already included in CSS).
- RSVP email: replace `confirmaciones@example.com` in `index.html`.
- Venue details: replace placeholder text in `index.html` and translation dictionaries.
- Images: replace remote Unsplash URLs with local images for a self-contained deployment.

## Performance and accessibility
- Lazy-load images below fold; optimize photos to WebP/AVIF; compress video to ~5–12 MB where practical.
- Provide alt text, keyboard focus, semantic landmarks, aria labels, responsive layout, and reduced-motion support.
- Contrast: charcoal text on cream; white on hero overlay.
- Use controls that work without mouse hover.
