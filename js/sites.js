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
    name: "Firenze",
    location: "Toscana",
    description: "🏛️ Iconica e maestosa • La cupola più bella che tu abbia mai visto 😍 • Amo dominare lo skyline • Cercasi qualcuno che apprezzi l'arte rinascimentale 🎨",
    images: [
      { src: "https://images.unsplash.com/photo-1541370976299-4d24ebbc9077?w=800&q=80", alt: "Cupola del Duomo di Firenze contro il cielo blu" },
      { src: "https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Interno del Duomo di Firenze" },
      { src: "https://images.unsplash.com/photo-1543429258-cc721a300e8a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Vista panoramica di Firenze" }
    ]
  },
  {
    id: "piazza-del-campo",
    name: "Siena",
    location: "Toscana",
    description: "🐚 La mia piazza è a forma di conchiglia, unica nel mio genere • Mi piace ospitare feste pazze (cerca Palio 🐎) • Romantica al tramonto 🌅 • Porto sempre aperitivo!",
    images: [
      { src: "https://images.unsplash.com/photo-1604142056225-1feabdac3af1?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Vista aerea di Piazza del Campo a Siena" },
      { src: "https://plus.unsplash.com/premium_photo-1721162880418-437b168999c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Torre del Mangia a Siena" },
      { src: "https://images.unsplash.com/photo-1763981116568-8c04df9c304b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2llbmElMjBwYWxpb3xlbnwwfHwwfHx8MA%3D%3D", alt: "Siena al tramonto" }
    ]
  },
  {
    id: "ciccio",
    name: "Ciccio",
    location: "Trieste",
    description: "🏙️ Mi chiamano la puttana del DSV • Portami a vedere il tramonto a barcola e sono tuo 🍦 • Soffro ancora di qualche acciacco a gomito e collo dopo aver salvato il mondo 13 volte 😏 • Aperitivo lover 🍷 ",
    images: [
      { src: "images\\sites\\ciccio\\cicc1.png", alt: "Torri medievali di San Gimignano al tramonto" },
      { src: "images\\sites\\ciccio\\cicc7.png", alt: "Torri medievali di San Gimignano al tramonto" },
      { src: "images\\sites\\ciccio\\cicc1.png", alt: "Torri medievali di San Gimignano al tramonto" },
      { src: "images\\sites\\ciccio\\cicc6.png", alt: "Torri medievali di San Gimignano al tramonto" },
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
      { src: "https://images.unsplash.com/photo-1653228239729-f7cc50704951?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2FuJTIwZ2ltaWduYW5vfGVufDB8fDB8fHww", alt: "Torri medievali di San Gimignano al tramonto" },
      { src: "https://images.unsplash.com/photo-1733269345489-3bd78e434762?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNhbiUyMGdpbWlnbmFub3xlbnwwfHwwfHx8MA%3D%3D", alt: "Vicoli di San Gimignano" },
      { src: "https://images.unsplash.com/photo-1717170650089-7ec5541947ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2FuJTIwZ2ltaWduYW5vJTIwZ2VsYXRlcmlhfGVufDB8fDB8fHww", alt: "Panorama di San Gimignano" }
    ]
  },
  {
    id: "val-dorcia",
    name: "Val d'Orcia",
    location: "Toscana del Sud",
    description: "🌾 Colline che sembrano onde • UNESCO approved ✅ • Quei cipressi nelle foto? Sono tutti miei 🌲 • Perfetta per foto Instagram 📸",
    images: [
      { src: "https://images.unsplash.com/photo-1653843034003-467e337f4c99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFsJTIwZCdvcmNpYXxlbnwwfHwwfHx8MA%3D%3D", alt: "Colline della Val d'Orcia con cipressi" },
      { src: "https://images.unsplash.com/photo-1718338561052-bdd1c58ddf6d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmFsJTIwZCdvcmNpYXxlbnwwfHwwfHx8MA%3D%3D", alt: "Strada con cipressi in Val d'Orcia" },
      { src: "https://images.unsplash.com/photo-1516108317508-6788f6a160e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZhbCUyMGQnb3JjaWF8ZW58MHx8MHx8fDA%3D", alt: "Alba in Val d'Orcia" }
    ]
  },
  {
    id: "chianti-classico",
    name: "Chianti Classico",
    location: "Toscana Centrale",
    description: "🐓 Il Gallo Nero è il mio simbolo • 🍇 Il vino rosso è la mia personalità  • Colline, borghi e cantine storiche 🏰 • Cercasi qualcuno per brindare al tramonto 🌅",
    images: [
      { src: "https://images.unsplash.com/photo-1523528283115-9bf9b1699245?w=800&q=80", alt: "Vigneti del Chianti Classico al tramonto" },
      { src: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=80", alt: "Cantina storica nel Chianti Classico" },
      { src: "https://images.unsplash.com/photo-1566995541428-f2246c17cda1?w=800&q=80", alt: "Degustazione vino Chianti Classico" }
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
    id: "lucca",
    name: "Lucca",
    location: "Lucca",
    description: "🚴 Città delle mura perfette • Amo le passeggiate in bici sulle mura • 99 chiese (sono spirituale) ⛪ • Puccini è nato qui, quindi sì, sono musicale 🎵",
    images: [
      { src: "https://unsplash.com/it/foto/applique-in-vetro-con-cornice-in-metallo-nero-vGdwtopObis", alt: "Mura di Lucca con alberi sopra" },
      { src: "https://images.unsplash.com/photo-1707401100280-b40d51f1846a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHVjY2F8ZW58MHx8MHx8fDA%3D", alt: "Piazza dell'Anfiteatro a Lucca" },
      { src: "https://images.unsplash.com/photo-1650660049394-673df1cc152b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9ycmUlMjBndWluaWdpfGVufDB8fDB8fHww", alt: "Torre Guinigi con alberi" }
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
    id: "saturnia",
    name: "Le terme di Saturnia",
    location: "Saturno🪐",
    description: "♨️ Acqua calda a 37° tutto l'anno • Cascate naturali gratuite 24/7 🌊 • Ti faccio rilassare come nessun'altra 💆 • Romantica sotto le stelle ✨ • Skin care level: divino 🧖‍♀️",
    images: [
      { src: "https://plus.unsplash.com/premium_photo-1661866916518-1dcc1e907c2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVybWUlMjBkaSUyMHNhdHVybmlhfGVufDB8fDB8fHww", alt: "Volterra arroccata sulla collina" },
      { src: "https://images.unsplash.com/photo-1599599630269-20a39545d23c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVybWUlMjBkaSUyMHNhdHVybmlhfGVufDB8fDB8fHww", alt: "Teatro romano di Volterra" },
      { src: "https://media.istockphoto.com/id/2147564674/it/foto/terme-di-saturnia.webp?a=1&b=1&s=612x612&w=0&k=20&c=xYBKgAmbzZ6QSsSO6Q7smCk0py7MV2uSA7EGRfXi8XM=", alt: "Artigianato in alabastro" }
    ]
  }
];

// Make SITES available globally
window.SITES = SITES;
