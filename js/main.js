(() => {
 const config = window.WEDDING_CONFIG, translations = window.TRANSLATIONS;
 let language = config.defaultLanguage === 'en' ? 'en' : 'es';
 const $ = id => document.getElementById(id);
 const date = config.weddingDate ? new Date(config.weddingDate) : null;
 const hasDate = date && !isNaN(date);

 // ---- Datos desde config ----
 document.querySelectorAll('[data-time]').forEach(el => el.textContent = (config.schedule || {})[el.dataset.time] || '--:--');
 const v = config.venue || {}, r = config.registry || {};
 $('venueName').textContent = v.name || ''; $('venueAddress').textContent = v.address || ''; $('mapsBtn').href = v.mapsUrl || '#';
 $('registryStore').textContent = r.store || ''; $('eventNumber').textContent = r.eventNumber || ''; $('registryBtn').href = r.url || '#';
 $('dressBtn').href = config.dressExamplesUrl || '#';

 // ---- Calendario ----
 function renderCalendar(t) {
  const wrap = document.querySelector('.cal-wrap');
  if (!hasDate) { wrap.style.display = 'none'; return; }
  // Fecha en hora de El Salvador (UTC-6)
  const local = new Date(date.getTime() - 6 * 3600000);
  const y = local.getUTCFullYear(), m = local.getUTCMonth(), d = local.getUTCDate();
  $('calMonth').textContent = t.months[m];
  const first = (new Date(Date.UTC(y, m, 1)).getUTCDay() + 6) % 7, total = new Date(Date.UTC(y, m + 1, 0)).getUTCDate();
  let html = t.dows.map(x => `<span class="dow">${x}</span>`).join('') + '<span></span>'.repeat(first);
  for (let i = 1; i <= total; i++) html += i === d ? '<span class="wed" title="' + i + '">♥</span>' : `<span>${i}</span>`;
  $('calGrid').innerHTML = html;
  const pad = n => String(n).padStart(2, '0');
  $('heroDate').textContent = language === 'en' ? `${pad(m + 1)} | ${pad(d)} | ${y}` : `${pad(d)} | ${pad(m + 1)} | ${y}`;
 }

 // ---- Idioma ----
 function translate(lang) {
  language = lang; document.documentElement.lang = lang; const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => { const val = t[el.dataset.i18n]; if (typeof val === 'string') el.textContent = val; });
  $('heroDate').textContent = config.displayDate[lang];
  $('rsvpDeadline').textContent = (config.rsvpDeadline || {})[lang] || '—';
  renderCalendar(t);
  $('lang').textContent = lang === 'es' ? 'EN' : 'ES';
  document.title = lang === 'es' ? 'Daniela & Michael | Nuestra boda' : 'Daniela & Michael | Our Wedding';
 }
 $('lang').addEventListener('click', () => translate(language === 'es' ? 'en' : 'es')); translate(language);

 // ---- Animación al hacer scroll ----
 const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
 document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

 // ---- Música ----
 const music = $('backgroundMusic'), toggle = $('musicToggle');
 async function playMusic(silent) {
  try { await music.play(); toggle.classList.add('playing'); $('musicIcon').textContent = 'Ⅱ'; }
  catch (err) { toggle.title = translations[language].musicMissing; if (!silent) alert(translations[language].musicMissing); }
 }
 toggle.addEventListener('click', () => {
  if (!music.paused) { music.pause(); toggle.classList.remove('playing'); $('musicIcon').textContent = '♫'; return; }
  playMusic(false);
 });

 // ---- Sobre de entrada ----
 $('envelope').addEventListener('click', () => {
  $('envelopeScreen').classList.add('opened');
  document.body.classList.remove('locked');
  playMusic(true); // intenta iniciar la música al abrir (sin alertas si falta el archivo)
  setTimeout(() => $('envelopeScreen').remove(), 2000);
 }, { once: true });

 // ---- Cuenta regresiva ----
 function updateCountdown() {
  if (!hasDate) { ['days', 'hours', 'minutes', 'seconds'].forEach(id => $(id).textContent = '—'); return; }
  const remaining = Math.max(0, date.getTime() - Date.now());
  const values = [Math.floor(remaining / 86400000), Math.floor(remaining / 3600000) % 24, Math.floor(remaining / 60000) % 60, Math.floor(remaining / 1000) % 60];
  ['days', 'hours', 'minutes', 'seconds'].forEach((id, i) => $(id).textContent = String(values[i]).padStart(2, '0'));
 }
 updateCountdown(); setInterval(updateCountdown, 1000);

 // ---- Confirmación ----
 const form = $('rsvpForm');
 form.addEventListener('change', () => $('plusOne').classList.toggle('show', form.attendance.value === 'couple'));
 form.addEventListener('submit', event => {
  event.preventDefault(); const t = translations[language];
  const name = $('guest').value.trim(); if (!name) { $('formMessage').textContent = t.nameRequired; $('guest').focus(); return; }
  if (!config.rsvpEmail) { $('formMessage').textContent = t.rsvpPending; return; }
  const att = form.attendance.value, attLabel = { yes: translations.es.yes, no: translations.es.no, couple: translations.es.couple }[att];
  const plus = att === 'couple' ? $('plusName').value.trim() : '';
  const subject = encodeURIComponent(`RSVP Daniela & Michael - ${name}`);
  const body = encodeURIComponent(`Nombre / Name: ${name}\nAsistencia / Attendance: ${attLabel}\n+1: ${plus || '-'}\nAlergias / Allergies: ${$('allergies').value.trim() || '-'}`);
  $('formMessage').textContent = t.rsvpPrepared;
  window.location.href = `mailto:${config.rsvpEmail}?subject=${subject}&body=${body}`;
 });

 // ---- Barra de progreso ----
 window.addEventListener('scroll', () => { $('progress').style.width = (100 * window.scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight)) + '%'; }, { passive: true });
})();
