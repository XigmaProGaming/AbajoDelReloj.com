console.log("hello confirmacion");


//Esto solo es para poder simular la respuesta de la API, ya que en realidad el usuario no podria estar aqui
//si su carrito de compras estuviera vacio
if(localStorage.length > 0){
    //Aqui seria un fetch a nuestra API para cada producto en especifico, asi evitamos descargar todos los articulos
    //Por el momento se trae a todo el json
    fetch('../template/templateProductos.json')
    .then(response => response.json())      
    .then(data=>{

    //Se llama a la funcion para crear los elementos en el dom
    crearElementos(data);
});
}

let divProductos = document.getElementById("productos");
const precioTotal = document.querySelector("#precioTotal");
let precioTotalAcumulado = 0;

function crearElementos(data){
  //Se revisa cada elemento guardado en el local storage
  for(let i=0;i<localStorage.length;i++){
      //Se obtiene el id del producto
      let product_id = (localStorage.getItem(i).split(","))[0];
      //console.log("Id: "+product_id);

      /////////////////////////Aqui se haria el fetch a la api para traer solo la informacion de este producto/////////////////////////
      //Se obtiene la cantidad que se desea ordenar de este producto
      let cantidad = (localStorage.getItem(i).split(","))[1];
      //console.log("Cantidad: "+ cantidad);
  
      precioTotalAcumulado += data[product_id-1].price*cantidad;
      //Creacion de los elementos
      divProductos.innerHTML+=`
      <!-- Row para cada articulo del carrito -->
      <div class="row gy-2">
          <div class="col-xl-3 col-sm-12 col-md-6">
            <img src="${data[product_id-1].img[0]}" class="imagen" id="imagen" alt="Imagen del producto">
          </div>
        <div class="col-xl-9 col-sm-12 col-md-6 divNombre">
          <h4 id="nombre">${data[product_id-1].name}</h4>
        </div>
      </div>
      <br>
      `;
  }
  precioTotal.innerHTML=`<h6>Pago total: $${(precioTotalAcumulado).toLocaleString()}</h6>`;
  localStorage.clear();
}



/*
const imprimirProductos = () =>{
  const producto = [];

  for(let i = 0; i < 2 ; i++){
    producto[i] = document.createElement("div") 
    producto[i].className = "row";
    producto[i].innerHTML = `
    <div class="col-xl-3 col-sm-12 col-md-6">
      <img src="${data[product_id-1].img[0]}" class="imagen" id="imagen" alt="Imagen del producto">
    </div>
    <div class="col-xl-9 col-sm-12 col-md-6 divNombre">
      <h4 id="nombre">${data[product_id-1].name}</h4>
    </div>`;
  
    divProductos.appendChild(producto[i]);
  }
}

imprimirProductos();
*/