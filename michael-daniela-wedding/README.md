# Michael & Daniela — Wedding website

Static premium wedding website in HTML/CSS/JS. Open `index.html` in a browser (or run `python -m http.server 8000` inside this folder and open http://localhost:8000).

## Add your video
Place an MP4 at `assets/video/wedding-hero.mp4`. It will play automatically **muted** and loop. The site shows a fallback photograph when no video is present. For a custom static fallback, replace the Unsplash URL in `.hero-fallback` inside `css/styles.css` with `../assets/images/hero-poster.jpg` and put your JPG there.

## Add your song
Place an MP3 at `b-music/wedding-song.mp3`. Visitors click the floating music button to start/pause. Browsers block audio autoplay, so music is never forced. If the file is missing, the button explains it.

## Set the wedding time
`js/main.js` has `const WEDDING_DATE = '2027-04-11T16:00:00-06:00'`. It currently counts down to **April 11, 2027 at 4:00 PM El Salvador time**. Change the hour if your ceremony begins at a different time.

## RSVP
Replace `confirmaciones@example.com` in `index.html` with the real email, or replace the mailto link with a Google Form, WhatsApp link, or RSVP service. The current link is a demonstration and does **not** save guest confirmations.

## Languages
Use the `EN / ES` switch in the header. Texts are defined in `translations` in `js/main.js`. The date strip `DOMINGO / ABRIL 2027` is intentionally decorative and stays in Spanish; edit the markup if you want those words translated too.

## Photos
Example photos use externally hosted Unsplash URLs and require internet access. Replace with your own licensed couple/wedding photos before launch. The included `assets/images/floral-palette-reference.png` is the palette image you uploaded; it is a reference and is not published in the layout.

## Deployment
Upload `index.html`, `css/`, `js/`, `assets/`, and `b-music/` preserving their relative paths to any static hosting (HostGator, Netlify, Vercel, GitHub Pages). HTTPS recommended. No npm or build required.

## Files
- `index.html` — layout and content
- `css/styles.css` — responsive styles, colors, typography, motion
- `js/main.js` — translations, countdown, menu, audio, scroll animations
- `DESIGN.md` — detailed design system
