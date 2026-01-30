/* ============================================
   TUSCANY SITES DATA
   Edit this file to add your own destinations
   
   Each site should have:
   - id: unique identifier (string)
   - name: display name (string)
   - location: city/area name (string)
   - description: short description (string, ~100 chars)
   - images: array of { src, alt } objects for the carousel
   
   For images.src you can use:
   - Remote URL: "https://images.unsplash.com/photo-123..."
   - Local path: "images/sites/florence-1.jpg"
   
   Just drop your images in the images/sites/ folder
   and reference them by filename.
   ============================================ */

const SITES = [
  {
    id: "florence-duomo",
    name: "Duomo di Firenze",
    location: "Firenze",
    description: "🏛️ Iconica e maestosa • La cupola più bella che tu abbia mai visto 😍 • Amo dominare lo skyline • Cercasi qualcuno che apprezzi l'arte rinascimentale 🎨",
    images: [
      { src: "https://images.unsplash.com/photo-1541370976299-4d24ebbc9077?w=800&q=80", alt: "Cupola del Duomo di Firenze contro il cielo blu" },
      { src: "https://images.unsplash.com/photo-1543429258-dbd00194c570?w=800&q=80", alt: "Interno del Duomo di Firenze" },
      { src: "https://images.unsplash.com/photo-1534359265607-b39e94bc49ac?w=800&q=80", alt: "Vista panoramica di Firenze" }
    ]
  },
  {
    id: "piazza-del-campo",
    name: "Piazza del Campo",
    location: "Siena",
    description: "🐚 A forma di conchiglia, unica nel mio genere • Mi piace ospitare feste pazze (cerca Palio 🐎) • Romantica al tramonto 🌅 • Porto sempre aperitivo!",
    images: [
      { src: "https://images.unsplash.com/photo-1539180880785-10a8823ac26e?w=800&q=80", alt: "Vista aerea di Piazza del Campo a Siena" },
      { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", alt: "Torre del Mangia a Siena" },
      { src: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80", alt: "Siena al tramonto" }
    ]
  },
  {
    id: "ciccio",
    name: "Ciccio",
    location: "Trieste",
    description: "🏙️ Mi chiamano la puttana del DSA • Soffro ancora di qualche acciacco al gomito dopo aver salvato il mondo 13 volte 😏 • Aperitivi lover 🍷 • Portami a vedere il tramonto a barcola e sono tuo 🍦",
    images: [
      { src: "images\\sites\\ciccio\\cicc1.png", alt: "Torri medievali di San Gimignano al tramonto" },
      { src: "images\\sites\\ciccio\\cicc7.png", alt: "Torri medievali di San Gimignano al tramonto" },
      { src: "images\\sites\\ciccio\\cicc8.png", alt: "Torri medievali di San Gimignano al tramonto" },
      { src: "images\\sites\\ciccio\\cicc10.png", alt: "Torri medievali di San Gimignano al tramonto" },
      { src: "images\\sites\\ciccio\\cicc4.jpg", alt: "Panorama di San Gimignano" },
      { src: "images\\sites\\ciccio\\cicc11.png", alt: "Panorama di San Gimignano" },
      { src: "images\\sites\\ciccio\\cicc3.jpg", alt: "Panorama di San Gimignano" },
      { src: "images\\sites\\ciccio\\cicc2.jpg", alt: "Vicoli di San Gimignano" },
      { src: "images\\sites\\ciccio\\cicc5.jpg", alt: "Panorama di San Gimignano" },
  ]
  },  
  {
    id: "san-gimignano",
    name: "San Gimignano",
    location: "San Gimignano",
    description: "🏙️ Mi chiamano la Manhattan del Medioevo • Ho più torri che ex 😏 • Vernaccia lover 🍷 • Il mio gelato è stato premiato campione del mondo 🍦",
    images: [
      { src: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=800&q=80", alt: "Torri medievali di San Gimignano al tramonto" },
      { src: "https://images.unsplash.com/photo-1534445867742-43195f401b6c?w=800&q=80", alt: "Vicoli di San Gimignano" },
      { src: "https://images.unsplash.com/photo-1592914610354-fd354ea45e48?w=800&q=80", alt: "Panorama di San Gimignano" }
    ]
  },
  {
    id: "val-dorcia",
    name: "Val d'Orcia",
    location: "Toscana del Sud",
    description: "🌾 Colline che sembrano onde • UNESCO approved ✅ • Quei cipressi nelle foto? Sono tutti miei 🌲 • Perfetta per foto Instagram 📸",
    images: [
      { src: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=800&q=80", alt: "Colline della Val d'Orcia con cipressi" },
      { src: "https://images.unsplash.com/photo-1501952476817-d7ae22e8ee4e?w=800&q=80", alt: "Strada con cipressi in Val d'Orcia" },
      { src: "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?w=800&q=80", alt: "Alba in Val d'Orcia" }
    ]
  },
  {
    id: "pienza",
    name: "Pienza",
    location: "Pienza",
    description: "✨ Città ideale del Rinascimento • Un Papa mi ha costruita apposta 👑 • Ossessionata dal pecorino 🧀 • Tramonti che ti faranno piangere 😭💕",
    images: [
      { src: "https://images.unsplash.com/photo-1607355566410-a7d04fa16cd1?w=800&q=80", alt: "Centro storico di Pienza con architettura rinascimentale" },
      { src: "https://images.unsplash.com/photo-1602619929658-fc3de910bed0?w=800&q=80", alt: "Vicolo di Pienza" },
      { src: "https://images.unsplash.com/photo-1571837825472-d96ce1f1f026?w=800&q=80", alt: "Vista dalla terrazza di Pienza" }
    ]
  },
  {
    id: "jew-mario",
    name: "Mario",
    location: "Via S. Francesco D'Assisi, 19, 34133 Trieste TS",
    description: "ANI BA BESHVILCHA \nANI BA LEKACHET OTCHA \nANI YEHUDI MARIO",
    images: [
      { src: "images\\sites\\jewmario\\mario1.jpg", alt: "Torri medievali di San Gimignano al tramonto" },
     ]
  },  
  {
    id: "chianti",
    name: "Vigneti del Chianti",
    location: "Regione del Chianti",
    description: "🍇 Vino rosso è la mia personalità • Degustazioni infinite 🍷🍷🍷 • Guidare tra le mie colline = terapia 🚗 • Ti faccio ubriacare d'amore (e non solo)",
    images: [
      { src: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80", alt: "Vigneti del Chianti con filari di viti" },
      { src: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=80", alt: "Cantina nel Chianti" },
      { src: "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800&q=80", alt: "Degustazione vino nel Chianti" }
    ]
  },
  {
    id: "lucca",
    name: "Lucca",
    location: "Lucca",
    description: "🚴 Città delle mura perfette • Amo le passeggiate in bici sulle mura • 99 chiese (sono spirituale) ⛪ • Puccini è nato qui, quindi sì, sono musicale 🎵",
    images: [
      { src: "https://images.unsplash.com/photo-1592925610498-1f6cfa7ba753?w=800&q=80", alt: "Mura di Lucca con alberi sopra" },
      { src: "https://images.unsplash.com/photo-1558985212-de98b1e0aa57?w=800&q=80", alt: "Piazza dell'Anfiteatro a Lucca" },
      { src: "https://images.unsplash.com/photo-1601408660285-89a60f7e3c3f?w=800&q=80", alt: "Torre Guinigi con alberi" }
    ]
  },
  {
    id: "montepulciano",
    name: "Montepulciano",
    location: "Montepulciano",
    description: "🏔️ Alto/a e elegante • Il mio Vino Nobile non ha bisogno di presentazioni 🍷👑 • Vista panoramica a 360° • Twilight mi ha reso famosa ma io valgo di più 🧛",
    images: [
      { src: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80", alt: "Vista di Montepulciano all'ora d'oro" },
      { src: "https://images.unsplash.com/photo-1598346763225-933d60204095?w=800&q=80", alt: "Piazza Grande di Montepulciano" },
      { src: "https://images.unsplash.com/photo-1551801841-ecad345ace4d?w=800&q=80", alt: "Cantina storica a Montepulciano" }
    ]
  },
  {
    id: "volterra",
    name: "Volterra",
    location: "Volterra",
    description: "🏺 Etrusca doc, 3000 anni di storia • Misteriosa e affascinante 🌙 • Artigianato in alabastro fatto a mano ✋ • Viste drammatiche garantite 🎭",
    images: [
      { src: "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=800&q=80", alt: "Volterra arroccata sulla collina" },
      { src: "https://images.unsplash.com/photo-1590073242678-70ee3fc28f8e?w=800&q=80", alt: "Teatro romano di Volterra" },
      { src: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800&q=80", alt: "Artigianato in alabastro" }
    ]
  },
  {
    id: "cinque-terre",
    name: "Cinque Terre",
    location: "Costa Ligure",
    description: "🌈 Cinque personalità, un solo cuore • Case colorate = buon umore sempre 🏠 • Trekking vista mare 🥾 • Pesto fresco e focaccia ogni giorno 😋",
    images: [
      { src: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80", alt: "Case colorate delle Cinque Terre sulla scogliera" },
      { src: "https://images.unsplash.com/photo-1499678329028-101435549a4e?w=800&q=80", alt: "Manarola al tramonto" },
      { src: "https://images.unsplash.com/photo-1538681105587-85640961bf8b?w=800&q=80", alt: "Sentiero delle Cinque Terre" }
    ]
  }
];

// Make SITES available globally
window.SITES = SITES;
