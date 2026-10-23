/* ===== MICHOFER.SV — Script principal (versión estática) ===== */

// Endpoint de FormBold donde llegan las reservas y mensajes al correo.
// Para cambiarlo, reemplaza esta URL por la de tu formulario en FormBold.
var BOOKING_ENDPOINT = 'https://formbold.com/s/oYAKv';

/* ===== Traducciones (ES / EN) ===== */
var translations = {
  es: {
    'nav.home': 'Inicio','nav.about': 'Sobre nosotros','nav.services': 'Servicios','nav.rental': 'Alquiler','nav.how': 'Cómo funciona','nav.blog': 'Blog','nav.contact': 'Contáctanos',
    'hero.eyebrow': 'Premium Mobility · El Salvador','hero.title': 'Tu chofer privado, cuando lo necesitas','hero.subtitle': 'Alquila un vehículo con chofer incluido para moverte con total libertad en El Salvador','hero.list1': 'Alquiler por horas con chofer incluido','hero.list2': 'Viajes de punto A a punto B (One Way)','hero.list3': 'MiChofer — tu chofer en tu propio vehículo','hero.cta1': 'Reservar Ahora','hero.cta2': 'Ver Servicios','hero.stat1': 'Atención 24/7','hero.stat2': 'Servicio personalizado','hero.stat3': 'Disponibilidad anual',
    'booking.eyebrow': 'Reserva en línea','booking.title': 'Agenda tu viaje','booking.callCenter': 'Call center','booking.duration': 'Duración del alquiler','booking.durationPlaceholder': 'Selecciona','booking.durationOpt8': '8h o más','booking.service': 'Servicio','booking.servicePlaceholder': 'Selecciona','booking.serviceOpt1': 'Viaje por plataforma','booking.serviceOpt2': 'Alquiler de vehículo','booking.serviceOpt3': 'MiChofer — tu chofer en tu carro','booking.vehicleType': 'Tipo de vehículo','booking.vehicleTypePlaceholder': 'Selecciona','booking.location': 'Inicio de viaje','booking.locationPlaceholder': 'Dirección de inicio','booking.tripEnd': 'Fin de viaje','booking.tripEndPlaceholder': 'Selecciona','booking.tripEndOpt1': 'Viaje sin destino','booking.tripEndOpt2': 'Dirección de fin del viaje','booking.endAddress': 'Dirección de fin del viaje','booking.endAddressPlaceholder': 'Dirección y ciudad de destino','booking.date': 'Fecha','booking.time': 'Hora','booking.name': 'Nombre','booking.namePlaceholder': 'Tu nombre completo','booking.phone': 'Teléfono / WhatsApp','booking.phonePlaceholder': 'Ej. 7519 9218','booking.email': 'Correo (opcional)','booking.emailPlaceholder': 'tucorreo@email.com','booking.submit': 'Reservar viaje','booking.sending': 'Enviando…','booking.success': '¡Gracias! Recibimos tu solicitud y te contactaremos pronto.','booking.error': 'No se pudo enviar. Verifica tu conexión o inténtalo más tarde.',
    'brands.1': 'Choferes verificados','brands.2': 'Vehículos modernos','brands.3': 'Pago seguro con tarjeta','brands.4': 'Reservas en minutos','brands.5': 'Atención personalizada',
    'about.eyebrow': 'Sobre nosotros','about.title': 'Una nueva forma de movilizarte','about.text': 'Somos una empresa 100% salvadoreña que busca ofrecerte una experiencia de movilidad superior, con servicios diseñados para quienes buscan más que solo transporte.','about.feature1.title': 'Nuestros choferes','about.feature1.text': 'Profesionales capacitados que brindan seguridad, puntualidad y servicio amable.','about.feature2.title': 'Nuestros vehículos','about.feature2.text': 'Modernos, cómodos y en excelente estado para un trayecto confiable y placentero.',
    'rental.eyebrow': 'Alquiler Premium con Chofer','rental.title': '¿Necesitas realizar varias vueltas?','rental.subtitle': 'Alquila tu carro con chofer incluido','rental.adv1.title': 'Múltiples paradas','rental.adv1.text': 'Haz todas las paradas que necesitas sin restricciones en tu recorrido','rental.adv2.title': 'Chofer te espera','rental.adv2.text': 'El chofer puede esperarte y está pendiente de todo tu recorrido','rental.adv3.title': 'Pide el mismo conductor','rental.adv3.text': 'Solicita el mismo conductor para futuras reservaciones','rental.adv4.title': 'Alquila por horas','rental.adv4.text': 'Elige cuántas horas necesitas el servicio','rental.infoTitle': 'Información importante','rental.info1': 'Reservas en San Salvador y La Libertad: mínimo 1 hora de anticipación','rental.info2': 'Solo se aceptan pagos con tarjeta para reservar','rental.info3pre': 'Fuera de San Salvador, llama/WhatsApp al ',
    'services.eyebrow': 'Nuestros servicios','services.title': 'Servicios diseñados para cada necesidad','services.s1.title': 'Alquiler por horas','services.s1.text': 'Vehículo y chofer a tu disposición por las horas que necesites, sin destino obligatorio.','services.s2.title': 'Un viaje (One Way)','services.s2.text': 'Para viajes express de punto A a punto B con seguridad y confort.','services.s3.title': 'MiChofer — Tu chofer en tu carro','services.s3.text': 'Un chofer profesional conduce tu propio vehículo cuando lo necesites.','services.link': 'Conoce más','services.popular': 'Más popular',
    'trust.eyebrow': 'Confianza & Seguridad','trust.title': 'Confianza y seguridad en cada viaje','trust.text': 'En MiChofer, tu bienestar es nuestra prioridad. Cada trayecto está respaldado por procesos de verificación, estándares técnicos y atención profesional.','trust.c1.title': 'Antecedentes verificados','trust.c1.text': 'Todos nuestros choferes pasan por revisiones rigurosas antes de operar.','trust.c2.title': 'Inspecciones técnicas','trust.c2.text': 'Vehículos revisados periódicamente para garantizar seguridad y comodidad.','trust.c3.title': 'Capacitación continua','trust.c3.text': 'Choferes entrenados en atención al cliente y protocolos de seguridad.','trust.c4.title': 'Estándares premium','trust.c4.text': 'Un servicio diseñado para elevar la experiencia de movilidad diaria.',
    'how.eyebrow': 'Cómo funciona','how.title': 'Una experiencia guiada por tecnología y servicio','how.s1.title': 'Reserva en segundos','how.s1.text': 'Selecciona tu tipo de servicio y agenda tu movilidad con una experiencia simple.','how.s2.title': 'Confirma tu experiencia','how.s2.text': 'Recibe una atención clara, segura y orientada al detalle desde el primer contacto.','how.s3.title': 'Viaja con tranquilidad','how.s3.text': 'Con choferes preparados y vehículos cómodos, cada trayecto se siente premium.',
    'blog.eyebrow': 'Blog','blog.title': 'Noticias, novedades y contenido editorial','blog.viewAll': 'Ver todo el blog','blog.readMore': 'Leer más','blog.back': 'Volver al blog','blog.backHome': 'Volver al inicio','blog.heading': 'Blog MiChofer','blog.subheading': 'Noticias, novedades y consejos de movilidad premium en El Salvador.',
    'contact.eyebrow': 'Contáctanos','contact.title': 'Hablemos','contact.schedule': 'Lunes a domingo','contact.name': 'Tu nombre','contact.email': 'Tu email','contact.message': 'Tu mensaje','contact.submit': 'Enviar mensaje',
    'footer.copy': '© 2026 MiChofer. Premium mobility experience.','footer.desc': 'Movilidad premium con atención personalizada, seguridad y servicio diseñado para cada trayecto.','footer.nav': 'Navegación','footer.services': 'Servicios','footer.policies': 'Políticas','footer.download': 'Descarga la app','footer.downloadTitle': 'Descarga nuestra app','footer.policyUsers': 'Políticas para Usuarios','footer.policyDrivers': 'Políticas para Conductores','floating.download': 'Descargar App'
  },
  en: {
    'nav.home': 'Home','nav.about': 'About us','nav.services': 'Services','nav.rental': 'Rental','nav.how': 'How it works','nav.blog': 'Blog','nav.contact': 'Contact us',
    'hero.eyebrow': 'Premium Mobility · El Salvador','hero.title': 'Your private driver, when you need it','hero.subtitle': 'Rent a vehicle with a driver included to move freely throughout El Salvador','hero.list1': 'Hourly rental with driver included','hero.list2': 'Point A to Point B trips (One Way)','hero.list3': 'MiChofer — your driver in your own vehicle','hero.cta1': 'Book Now','hero.cta2': 'View Services','hero.stat1': '24/7 Attention','hero.stat2': 'Personalized service','hero.stat3': 'Annual availability',
    'booking.eyebrow': 'Online booking','booking.title': 'Schedule your trip','booking.callCenter': 'Call center','booking.duration': 'Rental duration','booking.durationPlaceholder': 'Select','booking.durationOpt8': '8h or more','booking.service': 'Service','booking.servicePlaceholder': 'Select','booking.serviceOpt1': 'Platform trip','booking.serviceOpt2': 'Vehicle rental','booking.serviceOpt3': 'MiChofer — your driver in your car','booking.vehicleType': 'Vehicle type','booking.vehicleTypePlaceholder': 'Select','booking.location': 'Trip start','booking.locationPlaceholder': 'Start address','booking.tripEnd': 'Trip end','booking.tripEndPlaceholder': 'Select','booking.tripEndOpt1': 'Trip without destination','booking.tripEndOpt2': 'Trip end address','booking.endAddress': 'Trip end address','booking.endAddressPlaceholder': 'Destination street and city','booking.date': 'Date','booking.time': 'Time','booking.name': 'Name','booking.namePlaceholder': 'Your full name','booking.phone': 'Phone / WhatsApp','booking.phonePlaceholder': 'e.g. 7519 9218','booking.email': 'Email (optional)','booking.emailPlaceholder': 'youremail@email.com','booking.submit': 'Book trip','booking.sending': 'Sending…','booking.success': 'Thank you! We received your request and will contact you soon.','booking.error': 'Could not send. Check your connection or try again later.',
    'brands.1': 'Verified drivers','brands.2': 'Modern vehicles','brands.3': 'Secure card payment','brands.4': 'Book in minutes','brands.5': 'Personalized attention',
    'about.eyebrow': 'About us','about.title': 'A new way to get around','about.text': 'We are a 100% Salvadoran company offering a superior mobility experience, with services designed for those seeking more than just transportation.','about.feature1.title': 'Our drivers','about.feature1.text': 'Trained professionals providing safety, punctuality and friendly service.','about.feature2.title': 'Our vehicles','about.feature2.text': 'Modern, comfortable and in excellent condition for a reliable and pleasant ride.',
    'rental.eyebrow': 'Premium Rental with Driver','rental.title': 'Need to make several stops?','rental.subtitle': 'Rent your car with a driver included','rental.adv1.title': 'Multiple stops','rental.adv1.text': 'Make all the stops you need without restrictions on your route','rental.adv2.title': 'Driver waits for you','rental.adv2.text': 'The driver can wait for you and monitors your entire route','rental.adv3.title': 'Request same driver','rental.adv3.text': 'Request the same driver for future bookings','rental.adv4.title': 'Rent by the hour','rental.adv4.text': 'Choose how many hours you need the service','rental.infoTitle': 'Important information','rental.info1': 'Bookings in San Salvador and La Libertad: minimum 1 hour in advance','rental.info2': 'Only card payments accepted for reservations','rental.info3pre': 'Outside San Salvador, call/WhatsApp ',
    'services.eyebrow': 'Our services','services.title': 'Services designed for every need','services.s1.title': 'Hourly Rental','services.s1.text': 'Vehicle and driver at your disposal for the hours you need, no fixed destination.','services.s2.title': 'One Way Trip','services.s2.text': 'Express trips from point A to point B with safety and comfort.','services.s3.title': 'MiChofer — Your driver in your car','services.s3.text': 'A professional driver operates your own vehicle when you need it.','services.link': 'Learn more','services.popular': 'Most popular',
    'trust.eyebrow': 'Trust & Safety','trust.title': 'Trust and safety on every trip','trust.text': 'At MiChofer, your well-being is our priority. Every trip is backed by verification processes, technical standards and professional attention.','trust.c1.title': 'Verified backgrounds','trust.c1.text': 'All our drivers undergo rigorous checks before operating.','trust.c2.title': 'Technical inspections','trust.c2.text': 'Vehicles regularly inspected to ensure safety and comfort.','trust.c3.title': 'Ongoing training','trust.c3.text': 'Drivers trained in customer service and safety protocols.','trust.c4.title': 'Premium standards','trust.c4.text': 'A service designed to elevate the daily mobility experience.',
    'how.eyebrow': 'How it works','how.title': 'An experience guided by technology and service','how.s1.title': 'Book in seconds','how.s1.text': 'Select your service type and schedule your ride with a simple experience.','how.s2.title': 'Confirm your experience','how.s2.text': 'Receive clear, safe and detail-oriented attention from the first contact.','how.s3.title': 'Travel with peace of mind','how.s3.text': 'With prepared drivers and comfortable vehicles, every trip feels premium.',
    'blog.eyebrow': 'Blog','blog.title': 'News, updates and editorial content','blog.viewAll': 'View all posts','blog.readMore': 'Read more','blog.back': 'Back to blog','blog.backHome': 'Back home','blog.heading': 'MiChofer Blog','blog.subheading': 'News, updates and premium mobility tips in El Salvador.',
    'contact.eyebrow': 'Contact us','contact.title': "Let's talk",'contact.schedule': 'Monday to Sunday','contact.name': 'Your name','contact.email': 'Your email','contact.message': 'Your message','contact.submit': 'Send message',
    'footer.copy': '© 2026 MiChofer. Premium mobility experience.','footer.desc': 'Premium mobility with personalized attention, safety and service designed for every trip.','footer.nav': 'Navigation','footer.services': 'Services','footer.policies': 'Policies','footer.download': 'Download the app','footer.downloadTitle': 'Download our app','footer.policyUsers': 'User Policies','footer.policyDrivers': 'Driver Policies','floating.download': 'Download App'
  }
};

