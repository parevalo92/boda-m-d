========================================
  MiChofer — Sitio web estatico
  Version para subir a HostGator (FTP / Administrador de archivos)
========================================

Esta carpeta contiene una copia ESTATICA del sitio de MiChofer, lista para
subir a HostGator "para mientras", con la misma estructura de carpetas que
usabas antes.

----------------------------------------
1) QUE CONTIENE
----------------------------------------
  index.html ........ Pagina principal (una sola pagina con todas las secciones:
                      reservar, inicio/hero, sobre nosotros, alquiler, servicios,
                      confianza, como funciona, blog y contacto).
  blog.html ......... Pagina del blog con los articulos completos.
  css/style.css ..... Estilos propios (gradiente, efectos glass, animaciones).
  js/script.js ...... Toda la logica: idioma ES/EN, menu, blog, formularios.
  img/ .............. Todas las imagenes y logos.
  favicon.ico ....... Icono del sitio.
  og-image.png ...... Imagen para compartir en redes.
  .htaccess ......... Configuracion basica de Apache (pagina de inicio, cache).
  README.txt ........ Este archivo.

----------------------------------------
2) COMO SUBIRLO A HOSTGATOR
----------------------------------------
  Opcion A — Administrador de archivos (cPanel):
    1. Entra a tu cPanel de HostGator.
    2. Abre "Administrador de archivos" (File Manager).
    3. Entra a la carpeta "public_html".
    4. Sube TODO el CONTENIDO de esta carpeta (no la carpeta en si, sino lo
       que esta adentro: index.html, blog.html, css, js, img, etc.).
       Consejo: comprime esta carpeta en .zip, subela y usa "Extract".
    5. Listo: visita tu dominio y veras el sitio.

  Opcion B — FTP (FileZilla u otro):
    1. Conectate con los datos FTP que te dio HostGator.
    2. Entra a la carpeta "public_html".
    3. Arrastra TODO el contenido de esta carpeta dentro de public_html.

  IMPORTANTE: el archivo .htaccess empieza con punto y a veces esta oculto.
  Asegurate de que tu programa FTP muestre archivos ocultos para subirlo.

----------------------------------------
3) FORMULARIOS (reserva y contacto)
----------------------------------------
  Los dos formularios (Agenda tu viaje y Contacto) ya estan conectados y
  envian los datos a FormBold:
      https://formbold.com/s/oYAKv

  No necesitas configurar nada en HostGator para que funcionen.

  Si algun dia quieres cambiar a donde se envian los datos:
   - Formulario de RESERVA: edita js/script.js, linea con
       var BOOKING_ENDPOINT = 'https://formbold.com/s/oYAKv';
     y pon tu nueva direccion.
   - Formulario de CONTACTO: edita index.html, busca el formulario de contacto
       (<form ... action="https://formbold.com/s/oYAKv" ...>) y cambia el action.

----------------------------------------
4) NOTA SOBRE ESTILOS E ICONOS
----------------------------------------
  El sitio usa librerias por internet (CDN) para los estilos (Tailwind), los
  iconos (Lucide) y la fuente (Nunito). Esto es normal y funciona en HostGator
  siempre que el visitante tenga internet (como cualquier sitio web moderno).

----------------------------------------
5) IDIOMA
----------------------------------------
  El sitio esta en espanol e ingles. Los botones ES / EN arriba a la derecha
  cambian el idioma y se recuerda la eleccion del visitante.

Para cualquier ajuste mayor, se recomienda seguir usando la version dinamica
del sitio en la plataforma. Esta copia estatica es solo "para mientras".
