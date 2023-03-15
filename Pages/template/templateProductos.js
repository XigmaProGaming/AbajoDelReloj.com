let products = [
{
        id: 21,
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
        id: 22,
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
        id: 23,
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
        id: 24,
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
        id: 25,
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
        id: 26,
        name: "Mochila Artesanal Mexicana Grande 22l Resistente C/ahorcador",
        description: `Mochila Artesanal Mexicana Grande de 22 litros, para mujeres u hombres que quieran llevar una gran cantidad de cosas, ideal para llevar a todos lados. Cabe una laptop de 17" sin problemas. Es ultra resistente hecho artesanalmente con la mejor calidad y ojo, se puede lavar en lavadora.`,
        category: ["artesania", "mochila","equipaje","bolsas"],
        brand: "Asus",
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
]