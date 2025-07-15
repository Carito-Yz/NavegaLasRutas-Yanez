const products = [
  {
    id: 1,
    name: "Pelota Mikasa V200W",
    description: "Pelota oficial aprobada por la FIVB, utilizada en competiciones internacionales. Cuenta con una construcción aerodinámica que mejora la estabilidad en el aire y un tacto suave para un mejor control.",
    price: 25000,
    stock: 0,
    image: "/img/pelota-mikasa-v200w.jpg",
    category: "pelota"
  },
  {
    id: 2,
    name: "Pelota Molten V5M5000",
    description: "Pelota profesional fabricada en cuero sintético de alta calidad, ideal para competencias de alto nivel. Ofrece excelente agarre, control y resistencia al desgaste.",
    price: 23000,
    stock: 5,
    image: "/img/pelota-molten-v5m4000.jpg",
    category: "pelota"
  },
  {
    id: 3,
    name: "Pelota Wilson AVP",
    description: "Pelota especialmente diseñada para voley de playa, resistente al agua y al sol. Su superficie rugosa garantiza mejor tracción y control en ambientes arenosos.",
    price: 21000,
    stock: 6,
    image: "/img/pelota-wilson-avp.jpg",
    category: "pelota"
  },
  {
    id: 4,
    name: "Pelota Mikasa V330W",
    description: "Pelota de entrenamiento de alta calidad con excelente durabilidad. Su diseño permite un control preciso y una trayectoria estable durante el juego.",
    price: 19500,
    stock: 4,
    image: "/img/pelota-mikasa-v330w.jpg",
    category: "pelota"
  },
  {
    id: 5,
    name: "Pelota Molten Cocida MS500-P3S",
    description: "Diseñada para entrenamientos intensivos, esta pelota cocida a mano presenta una gran resistencia al desgaste y un tacto agradable, ideal para mejorar habilidades técnicas.",
    price: 18000,
    stock: 8,
    image: "/img/pelota-molten-cocida-ms500-p3s.jpg",
    category: "pelota"
  },
  {
    id: 6,
    name: "Pelota Molten V5M4000",
    description: "Pelota de excelente relación calidad-precio, recomendada para partidos de nivel intermedio. Su superficie proporciona buena tracción y control durante el juego.",
    price: 20000,
    stock: 3,
    image: "/img/pelota-molten-v5m4000.jpg",
    category: "pelota"
  },
  {
    id: 7,
    name: "Pelota Reebok Soft Touch",
    description: "Pelota liviana con superficie suave, ideal para juegos recreativos o entrenamientos livianos. Diseñada para brindar una experiencia de juego cómoda y segura.",
    price: 16000,
    stock: 9,
    image: "/img/pelota-reebok-soft-touch.jpg",
    category: "pelota"
  },
  {
    id: 8,
    name: "Pelota Nike All Court",
    description: "Pelota versátil y liviana apta para todo tipo de superficies. Su diseño balanceado mejora la precisión de los golpes, siendo ideal para jugadores en formación.",
    price: 17000,
    stock: 0,
    image: "/img/pelota-nike-all-court.jpg",
    category: "pelota"
  },
  {
    id: 9,
    name: "Pelota Dribbling Soft Touch",
    description: "Diseñada para principiantes, esta pelota tiene una superficie suave que favorece el aprendizaje y el desarrollo de habilidades básicas en jugadores novatos.",
    price: 15500,
    stock: 10,
    image: "/img/pelota-dribbling-soft-touch.jpg",
    category: "pelota"
  },
  {
    id: 10,
    name: "Pelota Gala Pro-Line BV5595S",
    description: "Pelota profesional aprobada para torneos de nivel competitivo. Ofrece alto rendimiento, precisión en el vuelo y excelente respuesta al toque.",
    price: 24500,
    stock: 6,
    image: "/img/pelota-gala-bv5595s.jpg",
    category: "pelota"
  },
   {
    id: 11,
    name: "Rodilleras Mizuno LR6 Negras",
    description: "Rodilleras profesionales con diseño anatómico y tecnología VS-1 que absorbe los impactos de forma eficiente. Ideales para entrenamientos intensivos y competencias exigentes.",
    price: 12000,
    stock: 5,
    image: "/img/rodilleras-mizuno-lr6-negras.jpg",
    category: "rodilleras"
  },
  {
    id: 12,
    name: "Rodilleras Mizuno LR6 Blancas",
    description: "Ofrecen máxima comodidad y protección sin limitar el movimiento. Están confeccionadas con materiales transpirables que mantienen la frescura durante el juego.",
    price: 11500,
    stock: 3,
    image: "/img/rodilleras-mizuno-lr6-blancas.jpg",
    category: "rodilleras"
  },
  {
    id: 13,
    name: "Rodilleras Penalty Pro",
    description: "Rodilleras versátiles para uso frecuente, con acolchado de alta densidad que brinda protección eficaz en cada impacto. Ajuste cómodo y buena ventilación.",
    price: 11000,
    stock: 0,
    image: "/img/penalty-5.jpg",
    category: "rodilleras"
  },
  {
    id: 14,
    name: "Rodilleras DRB",
    description: "Diseñadas para absorber impactos fuertes, cuentan con una estructura reforzada y tejidos flexibles que aseguran movilidad y seguridad durante el juego.",
    price: 9000,
    stock: 8,
    image: "/img/rodilleras-drb.jpg",
    category: "rodilleras"
  },
  {
    id: 15,
    name: "Rodilleras Adidas Match",
    description: "Modelo ergonómico que se adapta a la forma natural de la rodilla. Proporcionan protección sin sacrificar comodidad, ideales para entrenamientos y partidos regulares.",
    price: 10500,
    stock: 4,
    image: "/img/rodilleras-adidas-match.jpg",
    category: "rodilleras"
  },
  {
    id: 16,
    name: "Rodilleras Nike Court",
    description: "Ligeras y flexibles, estas rodilleras ofrecen buena protección sin interferir con el movimiento natural. Ideales para jugadores que buscan confort y agilidad.",
    price: 9500,
    stock: 9,
    image: "/img/rodilleras-nike-court.jpg",
    category: "rodilleras"
  },
  {
    id: 17,
    name: "Rodilleras Wilson Training",
    description: "Diseñadas para brindar seguridad en cada entrenamiento, estas rodilleras combinan espuma de alta densidad con una estructura transpirable y resistente.",
    price: 9800,
    stock: 6,
    image: "/img/rodilleras-wilson.jpg",
    category: "rodilleras"
  },
  {
    id: 18,
    name: "Rodilleras ALLSIX",
    description: "Recomendadas para actividades recreativas y jugadores principiantes. Ofrecen protección básica con buena comodidad para entrenamientos livianos.",
    price: 8700,
    stock: 0,
    image: "/img/rodilleras-allsix.jpg",
    category: "rodilleras"
  },
  {
    id: 19,
    name: "Rodilleras Striker",
    description: "Excelente relación calidad-precio. Ideales para quienes buscan protección efectiva sin realizar una gran inversión. Diseño acolchado y durable.",
    price: 8900,
    stock: 7,
    image: "/img/rodilleras-striker.jpg",
    category: "rodilleras"
  },
  {
    id: 20,
    name: "Rodilleras NassaU",
    description: "Rodilleras diseñadas para brindar confort prolongado y resistencia ante impactos. Materiales resistentes al desgaste y buena sujeción en la pierna.",
    price: 10200,
    stock: 3,
    image: "/img/rodilleras-nassau.jpg",
    category: "rodilleras"
  },
  {
    id: 21,
    name: "Rodilleras Proyec",
    description: "Rodilleras acolchadas con diseño anatómico que brindan comodidad total. Su tejido elástico y transpirable permite libertad de movimiento durante el juego.",
    price: 11500,
    stock: 6,
    image: "/img/rodilleras-proyec.jpg",
    category: "rodilleras"
  },
  {
    id: 22,
    name: "Short Mizuno Mujer",
    description: "Short deportivo femenino confeccionado con tejido liviano y de secado rápido. Ofrece comodidad y frescura durante entrenamientos y competencias exigentes.",
    price: 15000,
    stock: 7,
    image: "/img/short-mujer-mizuno.jpg",
    category: "indumentaria"
  },
  {
    id: 23,
    name: "Short Nike Court Dry",
    description: "Short de alto rendimiento con tecnología Dri-FIT que elimina la humedad y mantiene la piel seca. Corte cómodo y tejido elástico que acompaña tus movimientos.",
    price: 13500,
    stock: 0,
    image: "/img/short-nike-dry-7.jpg",
    category: "indumentaria"
  },
  {
    id: 24,
    name: "Camiseta Mizuno Performance",
    description: "Camiseta técnica diseñada para rendir al máximo en partidos intensos. Su tejido respirable permite una excelente ventilación y libertad de movimiento.",
    price: 14500,
    stock: 5,
    image: "/img/camiseta-mizuno-performance.jpg",
    category: "indumentaria"
  },
  {
    id: 25,
    name: "Short Puma Flex",
    description: "Short con diseño deportivo y ajuste ergonómico. Incorpora materiales flexibles que acompañan el cuerpo, brindando comodidad en cada movimiento.",
    price: 12500,
    stock: 6,
    image: "/img/short-puma-flex.jpg",
    category: "indumentaria"
  },
  {
    id: 26,
    name: "Calza Larga Penalty Compresiva",
    description: "Calza compresiva que mejora la circulación y reduce la fatiga muscular. Ideal para entrenamientos intensos y recuperación post esfuerzo.",
    price: 17000,
    stock: 3,
    image: "/img/calza-larga-compresiva.jpg",
    category: "indumentaria"
  },
  {
    id: 27,
    name: "Camiseta High Runner",
    description: "Camiseta con tecnología de ventilación optimizada. Su corte liviano y costuras planas brindan confort total durante actividades deportivas prolongadas.",
    price: 12800,
    stock: 8,
    image: "/img/camiseta-high-runner.jpg",
    category: "indumentaria"
  },
  {
    id: 28,
    name: "Camiseta Termica Montero",
    description: "Prenda térmica ideal para climas fríos. Aporta calor sin aumentar el volumen y ofrece una excelente resistencia al desgaste gracias a su tejido técnico.",
    price: 9800,
    stock: 4,
    image: "/img/camiseta-termica-montero.jpg",
    category: "indumentaria"
  },
  {
    id: 29,
    name: "Top Deportivo Nike Vball",
    description: "Top con sujeción media, ideal para entrenamiento y competición. Su confección en tejido elástico ofrece seguridad y confort sin limitar el movimiento.",
    price: 11000,
    stock: 9,
    image: "/img/top-deportivo-nike.jpg",
    category: "indumentaria"
  },
  {
    id: 30,
    name: "Musculosa Reusch Hombre",
    description: "Musculosa oficial de competición con diseño anatómico y tejido liviano. Brinda frescura, movilidad y estilo en cada partido o entrenamiento.",
    price: 14200,
    stock: 0,
    image: "/img/musculosa-reusch-hombre.jpg",
    category: "indumentaria"
  },
  {
    id: 31,
    name: "Short Mikasa Training",
    description: "Short de entrenamiento con tejido suave al tacto y excelente capacidad de absorción de humedad. Favorece la movilidad total en cada movimiento.",
    price: 12000,
    stock: 6,
    image: "/img/short-mikasa.jpg",
    category: "indumentaria"
  },
  {
    id: 32,
    name: "Musculosa Nike Mujer",
    description: "Musculosa deportiva ideal para climas cálidos. Con tecnología Dri-FIT y corte cómodo que permite libertad de movimiento y transpirabilidad.",
    price: 9500,
    stock: 4,
    image: "/img/musculosa-nike-mujer.jpg",
    category: "indumentaria"
  }
]

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 3000)
    })
}

const getProductById = (productId) => {

  return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find((product) => product.id == productId)
            resolve(product)
        }, 3000)
    })
}

export { getProducts, getProductById }