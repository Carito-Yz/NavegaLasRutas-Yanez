const products = [
  {
    id: 1,
    name: "Pelota Mikasa V200W",
    description: "Pelota oficial FIVB.",
    price: 25000,
    stock: 7,
    image: "",
    category: "pelota"
  },
  {
    id: 2,
    name: "Pelota Molten V5M5000",
    description: "Pelota profesional de cuero sintético.",
    price: 23000,
    stock: 5,
    image: "",
    category: "pelota"
  },
  {
    id: 3,
    name: "Pelota Wilson AVP",
    description: "Ideal para voley de playa.",
    price: 21000,
    stock: 6,
    image: "",
    category: "pelota"
  },
  {
    id: 4,
    name: "Pelota Mikasa V330W",
    description: "Alta durabilidad y control.",
    price: 19500,
    stock: 4,
    image: "",
    category: "pelota"
  },
  {
    id: 5,
    name: "Pelota Molten Cocida MS500-P3S",
    description: "Diseño resistente para entrenamientos.",
    price: 18000,
    stock: 8,
    image: "",
    category: "pelota"
  },
  {
    id: 6,
    name: "Pelota Molten V5M4000",
    description: "Excelente calidad-price.",
    price: 20000,
    stock: 3,
    image: "",
    category: "pelota"
  },
  {
    id: 7,
    name: "Pelota Reebok Soft Touch",
    description: "Para uso recreativo.",
    price: 16000,
    stock: 9,
    image: "",
    category: "pelota"
  },
  {
    id: 8,
    name: "Pelota Nike Elite",
    description: "Liviana y precisa.",
    price: 17000,
    stock: 2,
    image: "",
    category: "pelota"
  },
  {
    id: 9,
    name: "Pelota Dribbling Soft Touch",
    description: "Excelente para principiantes.",
    price: 15500,
    stock: 10,
    image: "",
    category: "pelota"
  },
  {
    id: 10,
    name: "Pelota Gala Pro-Line BV5595S",
    description: "Uso profesional.",
    price: 24500,
    stock: 6,
    image: "",
    category: "pelota"
  },
  {
    id: 11,
    name: "Rodilleras Mizuno LR6 Negras",
    description: "Protección profesional.",
    price: 12000,
    stock: 5,
    image: "",
    category: "rodilleras"
  },
  {
    id: 12,
    name: "Rodilleras Mizuno LR6 Negras",
    description: "Comodidad total.",
    price: 11500,
    stock: 3,
    image: "",
    category: "rodilleras"
  },
  {
    id: 13,
    name: "Rodilleras Penalty Pro",
    description: "Uso diario.",
    price: 11000,
    stock: 6,
    image: "",
    category: "rodilleras"
  },
  {
    id: 14,
    name: "Rodilleras DRB",
    description: "Gran absorción de impacto.",
    price: 9000,
    stock: 8,
    image: "",
    category: "rodilleras"
  },
  {
    id: 15,
    name: "Rodilleras Adidas Match",
    description: "Diseño ergonómico.",
    price: 10500,
    stock: 4,
    image: "",
    category: "rodilleras"
  },
  {
    id: 16,
    name: "Rodilleras Nike Court",
    description: "Flexibles y livianas.",
    price: 9500,
    stock: 9,
    image: "",
    category: "rodilleras"
  },
  {
    id: 17,
    name: "Rodilleras Wilson Training",
    description: "Protección confiable.",
    price: 9800,
    stock: 6,
    image: "",
    category: "rodilleras"
  },
  {
    id: 18,
    name: "Rodilleras ALLSIX",
    description: "Uso recreativo.",
    price: 8700,
    stock: 5,
    image: "",
    category: "rodilleras"
  },
  {
    id: 19,
    name: "Rodilleras Striker",
    description: "Buena relación price/calidad.",
    price: 8900,
    stock: 7,
    image: "",
    category: "rodilleras"
  },
  {
    id: 20,
    name: "Rodilleras NassaU",
    description: "Confort y resistencia.",
    price: 10200,
    stock: 3,
    image: "",
    category: "rodilleras"
  },
  {
    id: 21,
    name: "Rodilleras Proyec",
    description: "Comodidad total.",
    price: 11500,
    stock: 6,
    image: "",
    category: "rodilleras"
  },
  {
    id: 22,
    name: "Short Mizuno Mujer",
    description: "Tejido transpirable y liviano.",
    price: 15000,
    stock: 7,
    image: "",
    category: "indumentaria"
  },
  {
    id: 23,
    name: "Short Nike Court Dry",
    description: "Secado rápido y gran comodidad.",
    price: 13500,
    stock: 4,
    image: "",
    category: "indumentaria"
  },
  {
    id: 24,
    name: "Camiseta Mizuno Performance",
    description: "Ideal para partidos intensos.",
    price: 14500,
    stock: 5,
    image: "",
    category: "indumentaria"
  },
  {
    id: 25,
    name: "Short Puma Flex",
    description: "Diseño deportivo con ajuste perfecto.",
    price: 12500,
    stock: 6,
    image: "",
    category: "indumentaria"
  },
  {
    id: 26,
    name: "Calza Larga Penalty Compresiva",
    description: "Soporte muscular y elasticidad.",
    price: 17000,
    stock: 3,
    image: "",
    category: "indumentaria"
  },
  {
    id: 27,
    name: "Camiseta High Runner",
    description: "Mayor ventilación y confort.",
    price: 12800,
    stock: 8,
    image: "",
    category: "indumentaria"
  },
  {
    id: 28,
    name: "Camiseta Termica Montero",
    description: "Ligero y resistente al desgaste.",
    price: 9800,
    stock: 4,
    image: "",
    category: "indumentaria"
  },
  {
    id: 29,
    name: "Top Deportivo Nike Vball",
    description: "Sujeción perfecta para entrenamiento.",
    price: 11000,
    stock: 9,
    image: "",
    category: "indumentaria"
  },
  {
    id: 30,
    name: "Musculosa Reusch Hombre",
    description: "Diseño oficial de competición.",
    price: 14200,
    stock: 5,
    image: "",
    category: "indumentaria"
  },
  {
    id: 31,
    name: "Short Mikasa Training",
    description: "Movilidad total y tela suave.",
    price: 12000,
    stock: 6,
    image: "",
    category: "indumentaria"
  },
  {
    id: 32,
    name: "Musculosa Nike Mujer",
    description: "Ideal para climas cálidos.",
    price: 9500,
    stock: 4,
    image: "",
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

export default getProducts