/* ===== Posts del blog ===== */
var POSTS = [
  { slug:'bienvenido-a-michofer', date:'2026-04-23', image:'img/img-blg.png',
    category:{es:'Noticias',en:'News'},
    title:{es:'Bienvenido al nuevo blog de MiChofer',en:'Welcome to the new MiChofer blog'},
    excerpt:{es:'Conoce el nuevo espacio donde compartiremos noticias, novedades y contenido útil sobre movilidad premium.',en:'Discover the new space where we will share news, updates, and useful content about premium mobility.'},
    content:{es:'<p>Bienvenido al nuevo blog de MiChofer. Este espacio ha sido creado para compartir contigo noticias, novedades, consejos y actualizaciones sobre nuestros servicios.</p><p>Aquí podrás conocer más sobre nuestras modalidades de viaje, recomendaciones para movilizarte con comodidad y anuncios importantes sobre la evolución de nuestra plataforma.</p>',en:'<p>Welcome to the new MiChofer blog. This space was created to share news, updates, tips, and service announcements with you.</p><p>Here you will learn more about our travel options, recommendations for comfortable mobility, and important platform updates.</p>'} },
  { slug:'nuevo-servicio-vip', date:'2026-04-24', image:'img/img-blg1.png',
    category:{es:'Servicios',en:'Services'},
    title:{es:'Descubre nuestro servicio VIP Time Rentals',en:'Discover our VIP Time Rentals service'},
    excerpt:{es:'Una opción diseñada para quienes buscan un chofer y vehículo disponibles por hora con máxima flexibilidad.',en:'An option designed for those who want a driver and vehicle available by the hour with maximum flexibility.'},
    content:{es:'<p>VIP Time Rentals es uno de los servicios más exclusivos de MiChofer. Está pensado para quienes necesitan un vehículo y un chofer a disposición durante varias horas.</p><p>Es ideal para reuniones de negocios, eventos especiales y múltiples destinos en una sola jornada.</p>',en:'<p>VIP Time Rentals is one of MiChofer\'s most exclusive services. It is designed for those who need a vehicle and a driver available for several hours.</p><p>It is ideal for business meetings, special events, and multiple destinations in a single day.</p>'} },
  { slug:'tips-para-un-viaje-seguro', date:'2026-04-25', image:'img/img-blg2.png',
    category:{es:'Consejos',en:'Tips'},
    title:{es:'5 tips para disfrutar un viaje más seguro y cómodo',en:'5 tips for a safer and more comfortable ride'},
    excerpt:{es:'Algunas recomendaciones simples para aprovechar mejor tu experiencia de movilidad con MiChofer.',en:'Some simple recommendations to make the most of your mobility experience with MiChofer.'},
    content:{es:'<p>Viajar con comodidad también implica tomar en cuenta ciertos detalles antes de iniciar tu trayecto.</p><ul><li>Reserva con anticipación.</li><li>Confirma tu servicio.</li><li>Ten clara tu ruta.</li></ul>',en:'<p>Traveling comfortably also means considering a few details before starting your ride.</p><ul><li>Book in advance.</li><li>Confirm your service.</li><li>Keep your route clear.</li></ul>'} },
  { slug:'como-hacer-un-viaje-por-hora', date:'2026-04-25', image:'img/blg-title-img.png',
    category:{es:'Consejos',en:'Tips'},
    title:{es:'Te explicamos cómo hacer un viaje por hora',en:'We explain how to make a trip per hour'},
    excerpt:{es:'Tienes que estar seguro de estar dentro de la zona de servicio, de lo contrario no podrás pedir tu viaje por hora.',en:'You need to make sure you\'re within the service area, otherwise you won\'t be able to request your hourly ride.'},
    content:{es:'<p>Cada vez que realices un viaje por hora recuerda que debes realizarlo con 1 hora mínimo de anticipación. Nosotros intentaremos gestionar el viaje antes de ese tiempo estimado, pero si hay mucha demanda o tenemos conductores ocupados, notificaremos que será en la hora exacta. De lo contrario, no te preocupes.</p>',en:'<p>Each time you book an hourly trip, remember to do so at least 1 hour in advance. We will try to schedule the trip before that estimated time, but if there is high demand or our drivers are busy, we will notify you that it will be at the exact time. Otherwise, don\'t worry.</p>'} }
];

