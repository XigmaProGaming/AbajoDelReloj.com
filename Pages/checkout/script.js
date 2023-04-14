console.log("hello world");


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

//Se revisa el localstorage
//Para cada uno:
//Se obtiene cada id y cantidad
//Se hace un fetch con el id para recibir imagen, nombre y precio unitario
//Se crea el contenido el DOM

//Ubicacion de donde se insertan cada articulo
const checkoutItems = document.querySelector("#checkoutItems");
const precioTotal = document.querySelector("#precioTotal");
let precioTotalAcumulado = 0;

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
    
        precioTotalAcumulado += data[product_id-1].price*cantidad;
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
                    <div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 ">Subtotal: $${(data[product_id-1].price*cantidad).toLocaleString()}</div>
                </div>
            </div>
        </div>
        <br>
        `;
    }
    precioTotal.innerHTML=`<h6>Precio total: $${(precioTotalAcumulado).toLocaleString()}</h6>`;
}


//Validacion de entradas para la direccion
const botonValidar = document.querySelector("#botonValidar");
botonValidar.addEventListener("click",(e)=>{
  e.preventDefault();
  validar();
})

const validar = () =>{


    /* 
    
    calle - que no este vacia
    numeros - numeros y letras
    colonia - numeros y letras
    cp - numeros de 5 digitos
    ciudad - letras, erText
    telefono - exactamente 10 digitos
    
    */

    let calle = document.querySelector("#inputStreet").value;
    let numExt = document.querySelector("#inputStreetNumberExt").value;
    let numInt = document.querySelector("#inputStreetNumberInt").value;
    let colonia = document.querySelector("#inputArea").value;
    let codigoPostal = document.querySelector("#inputAreaCode").value;
    let ciudad = document.querySelector("#inputCity").value;
    let inputAlcaldia = document.querySelector("#inputAlcaldia").value;
    let tel = document.getElementById("inputTelefono").value;
    let inputInstructions = document.getElementById("inputInstructions").value;

  
    let erColonia = /[a-zA-Z0-9]/;
    let erNumero = /[a-zA-Z0-9]/;
    let erCodigoPostal = /[0-9]{5}/;
    let erText = /[ A-Z Ññ a-z á é í ó ú Á É Í Ó Ú]+/;
  
    if(calle=="" || numExt=="" || colonia=="" || codigoPostal=="" || ciudad=="" || tel=="" ){
      alert("Algunos campos obligatorios estan vacios!")
    }
    else if(!erNumero.test(numExt)){
      alert("Ingresa un número exterior válido");
    }
    else if(!erColonia.test(colonia)){
      alert("Ingresa una colonia válida, no ingreses carácteres especiales");
    }
    else if(!erCodigoPostal.test(codigoPostal)||codigoPostal.length!=5){
      alert("El codigo postal debe estar conformado por un número de 5 digitos.");
    }
    else if(!erText.test(ciudad)){
      alert("Ingresa una ciudad valida, no ingreses números o carácteres especiales");
    }
    else if(tel.length< 10 || tel.length > 10){
      alert("El número de telefono tiene que tener 10 dígitos");
    }
    else{
      alert("Completaste correctamente los campos");
      //Hacer fetch post  de la informacion

      let informacionPedido = {
        order_Amount: 158.00,
        order_Ship_Name: "Rafael Encinas",
        order_Ship_Street: calle,
        order_Number_Outdoor: numExt,
        order_Number_Interior: numInt,
        order_Colonia: colonia,
        order_Zip: parseInt(codigoPostal),
        order_Alcaldia: inputAlcaldia,
        order_Phone: tel,
        order_Instruction: inputInstructions,
        products_idproducts: 19
      }
      console.log(JSON.stringify(informacionPedido))
      registrarPedido(informacionPedido);
    }
    //console.log(calle,numExt,numInt,colonia,codigoPostal,ciudad,tel)
  }


  function registrarPedido(informacionPedido){
    fetch("http://localhost:8080/abdr/ordenes/",{ //hago la conexion a la URL
      
    //Especifico el tipo de solicitud que manejare
    method: "POST",
    headers: {
        "Content-Type" : "application/json",
    },
    body: JSON.stringify(informacionPedido), //Pasamos la constante definida anteriormente como cuerpo de la solicitud
    })
    .then((response) => response.text())
    .then((data)=>{
        console.log("Usuario guardado correctamente", data)
        window.location.replace("../confirmacionDeCompra/confirmacionDeCompra.html");;
    })
    .catch((error)=>{
        console.log("No pudimos registrar al usuario", error);
    });
  }
