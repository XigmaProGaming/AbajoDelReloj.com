let productsCard = [
  {
    id: 1,
    name: "Negan",
    description: "Funko colleccionable increible de Negan en la muerte de Glenn",
    category: ["Juguetes", "funko"],
    brand: "Funko",
    price: 399.99,
    img: ["https://http2.mlstatic.com/D_NQ_NP_907568-MLM53563929148_022023-V.webp",
    "https://media.s-bol.com/KMJ9My1lBLl/831x1200.jpg", 
    "https://www.raccoongames.es/img/productos/2017/02/23/popwalkingdead_neganblood_raccoongames.jpg"],
    rating: 4.5,
    publicationDate: "2023-03-13-11:05:05",
    invetory: 5,
    sellerID: 77, //id del vendedor
    state: "Nuevo", // usado o nuevo
    sku: 1569,
    visibility: true,
  },
  {
    id: 2,
    name: "Rick Grimes",
    description: "Rick Grimes el policia mas cool del condado apocaliptico",
    category: ["Juguetes", "funko"],
    brand: "Funko",
    price: 299.99,
    img: ["https://cdn.shopify.com/s/files/1/0500/6645/6740/products/rickgrimes_580x.jpg?v=1613181658",
    "https://m.media-amazon.com/images/I/8136r7LDxnL._AC_SL1500_.jpg", 
    "https://gwshop.cl/wp-content/uploads/2019/07/funko-pop-the-walking-dead-rick-grimes-13-D_NP_700360-MLC31213191662_062019-X.jpg"],
    rating: 5,
    publicationDate: "2023-03-13-11:05:05",
    invetory: 7,
    sellerID: 78, //id del vendedor
    state: "usado", // usado o nuevo
    sku: 1475,
    visibility: true,
  },
  {
    id: 3,
    name: "Arrow lego",
    description: "Arrow o Flecha es el héroe de super héroes",
    category: ["Juguetes", "Lego"],
    brand: "Lego",
    price: 599.99,
    img: ["https://live.staticflickr.com/3849/14288805590_01dd2f13d1_b.jpg",
    "https://i.pinimg.com/736x/f5/03/7e/f5037eafccb7ae670d56be74e5f8b215.jpg", 
    "https://live.staticflickr.com/702/21837945798_bdf131ba96_b.jpg"],
    rating: 4,
    publicationDate: "2023-03-13-11:05:05",
    invetory: 0,
    sellerID: 79, //id del vendedor
    state: "Nuevo", // usado o nuevo
    sku: 9734,
    visibility: false,
  },
  {
    id: 4,
    name: "Set Iron Man Lego",
    description: "Set de Iron man increible",
    category: ["Juguetes", "Lego"],
    brand: "Lego",
    price: 899.99,
    img: ["https://m.media-amazon.com/images/I/91g0lpKJpzL._AC_SL1500_.jpg",
    "https://www.costco.com.au/medias/sys_master/images/h52/h0d/117057506344990.jpg", 
    "https://www.tradeinn.com/f/13816/138165158_3/lego-juego-de-construccion-marvel-avengers-iron-man-sala-de-armaduras.jpg"],
    rating: 3.7,
    publicationDate: "2023-03-13-11:05:05",
    invetory: 15,
    sellerID: 80, //id del vendedor
    state: "usado", // usado o nuevo
    sku: 9873,
    visibility: true,
  },
  {
    id: 5,
    name: "Papalote",
    description: "Vuela alto pequeño! vuela alto",
    category: ["Juguetes", "Papalote"],
    brand: "N/a",
    price: 99.99,
    img: ["https://http2.mlstatic.com/D_NQ_NP_889275-MLM51363349729_082022-V.webp",
    "https://promoroca.mx/product/images/gm-005-papalote-diamond-rojo-rojo_13076", 
    "https://2.bp.blogspot.com/-kGoREnhdOBM/VmtqU0M9uSI/AAAAAAAAG9I/_2cjfONqaZs/s1600/4267748492_8d2e979275_o.jpg"],
    rating: 2,
    publicationDate: "2023-03-13-11:05:05",
    invetory: 45,
    sellerID: 81, //id del vendedor
    state: "Nuevo", // usado o nuevo
    sku: 6418,
    visibility: true,
  },
  {
      id: 6,
      name: "Apple iPhone 13 PRO (512 GB) - Verde alpino",
      description: `Pantalla Super Retina XDR de 6.1 pulgadas con ProMotion que brinda una respuesta más rápida y fluida.`,
      category: ["Tecnología", "Celulares"],
      brand: "Apple",
      price: 33999,
      img: [`https://http2.mlstatic.com/D_NQ_NP_2X_888876-MLA52132166567_102022-F.webp`, `https://http2.mlstatic.com/D_NQ_NP_2X_704642-MLA52132199134_102022-F.webp`],
      rating: 5.0,
      publicationDate: "2023-03-13-11:54:00",
      inventory: 45,
      sellerID: 20231, //id del vendedor
      state: "nuevo", // usado o nuevo
      sku: 121212121,
      visibility: true,

      },
      {
      id: 7,
      name: "Oppo Reno7 Dual SIM 128 GB negro 6 GB RAM",
      description: "Dispositivo desbloqueado para que elijas la compañía telefónica que prefieras.Pantalla AMOLED de 6.43",
      category: ["Tecnología", "Celulares"],
      brand: "Oppo",
      price: 8499,
      img: ["https://http2.mlstatic.com/D_NQ_NP_2X_987589-MLA50876393575_072022-F.webp","https://http2.mlstatic.com/D_NQ_NP_2X_967924-MLA50876393492_072022-F.webp"],
      rating: 4.5,
      publicationDate: "2023-03-13-12:01:05",
      inventory: 3,
      sellerID: 20232, //id del vendedor
      state: "nuevo", // usado o nuevo
      sku: 121212122,
      visibility: true,

      },
      {
      id: 8,
      name: "Xiaomi Pocophone Poco M5s Dual SIM 128 GB gris 6 GB RAM",
      description: `Dispositivo desbloqueado para que elijas la compañía telefónica que prefieras.
      Pantalla AMOLED de 6.43".
      Tiene 4 cámaras traseras de 64Mpx/8Mpx/2Mpx/2Mpx.
      Cámara delantera de 13Mpx.
      Procesador MediaTek Helio G95 Octa-Core de 2.05GHz con 6GB de RAM.`,
      category: ["Tecnología", "Celulares"],
      brand: "Xiaomi",
      price: 3466,
      img: ["https://http2.mlstatic.com/D_NQ_NP_2X_687023-MLA51825240523_102022-F.webp"],
      rating: 4.5,
      publicationDate: "2023-03-13-12:04:05",
      inventory: 45,
      sellerID: 20233, //id del vendedor
      state: "usado", // usado o nuevo
      sku: 121212123,
      visibility: true,

      },
      {
      id: 9,
      name: "Samsung Galaxy S20 FE 128 GB cloud navy 6 GB RAM",
      description: "Pantalla Super AMOLED de 6.5.",
      category: ["Tecnología", "Celulares"],
      brand: "Samsung",
      price: 6799,
      img: ["https://http2.mlstatic.com/D_NQ_NP_2X_903307-MLA52383198086_112022-F.webp","https://http2.mlstatic.com/D_NQ_NP_2X_953094-MLA52382881920_112022-F.webp"],
      rating: 4.5,
      publicationDate: "2023-03-13-12:06:05",
      inventory: 45,
      sellerID: 20234, //id del vendedor
      state: "usado", // usado o nuevo
      sku: 121212124,
      visibility: true,

      },
      {
      id: 10,
      name: "Celular Blackview Bl8800 Pro Sim Doble 128 Gb 8 Gb Ram 5g ",
      description: "5G MediaTek Tamaño 700 y 8 GB + 128 G: teléfono inteligente resistente Blackview BL8800PRO con el último sistema operativo Android 11. Procesador integrado MediaTek Dimensity 700 5G: acelera las cargas, las descargas y la transmisión. Juegos de alta calidad con latencia ultrabaja. Mantenga todo funcionando sin problemas con 8 GB de RAM y disfrute de un almacenamiento ROM de 128 GB para todos sus vídeos, fotos, aplicaciones y más. El BL8800 utiliza tecnología de refrigeración líquida de tubo de cobre 3D para reducir la temperatura de la CPU hasta 8,5 C. ",
      category: ["Tecnología", "Celulares"],
      brand: "Blackview",
      price: 9654,
      img: ["https://http2.mlstatic.com/D_NQ_NP_2X_768195-CBT52345920059_112022-F.webp","https://http2.mlstatic.com/D_NQ_NP_2X_663401-CBT52345794884_112022-F.webp", "https://http2.mlstatic.com/D_NQ_NP_2X_773233-CBT52345879366_112022-F.webp"],
      rating: 4.5,
      publicationDate: "2023-03-13-12:09:05",
      inventory: 45,
      sellerID: 20235, //id del vendedor
      state: "usado", // usado o nuevo
      sku: 121212125,
      visibility: true,

      },
  {
      id: 16,
      name: "Pantalla Sansui SMX32T1H LED HD 32",
      description: "Con el TV SMX32T1H vas a poder disfrutar de tus contenidos favoritos como películas y programas de interés, con gran calidad y desde la comodidad de tu sillón.",
      category: ["Tecnologia", "Pantallas"],
      brand: "Sansui",
      price: 2790,
      img: ["https://http2.mlstatic.com/D_NQ_NP_701075-MLA52767061033_122022-O.webp"],
      rating: 4.5,
      publicationDate: "2023-03-13-11:05:05",
      inventory: 49,
      sellerID: 78426, //id del vendedor
      state: "Nuevo", // usado o nuevo
      sku: 123456789,
      visibility: true,

  },
  {
      id: 17,
      name: "Smart Tv 50 Pulgadas Tcl 4 Series Led 4k Roku Tv",
      description: "TCL es una de las empresas líderes en la industria global de televisores, dedicada a la investigación y desarrollo de productos electrónicos. Orientada a la satisfacción de sus clientes, se distingue por proveer una excelente experiencia a quienes adquieran y usen sus diferentes líneas de electrodomésticos.",
      category: ["Tecnologia", "Pantallas"],
      brand: "TCL",
      price: 6549,
      img: ["https://http2.mlstatic.com/D_NQ_NP_989724-MLM53885366435_022023-O.webp","https://http2.mlstatic.com/D_NQ_NP_659968-MLM53885380548_022023-O.webp", "https://http2.mlstatic.com/D_NQ_NP_686600-MCO53707054888_022023-O.webp"],
      rating: 4.5,
      publicationDate: "2023-03-13-11:05:05",
      inventory: 12,
      sellerID: 78426, //id del vendedor
      state: "Nuevo", // usado o nuevo
      sku: 123456789,
      visibility: true,

  },
  {
      id: 18,
      name: "Pantalla Samsung Au7000 75'' Uhd 4k 60hz Hdr Bluetooth 2021",
      description: "PurColor hace que te sientas dentro de las películas que miras, permitiendo que el televisor exprese una enorme gama de colores para ofrecer un rendimiento de imagen óptimo y una experiencia visual envolvente.",
      category: ["Tecnologia", "Pantallas"],
      brand: "Samsung",
      price: 16999,
      img: ["https://http2.mlstatic.com/D_NQ_NP_829138-MLM51081537024_082022-O.webp","https://http2.mlstatic.com/D_NQ_NP_768816-MLM51081544006_082022-O.webp", "https://http2.mlstatic.com/D_NQ_NP_966204-MLM53990844445_022023-O.webp"],
      rating: 4.9,
      publicationDate: "2023-03-13-11:05:05",
      inventory: 903,
      sellerID: 78426, //id del vendedor
      state: "Nuevo", // usado o nuevo
      sku: 1335854959,
      visibility: true,

  },
  {
      id: 19,
      name: "JVC SI32H LCD HD 32 110V/240V",
      description: "Con el TV SI32H vas a poder disfrutar de tus contenidos favoritos como películas y programas de interés, con gran calidad y desde la comodidad de tu sillón. ",
      category: ["Tecnologia", "Pantallas"],
      brand: "JVC",
      price: 2930,
      img: ["https://http2.mlstatic.com/D_NQ_NP_859607-MLA43558302309_092020-O.webp","https://http2.mlstatic.com/D_NQ_NP_770949-MLA43558247453_092020-O.webp"],
      rating: 4.6,
      publicationDate: "2023-03-13-11:05:05",
      inventory: 18,
      sellerID: 78426, //id del vendedor
      state: "Nuevo", // usado o nuevo
      sku: 123456789,
      visibility: true,

  },
  {
      id: 20,
      name: "Smart Tv Hisense 55 Pulgadas 4k Uhd Google Tv 60hz Dolby Vision Hdr",
      description: "Simplemente brillante La serie Hisense A6 2022 agrega más mejoras en la calidad de imagen y una actualización del sistema operativo para el ajuste perfecto de 4K para los consumidores que buscan opciones y asequibilidad",
      category: ["Tecnologia", "Pantallas"],
      brand: "Hisense",
      price: 7999,
      img: ["https://http2.mlstatic.com/D_NQ_NP_920059-MLA51623132690_092022-O.webp","https://http2.mlstatic.com/D_NQ_NP_809425-MLA51623133745_092022-O.webp", "https://http2.mlstatic.com/D_NQ_NP_733061-MLA51623112950_092022-O.webp"],
      rating: 4.5,
      publicationDate: "2023-03-13-11:05:05",
      inventory: 81,
      sellerID: 78426, //id del vendedor
      state: "Nuevo", // usado o nuevo
      sku: 123456789,
      visibility: true,

  },

  {
      id: 21,
      name: "CAZADORA BOMBER EFECTO ANTE ",
      description: "Cazadora con cuello subido. Manga larga. Bolsillos frontales de vivo. Acabados en rib. Cierre frontal con cremallera.",
      category: ["category1", "category2"],
      brand: "ZARA",
      price: 1.299,
      img: ["https://http2.mlstatic.com/D_NQ_NP_655314-MLM53047686941_122022-W.webp","https://static.zara.net/photos///2023/V/0/2/p/6318/488/707/2/w/563/6318488707_6_2_1.jpg?ts=1669129549009", "https://static.zara.net/photos///2023/V/0/2/p/6318/488/707/2/w/563/6318488707_6_3_1.jpg?ts=1669129558285"],
      rating: 4.0,
      publicationDate: "2023-03-13-11:05:05",
      invetory: 20,
      sellerID: 89654, //id del vendedor
      state: "Nuevo", // usado o nuevo
      sku: 123456712,
      visibility: true,
  
  },
  {
      id: 22,
      name: "Vestido texturizado",
      description: "Vestido corto de punto texturizado. Modelo con escote de corazón, mangas abombadas cortas y sección superior entallada. Elástico estrecho sobre los hombros y en el borde de las mangas. Costura en la cintura y falda con ligero vuelo.",
      category: ["category1", "category2"],
      brand: "H&M",
      price: 349.00,
      img: ["https://http2.mlstatic.com/D_NQ_NP_902959-MLM49057595829_022022-O.webp","https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F19%2F52%2F1952c3643862d5e9370526e0ff7d5db6dd875711.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", "url3"],
      rating: 3.9,
      publicationDate: "2023-03-13-11:05:05",
      invetory: 15,
      sellerID: 987426, //id del vendedor
      state: "Nuevo", // usado o nuevo
      sku: 123456123,
      visibility: true,
  
  },
  {
      id: 23,
      name: "Jeans skinny super high waist",
      description: "Exterior, 71% algodón, 27% poliéster, 2% elastano",
      category: ["category1", "category2"],
      brand: "Bershka",
      price: 399.99,
      img: ["https://static.bershka.net/4/photos2/2023/V/0/1/p/0006/888/461/c679834ae7cb1124fb433d438c029315-0006888461_2_4_0.jpg?imwidth=850&impolicy=bershka-itxmediumhigh&imformat=chrome","https://static.bershka.net/4/photos2/2023/V/0/1/p/0006/888/461/c0e4a434b460782925ef83f546414636-0006888461_2_24_0.jpg?imwidth=850&impolicy=bershka-itxmediumhigh&imformat=chrome", "url"],
      rating: 4.5,
      publicationDate: "2023-03-13-11:05:05",
      invetory: 30,
      sellerID: 78426, //id del vendedor
      state: "usado", // usado o nuevo
      sku: 123456789,
      visibility: true,
  
  },
  {
      id: 24,
      name: "Jeans super skinny",
      description: "Exterior, 68% algodón, 27% poliéster, 3% otras fibras, 2% elastano",
      category: ["category1", "category2"],
      brand: "Bershka",
      price: 599.99,
      img: ["https://static.bershka.net/4/photos2/2023/V/0/2/p/0305/666/428/eb54b8603b36b16bb8f8c4ed7de71955-0305666428_2_4_0.jpg?imwidth=850&impolicy=bershka-itxmediumhigh&imformat=chrome","https://static.bershka.net/4/photos2/2023/V/0/2/p/0305/666/428/1fd4b1e42a620b07b514d7b02fdf9e8b-0305666428_2_24_0.jpg?imwidth=850&impolicy=bershka-itxmediumhigh&imformat=chrome", "url3"],
      rating: 3.5,
      publicationDate: "2023-03-13-11:05:05",
      invetory: 30,
      sellerID: 987456, //id del vendedor
      state: "Nuevo", // usado o nuevo
      sku: 123451234,
      visibility: true,
  
  },
  {
      id: 25,
      name: "Top de tirantes con estampado floral ",
      description: "Color:	Multicolor, Estilo:	Bohemio, Tipo de Estampado:	Floral, todo estampado",
      category: ["category1", "category2"],
      brand: "Shein",
      price: 299.99,
      img: ["https://http2.mlstatic.com/D_NQ_NP_980663-MLM53473271264_012023-W.webp","https://img.ltwebstatic.com/images3_pi/2022/01/18/1642501046b3be8583a01acd40b3b8ec20afcdc644_thumbnail_600x.webp", "url3"],
      rating: 4.5,
      publicationDate: "2023-03-13-11:05:05",
      invetory: 35,
      sellerID: 9874561, //id del vendedor
      state: "usado", // usado o nuevo
      sku: 123412345,
      visibility: true,
  
  },
  
  {
      id: 26,
      name: "Amayya | Bolsos artesanal, yute premium, bolso de mano para dama, modelo Sandy bambu ",
      description: "Jute Bolso elaborado de forma Artesanal hecho 100% en Mexico, Útil para llevar a cualquier parte y ser el centro de atención",
      category: ["category1", "category2"],
      brand: "Shein",
      price: 299.99,
      img: ["https://http2.mlstatic.com/D_NQ_NP_964032-MLM52084982691_102022-W.webp","https://m.media-amazon.com/images/I/71k4-G5IfzL._AC_SX679_.jpg", "url3"],
      rating: 5.0,
      publicationDate: "2023-03-13-11:05:05",
      invetory: 35,
      sellerID: 9874512, //id del vendedor
      state: "uevo", // usado o nuevo
      sku: 1232312345,
      visibility: true,
  
  },
  {
      id: 27,
      name: `Lenovo IdeaPad 3i`,
      description: `Procesador: alimentado por el último procesador Intel Core i3-1115G4 de 11ª generación (caché de 6 m, hasta 4.1 GHz) para multitarea avanzada, computación exigente, juegos fluidos, navegación de múltiples pestañas y tareas diarias.`,
      category: ["tecnologia", "laptop", "computadora"],
      brand: "Lenovo",
      price: 8529.9,
      img: ["https://m.media-amazon.com/images/I/71Z4SuX-4ZL._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/71vBHvJSDVL._AC_SL1500_.jpg", "https://m.media-amazon.com/images/I/71r0tmCSL4L._AC_SL1500_.jpg"],
      rating: 4.0,
      publicationDate: "2023-03-13-11:05:05",
      inventory: 3,
      sellerID: 4848, //id del vendedor
      state: "nuevo", // usado o nuevo
      sku: 11110111,
      visibility: true,

  },
  {
      id: 28,
      name: "Acer Aspire 5 A515-45-R74Z Slim Laptop",
      description: `15.6" Full HD IPS | AMD Ryzen 5 5500U Hexa-Core Mobile Processor | AMD Radeon Graphics | 8GB DDR4 | 256GB NVMe SSD | WiFi 6 | Backlit KB | Windows 11 Home`,
      category: ["tecnologia", "laptop", "computadora"],
      brand: "Acer",
      price: 9966.84,
      img: ["https://m.media-amazon.com/images/I/71SCvh0L3OL._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/71RyGsKr3CL._AC_SL1500_.jpg", "https://m.media-amazon.com/images/I/611wb+woW5L._AC_SL1500_.jpg", "https://m.media-amazon.com/images/I/71YxcmjfGHS._AC_SL1500_.jpg"],
      rating: 4.3,
      publicationDate: "2023-03-13-11:53:05",
      inventory: 4,
      sellerID: 1423, //id del vendedor
      state: "nuevo", // usado o nuevo
      sku: 456789111,
      visibility: true,

  },
  {
      id: 29,
      name: "Asus TUF Gaming F15 Gaming Laptop",
      description: `15.6” 144Hz FHD IPS-Type Display, Intel Core i5-10300H Processor, GeForce GTX 1650, 8GB DDR4 RAM, 512GB PCIe SSD, Wi-Fi 6, Windows 11 Home, FX506LH-AS51`,
      category: ["laptop", "tecnologia", "gaming", "computadora"],
      brand: "Asus",
      price: 14387.21,
      img: ["https://m.media-amazon.com/images/I/81OiT2-NoeL._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/816tFLwj09L._AC_SL1500_.jpg", "https://m.media-amazon.com/images/I/81WkTLHyFrL._AC_SL1500_.jpg"],
      rating: 4.7,
      publicationDate: "2023-03-13-11:57:05",
      inventory: 1,
      sellerID: 4444, //id del vendedor
      state: "nuevo", // usado o nuevo
      sku: "FX506LH-AS51",
      visibility: true,

  },
  {
      id: 30,
      name: "HP Laptop 14-dq0500la",
      description: `Intel® Celeron™, 4GB RAM , 128GB SSD, HD 14", Windows 11 Home, Color Negro`,
      category: ["tecnologia", "laptop", "computadora"],
      brand: "HP",
      price: 5368.20,
      img: ["https://m.media-amazon.com/images/I/81JAK1KpUOL._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/71E-hXbeqKL._AC_SL1500_.jpg", "https://m.media-amazon.com/images/I/819oa1GX7SL._AC_SL1500_.jpg"],
      rating: 4.6,
      publicationDate: "2023-03-13-11:59:05",
      inventory: 0,
      sellerID: 22248, //id del vendedor
      state: "usado", // usado o nuevo
      sku: `14-dq0500la`,
      visibility: false,

  },
  {
      id: 31,
      name: "Asus ROG Strix G15 PC",
      description: `Computadora para Juegos, Intel Core i7-12700F, GeForce RTX 3060 12GB, 16GB DDR4 RAM, 1TB PCIe 4.0 SSD, Windows 11 Home, G15CF-AB766`,
      category: ["pc gamer", "tecnologia","computadora","gamer"],
      brand: "Asus",
      price: 30674.72,
      img: ["https://m.media-amazon.com/images/I/813Nab75aQL._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/81Fc-mO5GcL._AC_SL1500_.jpg", "https://m.media-amazon.com/images/I/713kQ5YlAtL._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/81MR3wwOJqL._AC_SL1500_.jpg"],
      rating: 4.3,
      publicationDate: "2023-03-13-12:02:05",
      inventory: 4,
      sellerID: 4444, //id del vendedor
      state: "nuevo", // usado o nuevo
      sku: 4847111,
      visibility: true,

  },
  {
      id: 32,
      name: "Mochila Artesanal Mexicana Grande 22l Resistente C/ahorcador",
      description: `Mochila Artesanal Mexicana Grande de 22 litros, para mujeres u hombres que quieran llevar una gran cantidad de cosas, ideal para llevar a todos lados. Cabe una laptop de 17" sin problemas. Es ultra resistente hecho artesanalmente con la mejor calidad y ojo, se puede lavar en lavadora.`,
      category: ["artesania", "mochila","equipaje","bolsas"],
      brand: "Sin marca",
      price: 30674.72,
      img: ["https://http2.mlstatic.com/D_NQ_NP_2X_953087-MLM54037631955_022023-F.webp","https://http2.mlstatic.com/D_NQ_NP_2X_879667-MLM46433999646_062021-F.webp", "https://http2.mlstatic.com/D_NQ_NP_2X_879667-MLM46433999646_062021-F.webp"],
      rating: 5,
      publicationDate: "2023-03-13-12:07:05",
      inventory: 6,
      sellerID: 7879, //id del vendedor
      state: "nuevo", // usado o nuevo
      sku: `m22l-gris`,
      visibility: true,

  },
  {
      id: 33,
      name: "5 Pzas. Jabón Artesanal Arroz Y Rosas Aclarante Natural ",
      description: `ACLARA TU PIEL GRADUALMENTE DE FORMA NATURAL!!
      SÓLO LAVA TODAS LAS NOCHES TU ROSTRO DEJA ACTUAR LA ESPUMA POR UN PAR DE MINUTOS Y ENJUAGA.
      Ahora además del arroz, también contiene perejil, otro activo aclarador por excelencia, su función despigmentante ayuda a eliminar ese exceso superficial de melanina que oscurecen tu piel.
      ESTE PAQUETE CONTIENE 5 PIEZAS DE JABÓN TOTALMENTE NATURAL, NO UTILICES MAS QUÍMICOS QUE TE INTOXICAN.`,
      category: ["artesania", "belleza y cuidado personal", "higiene personal", "jabon"],
      brand: "sin marca",
      price: 9654,
      img: ["https://http2.mlstatic.com/D_NQ_NP_2X_605805-MLM50726858983_072022-F.webp","img2", "img3"],
      rating: 4.5,
      publicationDate: "2023-03-13-12:16:05",
      inventory: 20,
      sellerID: 20236, //id del vendedor
      state: "usado", // usado o nuevo
      sku: 121212126,
      visibility: true,
      
  }

]; 
  //Cambiar este id para verificar informacion de otros productos
  //Desde 0 hasta 32
  //Una vez que se implemente la API, sustituir productsCard[product_id-1] por el correcto
  //Actualmente funciona con la posicion en el Array, por eso es que no se muestran correctamente los articulos despues del id "10"
  //let product_id = 4;