/* ===== Idioma ===== */
var LANG_KEY = 'michofer_lang';
var currentLang = 'es';

function t(key){ return (translations[currentLang] && translations[currentLang][key]) || key; }

function formatDate(dateStr, lang){
  try {
    var d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', { year:'numeric', month:'long', day:'numeric' });
  } catch(e){ return dateStr; }
}

function applyLang(){
  // textContent por clave
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  // placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(function(el){
    el.setAttribute('placeholder', t(el.getAttribute('data-i18n-ph')));
  });
  // opciones de select (value + texto)
  document.querySelectorAll('[data-i18n-opt]').forEach(function(el){
    var txt = t(el.getAttribute('data-i18n-opt'));
    el.textContent = txt;
    if (!/Placeholder$/.test(el.getAttribute('data-i18n-opt'))) el.value = txt;
  });
  // botones de idioma activos
  document.querySelectorAll('.lang-btn').forEach(function(b){
    b.classList.toggle('active', b.getAttribute('data-lang') === currentLang);
  });
  document.documentElement.setAttribute('lang', currentLang);
  renderBlog();
}

function setLang(lang){
  currentLang = lang;
  try { localStorage.setItem(LANG_KEY, lang); } catch(e){}
  applyLang();
}

/* ===== Render del blog ===== */
function postCard(post){
  return '<a href="blog.html#' + post.slug + '" class="glass rounded-[28px] overflow-hidden reveal visible hover:shadow-lg hover:-translate-y-1 transition-all block">' +
    '<div class="relative aspect-[16/9]">' +
      '<img src="' + post.image + '" alt="' + post.title[currentLang] + '" class="absolute inset-0 w-full h-full object-cover" />' +
      '<div class="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0D9488] text-white text-xs font-bold">' + post.category[currentLang] + '</div>' +
    '</div>' +
    '<div class="p-6">' +
      '<p class="text-xs text-[rgba(15,23,42,0.5)] font-medium mb-2">' + formatDate(post.date, currentLang) + '</p>' +
      '<h3 class="font-bold text-[#0F172A] text-lg mb-2">' + post.title[currentLang] + '</h3>' +
      '<p class="text-sm text-[rgba(15,23,42,0.62)] mb-3">' + post.excerpt[currentLang] + '</p>' +
      '<span class="inline-flex items-center gap-1 text-[#0D9488] font-bold text-sm">' + t('blog.readMore') + ' →</span>' +
    '</div></a>';
}

