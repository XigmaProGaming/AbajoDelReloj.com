console.log("hello world");


//Esto solo es para poder simular la respuesta de la API, ya que en realidad el usuario no podria estar aqui
//si su carrito de compras estuviera vacio
if(localStorage.length > 0){
    //Aqui seria un fetch a nuestra API para cada producto en especifico, asi evitamos descargar todos los articulos
    //Por el momento se trae a todo el json
    fetch('/Pages/template/templateProductos.json')
    .then(response => response.json())      
    .then(data=>{

    //Se llama a la funcion para crear los elementos en el dom
    crearElementos(data);
});
}

//Se revisa el localstorage
//Para cada uno:
//Se obtiene cada id y cantidad
//Se hace un fetch con el id para recibir imagen, nombre y precio unitario
//Se crea el contenido el DOM

//Ubicacion de donde se insertan cada articulo
const checkoutItems = document.querySelector("#checkoutItems");

function crearElementos(data){
    //Se revisa cada elemento guardado en el local storage
    for(let i=0;i<localStorage.length;i++){
        //Se obtiene el id del producto
        let product_id = (localStorage.getItem(i).split(","))[0];
        console.log("Id: "+product_id);

        /////////////////////////Aqui se haria el fetch a la api para traer solo la informacion de este producto/////////////////////////
        //Se obtiene la cantidad que se desea ordenar de este producto
        let cantidad = (localStorage.getItem(i).split(","))[1];
        console.log("Cantidad: "+ cantidad);
    
        //Creacion de los elementos
        checkoutItems.innerHTML+=`
        <!-- Row para cada articulo del carrito -->
        <div class="row gy-2">
            <div class="col-xs-12 col-sm-4 col-md-2 col-lg-2 imgColumn">
                <img src="${data[product_id-1].img[0]}" class="img-thumbnail imgCheckout" alt="...">
            </div>
            <div class="col-xs-12 col-sm-8 col-md-10 col-lg-10 infoColumn">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 ">
                        <h6>${data[product_id-1].name}</h6>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 ">
                        <div>Cantidad: ${cantidad}</div>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 ">Subtotal: $${data[product_id-1].price*cantidad}</div>
                </div>
            </div>
        </div>
        <br>
        `;
    }
}


