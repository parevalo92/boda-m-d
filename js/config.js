// Personaliza estos valores. Fecha ISO con zona horaria de El Salvador (-06:00).
// ⚠️ Los valores marcados "DE PRUEBA" son de ejemplo: cámbialos por los reales.
window.WEDDING_CONFIG = {
  weddingDate: '2027-01-23T17:00:00-06:00', // DE PRUEBA. Usa null si aún no hay fecha.
  displayDate: { es: 'Fecha por confirmar', en: 'Date to be announced' }, // se usa solo si weddingDate es null
  rsvpEmail: '', // Al configurarlo, el formulario abre un correo prellenado (no almacena datos).
  rsvpDeadline: { es: '23 de diciembre', en: 'December 23' }, // DE PRUEBA
  defaultLanguage: 'es',

  // Horarios del itinerario (DE PRUEBA)
  schedule: { reception: '16:00', ceremony: '17:00', dinner: '18:00', cake: '21:00', end: '01:00' },

  // Ubicación (DE PRUEBA)
  venue: {
    name: 'Nombre del lugar',
    address: 'Dirección, Ciudad, El Salvador',
    mapsUrl: 'https://maps.google.com/'
  },

  // Mesa de regalos (DE PRUEBA)
  registry: { store: 'Nombre de la tienda', eventNumber: 'xxxxxx', url: '#' },

  // Enlace "Mira algunos ejemplos" de vestimenta (ej. tablero de Pinterest)
  dressExamplesUrl: '#'
};