let params = new URL(document.location).searchParams; //Se revisa el URL para obtener el ID del producto que queremos mostrar
let product_id = params.get("id"); // Se extrae especificamente el valor de id=
console.log("id=" + product_id);

const bodyContainer = document.querySelector("#bodyContainer");

const previewPics = document.querySelector("#previewPics");

//Primera imagen preview para el carrusel de fotos
previewPics.innerHTML=`
<a data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" >
  <img src="${productsCard[product_id-1].img[0]}" class="d-block w-100 img-thumbnail" alt="...">
</a>
`;

//Resto de las imagenes previews para el carrusel
for(let i = 1; i<productsCard[product_id-1].img.length;i++){
  previewPics.innerHTML+=`
  <a data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i}" aria-label="Slide ${i+1}">
  <img src="${productsCard[product_id-1].img[i]}" class="d-block w-100 img-thumbnail" alt="...">
</a>
  `;
};

//Primera indicador para el carrusel
const carouselIndicators = document.querySelector("#carouselIndicators");
carouselIndicators.innerHTML=`
<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
`;

//Resto de los indicadores para el carrusel
for(let i = 1; i<productsCard[product_id-1].img.length;i++){
  carouselIndicators.innerHTML+=`
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i}" aria-label="Slide ${i+1}"></button>
  `;
};

