/* ============================================
   TUSCANY SITES DATA
   Edit this file to add your own destinations
   
   Each site should have:
   - id: unique identifier (string)
   - name: display name (string)
   - location: city/area name (string)
   - description: short description (string, ~100 chars)
   - imageSrc: URL or local path like "images/sites/name.jpg"
   - imageAlt: accessibility description of image (string)
   ============================================ */

const SITES = [
  {
    id: "florence-duomo",
    name: "Duomo di Firenze",
    location: "Firenze",
    description: "🏛️ Iconica e maestosa • La cupola più bella che tu abbia mai visto 😍 • Amo dominare lo skyline • Cercasi qualcuno che apprezzi l'arte rinascimentale 🎨",
    imageSrc: "https://images.unsplash.com/photo-1541370976299-4d24ebbc9077?w=800&q=80",
    imageAlt: "Cupola del Duomo di Firenze contro il cielo blu"
  },
  {
    id: "piazza-del-campo",
    name: "Piazza del Campo",
    location: "Siena",
    description: "🐚 A forma di conchiglia, unica nel mio genere • Mi piace ospitare feste pazze (cerca Palio 🐎) • Romantica al tramonto 🌅 • Porto sempre aperitivo!",
    imageSrc: "https://images.unsplash.com/photo-1539180880785-10a8823ac26e?w=800&q=80",
    imageAlt: "Vista aerea di Piazza del Campo a Siena"
  },
  {
    id: "san-gimignano",
    name: "San Gimignano",
    location: "San Gimignano",
    description: "🏙️ Mi chiamano la Manhattan del Medioevo • Ho più torri che ex 😏 • Vernaccia lover 🍷 • Il mio gelato è stato premiato campione del mondo 🍦",
    imageSrc: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=800&q=80",
    imageAlt: "Torri medievali di San Gimignano al tramonto"
  },
  {
    id: "val-dorcia",
    name: "Val d'Orcia",
    location: "Toscana del Sud",
    description: "🌾 Colline che sembrano onde • UNESCO approved ✅ • Quei cipressi nelle foto? Sono tutti miei 🌲 • Perfetta per foto Instagram 📸",
    imageSrc: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=800&q=80",
    imageAlt: "Colline della Val d'Orcia con cipressi"
  },
  {
    id: "pienza",
    name: "Pienza",
    location: "Pienza",
    description: "✨ Città ideale del Rinascimento • Un Papa mi ha costruita apposta 👑 • Ossessionata dal pecorino 🧀 • Tramonti che ti faranno piangere 😭💕",
    imageSrc: "https://images.unsplash.com/photo-1607355566410-a7d04fa16cd1?w=800&q=80",
    imageAlt: "Centro storico di Pienza con architettura rinascimentale"
  },
  {
    id: "chianti",
    name: "Vigneti del Chianti",
    location: "Regione del Chianti",
    description: "🍇 Vino rosso è la mia personalità • Degustazioni infinite 🍷🍷🍷 • Guidare tra le mie colline = terapia 🚗 • Ti faccio ubriacare d'amore (e non solo)",
    imageSrc: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80",
    imageAlt: "Vigneti del Chianti con filari di viti"
  },
  {
    id: "lucca",
    name: "Lucca",
    location: "Lucca",
    description: "🚴 Città delle mura perfette • Amo le passeggiate in bici sulle mura • 99 chiese (sono spirituale) ⛪ • Puccini è nato qui, quindi sì, sono musicale 🎵",
    imageSrc: "https://images.unsplash.com/photo-1592925610498-1f6cfa7ba753?w=800&q=80",
    imageAlt: "Mura di Lucca con alberi sopra"
  },
  {
    id: "montepulciano",
    name: "Montepulciano",
    location: "Montepulciano",
    description: "🏔️ Alto/a e elegante • Il mio Vino Nobile non ha bisogno di presentazioni 🍷👑 • Vista panoramica a 360° • Twilight mi ha reso famosa ma io valgo di più 🧛",
    imageSrc: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80",
    imageAlt: "Vista di Montepulciano all'ora d'oro"
  },
  {
    id: "volterra",
    name: "Volterra",
    location: "Volterra",
    description: "🏺 Etrusca doc, 3000 anni di storia • Misteriosa e affascinante 🌙 • Artigianato in alabastro fatto a mano ✋ • Viste drammatiche garantite 🎭",
    imageSrc: "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=800&q=80",
    imageAlt: "Volterra arroccata sulla collina"
  },
  {
    id: "cinque-terre",
    name: "Cinque Terre",
    location: "Costa Ligure",
    description: "🌈 Cinque personalità, un solo cuore • Case colorate = buon umore sempre 🏠 • Trekking vista mare 🥾 • Pesto fresco e focaccia ogni giorno 😋",
    imageSrc: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80",
    imageAlt: "Case colorate delle Cinque Terre sulla scogliera"
  }
];

// Make SITES available globally
window.SITES = SITES;
