

export class Products {
    constructor(id, quantity, name, description, price, stock, img) {
        this.id = id;
        this.quantity = quantity;
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.img = img;
    }
}

export const productsList = [
    new Products(1, 1, 'Camisa', 'Camisa de algodón para hombre. Esta camisa es una prenda de vestir masculina hecha de algodón. El algodón es un material suave, cómodo y transpirable que se utiliza comúnmente en la ropa. Esta camisa está diseñada para hombres y se ajusta al cuerpo. Es de color no especificado y cuenta con botones en la parte delantera.', 29.99, 50, 'https://dsnegsjxz63ti.cloudfront.net/images/pg/g_32620d0afe85ba7.jpg'),
    new Products(2, 1, 'Pantalón', 'Pantalón de mezclilla para mujer. Este pantalón es una prenda de vestir femenina hecha de mezclilla. La mezclilla es un material resistente y duradero que se utiliza comúnmente en la ropa de trabajo y de ocio. Este pantalón está diseñado para mujeres y tiene un corte ajustado a la cintura y las piernas. Es de color no especificado y cuenta con un botón y una cremallera en la parte delantera. ', 39.99, 20, 'https://ss545.liverpool.com.mx/sm/1125228841.jpg'),
    new Products(3, 1, 'Zapatos', 'Zapatos deportivos para niños. Estos zapatos son calzado infantil diseñado para actividades deportivas. Están hechos con materiales duraderos y resistentes, tienen una suela antideslizante y son cómodos de usar durante la práctica deportiva. Están disponibles en un tamaño adecuado para niños, pero se desconoce el género al que van dirigidos.', 49.99, 10, 'https://cdn1.coppel.com/images/catalog/pr/8350362-1.jpg'),
    new Products(4, 1, 'Mochila', 'Mochila escolar para adolescentes. Esta mochila es un accesorio escolar diseñado para adolescentes. Tiene varios compartimentos y está hecha de materiales duraderos para soportar el peso de los libros y otros elementos escolares. Tiene un diseño juvenil y moderno, puede ser utilizada para la escuela o para actividades al aire libre.', 19.99, 30, 'https://m.media-amazon.com/images/I/61U34PbUPkL._AC_SX569_.jpg'),
    new Products(5, 1, 'Reloj', 'Reloj de pulsera para hombre. Este reloj es un accesorio masculino que se lleva en la muñeca. Tiene un diseño elegante y sofisticado, ideal para vestimenta formal. Cuenta con una correa ajustable de tamaño y una esfera con números para indicar la hora.', 99.99, 15, 'https://http2.mlstatic.com/D_NQ_NP_669900-MLM45406910225_032021-O.jpg'),
    new Products(6, 1, 'Lentes de sol', 'Lentes de sol para mujer. Estos lentes son un accesorio femenino diseñado para proteger los ojos del sol y los rayos UV. Están hechos de materiales resistentes y tienen lentes oscuros que reducen el brillo del sol. Tienen un diseño moderno y elegante, adecuado para cualquier actividad al aire libre en días soleados.', 29.99, 5, 'https://img.ltwebstatic.com/images3_pi/2022/06/06/16545050199f4a2ad7ff728ffd942ad8538e261044_thumbnail_600x.webp'),
    new Products(7, 1, 'Botella de agua', 'Botella de agua reutilizable. Esta botella es un recipiente para almacenar líquidos que puede ser reutilizado varias veces. Está hecha de materiales resistentes y no tóxicos. Es ideal para llevar al trabajo, al gimnasio o para actividades al aire libre y ayuda a reducir la cantidad de residuos plásticos.', 9.99, 40, 'https://m.media-amazon.com/images/I/61n-8ingqEL._AC_SY355_.jpg'),
    new Products(8, 1, 'Toalla de playa', 'Toalla de playa grande y suave. Esta toalla es un accesorio para la playa diseñado para secarse después de nadar. Es grande y suave, está hecha de materiales absorbentes que permiten secarse rápidamente. Tiene un diseño llamativo y colorido, adecuado para cualquier actividad de playa o al aire libre.', 24.99, 25, 'https://m.media-amazon.com/images/I/81g7WVGxDHL._AC_SX466_.jpg'),
    new Products(9, 1, 'Auriculares', 'Auriculares inalámbricos con cancelación de ruido. Estos auriculares ofrecen una experiencia auditiva de alta calidad sin necesidad de cables, gracias a su tecnología inalámbrica. Además, cuentan con cancelación de ruido, lo que reduce significativamente el ruido ambiental y te permite sumergirte en tu música o llamada sin distracciones externas.', 79.99, 10, 'https://www.steren.com.mx/media/catalog/product/cache/b69086f136192bea7a4d681a8eaf533d/image/21867108a/audifonos-bluetooth-con-cancelacion-de-ruido-negros.jpg'),
    new Products(10, 1, 'Pulsera', 'Pulsera de plata con piedras preciosas. Esta pulsera está elaborada con plata de alta calidad y cuenta con piedras preciosas incrustadas en su diseño, lo que la hace un accesorio elegante y sofisticado. Perfecta para darle un toque de glamour a cualquier atuendo, esta pulsera es una excelente adición a cualquier colección de joyería.', 149.99, 5, 'https://http2.mlstatic.com/D_NQ_NP_969203-MLM31700917903_082019-O.webp')
];