//Imagenes del carrusel
const carouselInner = document.querySelector("#carouselInner");
for(let i = 0; i<productsCard[product_id-1].img.length;i++){
  if(i==0){
    carouselInner.innerHTML+=`
    <div class="carousel-item img-fluid active">
    <img src="${productsCard[product_id-1].img[i]}" class="d-block w-100" alt="...">
    </div>
    `;
  } else{
    carouselInner.innerHTML+=`
    <div class="carousel-item img-fluid">
    <img src="${productsCard[product_id-1].img[i]}" class="d-block w-100" alt="...">
    </div>
    `;

  }
};

//Nombre, calificacion, descripcion y estaod del articulo
const nombreDescripcion = document.querySelector("#nombreDescripcion");
nombreDescripcion.innerHTML = `
<h2>${productsCard[product_id-1].name}</h2>
<h5>Calificación: ${productsCard[product_id-1].rating}</h5>
<p>${productsCard[product_id-1].description}</p>
<p>Estado: ${productsCard[product_id-1].state}</p>  
`;

//Precio del articulo
const idPrecio = document.querySelector("#idPrecio");
idPrecio.innerHTML = `$${(productsCard[product_id-1].price).toLocaleString()}`;

//Informacion del vendedor
const infoVendedor = document.querySelector("#infoVendedor");
infoVendedor.innerHTML=`
<h4>Informacion del vendedor</h3>
<p>ID del vendedor: ${productsCard[product_id-1].sellerID}</p>
<p>Nombre y apellido desde BD</p>
`;



//Cuando el usuario hace click a algun producto, se crea una solicitud al servidor y se recibe los datos de este producto
//Con estos datos se llena la informacion en la pagina del producto especifico
//Dentro de esta informacion se obtiene el id


//Ubicacion del boton "Agregar al Carrito"
const botonAgregarAlCarrito = document.querySelector("#agregarCarrito");

//Se le agrega un event listener para cuando se presione, se almacena en local storage el id y la cantidad del producto
botonAgregarAlCarrito.addEventListener('click',()=>{
  console.log("boton picado");
  almacenarIdCantidad();
});

//Se revisa cuantos productos hay en el local storage para evitar sobreescribir valores
let nextKey = localStorage.length; 

//Esta funcion revisa la cantidad de productos seleccionados y almacena el id y la cantidad en local storage
function almacenarIdCantidad(){
  const cantidad = document.querySelector("#cantidad").value;
  console.log("Cantidad: " + cantidad);
  localStorage.setItem(`${nextKey}`, `${product_id},${cantidad}`);
  nextKey++;
};


console.log("fin id=" + product_id);