function renderBlog(){
  var preview = document.getElementById('blog-preview-grid');
  if (preview){
    preview.innerHTML = POSTS.slice(0,3).map(postCard).join('');
  }
  var list = document.getElementById('blog-list');
  if (list){
    list.innerHTML = POSTS.map(function(post){
      return '<article id="' + post.slug + '" class="glass rounded-[28px] overflow-hidden mb-8">' +
        '<div class="relative aspect-[16/9] max-h-[360px]"><img src="' + post.image + '" alt="' + post.title[currentLang] + '" class="absolute inset-0 w-full h-full object-cover" />' +
        '<div class="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0D9488] text-white text-xs font-bold">' + post.category[currentLang] + '</div></div>' +
        '<div class="p-6 lg:p-10">' +
        '<p class="text-xs text-[rgba(15,23,42,0.5)] font-medium mb-2">' + formatDate(post.date, currentLang) + '</p>' +
        '<h2 class="text-2xl lg:text-3xl font-extrabold text-[#0F172A] mb-4">' + post.title[currentLang] + '</h2>' +
        '<div class="blog-content text-[rgba(15,23,42,0.78)] text-[1.02rem] leading-[1.75]">' + post.content[currentLang] + '</div>' +
        '</div></article>';
    }).join('');
  }
}

/* ===== Comportamientos ===== */
function initBehaviors(){
  // Header scroll effect
  var header = document.getElementById('site-header');
  if (header){
    var onScroll = function(){
      if (window.scrollY > 60){
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
  }

  // Mobile menu
  var menuBtn = document.getElementById('menu-toggle');
  var mobileMenu = document.getElementById('mobile-menu');
  var closeBtn = document.getElementById('menu-close');
  function openMenu(){ if(mobileMenu){ mobileMenu.classList.remove('hidden'); document.body.style.overflow = 'hidden'; } }
  function closeMenu(){ if(mobileMenu){ mobileMenu.classList.add('hidden'); document.body.style.overflow = ''; } }
  if (menuBtn) menuBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  document.querySelectorAll('[data-scroll]').forEach(function(link){
    link.addEventListener('click', function(e){
      var id = link.getAttribute('data-scroll');
      var target = document.getElementById(id);
      if (target){ e.preventDefault(); closeMenu(); target.scrollIntoView({ behavior:'smooth' }); }
    });
  });

  // Language buttons
  document.querySelectorAll('.lang-btn').forEach(function(b){
    b.addEventListener('click', function(){ setLang(b.getAttribute('data-lang')); });
  });

  // Cursor glow
  var glow = document.querySelector('.cursor-glow');
  if (glow){
    window.addEventListener('mousemove', function(e){
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    });
  }

  // Reveal on scroll
  var revObs = new IntersectionObserver(function(entries){
    entries.forEach(function(en){ if(en.isIntersecting) en.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function(el){ revObs.observe(el); });

  // Counter animation
  var cntObs = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){
        var el = en.target;
        var target = parseInt(el.getAttribute('data-counter') || '0', 10);
        var suffix = el.getAttribute('data-suffix') || '';
        var current = 0;
        var increment = Math.max(1, Math.floor(target / 60));
        var timer = setInterval(function(){
          current += increment;
          if (current >= target){ current = target; clearInterval(timer); }
          el.textContent = current + suffix;
        }, 25);
        cntObs.unobserve(el);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('[data-counter]').forEach(function(c){ cntObs.observe(c); });

  // Booking form (AJAX a FormBold)
  var bookingForm = document.getElementById('booking-form');
  if (bookingForm){
    bookingForm.addEventListener('submit', function(e){
      e.preventDefault();
      var btn = bookingForm.querySelector('button[type=submit]');
      var okBox = document.getElementById('booking-success');
      var errBox = document.getElementById('booking-error');
      if (okBox) okBox.classList.add('hidden');
      if (errBox) errBox.classList.add('hidden');
      if (btn){ btn.disabled = true; btn.textContent = t('booking.sending'); }
      fetch(BOOKING_ENDPOINT, { method:'POST', body: new FormData(bookingForm), headers:{ Accept:'application/json' } })
        .then(function(res){
          if (res.ok){
            if (okBox) okBox.classList.remove('hidden');
            bookingForm.reset();
          } else {
            if (errBox) errBox.classList.remove('hidden');
          }
        })
        .catch(function(){ if (errBox) errBox.classList.remove('hidden'); })
        .then(function(){ if (btn){ btn.disabled = false; btn.textContent = t('booking.submit'); } });
    });
  }

  // Toggle de campos condicionales (duración de alquiler y fin de viaje).
  // Se detecta por selectedIndex porque applyLang reescribe los value según el idioma.
  var serviceSelect = document.getElementById('service-select');
  var durationWrap = document.getElementById('duration-wrap');
  var durationSelect = document.getElementById('duration-select');
  var tripEndSelect = document.getElementById('trip-end-select');
  var endAddressWrap = document.getElementById('end-address-wrap');
  var endAddressInput = document.getElementById('end-address-input');

  function syncDuration(){
    if (!serviceSelect || !durationWrap || !durationSelect) return;
    // index 2 = "Alquiler de vehículo"
    if (serviceSelect.selectedIndex === 2){
      durationWrap.classList.remove('hidden');
      durationSelect.disabled = false;
      durationSelect.setAttribute('required', 'required');
    } else {
      durationWrap.classList.add('hidden');
      durationSelect.disabled = true;
      durationSelect.removeAttribute('required');
      durationSelect.selectedIndex = 0;
    }
  }
  function syncEndAddress(){
    if (!tripEndSelect || !endAddressWrap || !endAddressInput) return;
    // index 2 = "Dirección de fin del viaje"
    if (tripEndSelect.selectedIndex === 2){
      endAddressWrap.classList.remove('hidden');
      endAddressInput.disabled = false;
      endAddressInput.setAttribute('required', 'required');
    } else {
      endAddressWrap.classList.add('hidden');
      endAddressInput.disabled = true;
      endAddressInput.removeAttribute('required');
      endAddressInput.value = '';
    }
  }
  if (serviceSelect){ serviceSelect.addEventListener('change', syncDuration); syncDuration(); }
  if (tripEndSelect){ tripEndSelect.addEventListener('change', syncEndAddress); syncEndAddress(); }
  if (bookingForm){ bookingForm.addEventListener('reset', function(){ setTimeout(function(){ syncDuration(); syncEndAddress(); }, 0); }); }
}

/* ===== Init ===== */
document.addEventListener('DOMContentLoaded', function(){
  try { var saved = localStorage.getItem(LANG_KEY); if (saved === 'es' || saved === 'en') currentLang = saved; } catch(e){}
  initBehaviors();
  applyLang();
  if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
});
