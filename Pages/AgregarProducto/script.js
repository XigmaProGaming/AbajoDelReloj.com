var articuloEnVenta = [];

var cargaImagenes = function(event) {
  // funcion utilizada para insertar en el html las imagenes cargadas en el input files
  var output = document.getElementById('previewImagenes'); // posicion o elemento div para ingresar elementos hijos

  if(event.target.files.length != 1){ //  Validacion por si son mas de 1 imagen
    for(let i=0; i < event.target.files.length; i++){
      let element = document.createElement("img");
//      element.id= `img${i}`
      element.className = "InputImagenes"; // Clase del css
      element.src = URL.createObjectURL(event.target.files[i]); // transformar la ubicacion local de la imagen
      output.appendChild(element);                              //  a una url utilizable
    }
  }
  else{ //  Si solo se inserto 1 imagen en el input
    let element = document.createElement("img");
      element.className = "InputImagenes";
      element.src = URL.createObjectURL(event.target.files[0]);
      output.appendChild(element);
  }
  
  output.onload = function() {  //  Librerar espacio de memoria que se utilizo para las imagenes
    URL.revokeObjectURL(output.src) // Liberacion de memoria
  }
}

const validar = () =>{

  let nombre = document.getElementById("inputName").value;
  let descripcion = document.getElementById("inputDescription").value; 
  let categoria  = document.getElementById("inputCategory").value;
  let marca = document.getElementById("inputBrand").value;
  let precio = document.getElementById("inputPrecio").value;
  let cantidad = document.getElementById("inputInventario").value; 
  let estado = document.getElementById("inputEstado").value; 
  let sku = document.getElementById("inputSKU").value; 
  
  let div = document.getElementById('alert');
  
  let erText = /[ A-Z Ññ a-z á é í ó ú Á É Í Ó Ú 0-9 ]+/;

  if(div.innerHTML != ""){
    div.className="";
    div.role="";
    div.innerHTML = ``;
  }
  else{

    if(nombre=="" || descripcion=="" || categoria=="" || marca=="" || precio=="" || cantidad=="" ){
      div.className="alert alert-primary";
      div.role="alert";
      div.innerHTML = `Algunos campos obligatorios estan vacios!`;
    }
    else if(!erText.test(nombre)){
      div.className="alert alert-primary";
      div.role="alert";
      div.innerHTML = `Nombre inválido`;
    }
    else if(categoria=="Seleccione una categoria"){
      div.className="alert alert-primary";
      div.role="alert";
      div.innerHTML = `Por favor seleccione una categoria`;
    }
    else if(!erText.test(marca)){
      div.className="alert alert-primary";
      div.role="alert";
      div.innerHTML = `Ingresa una marca válida`;
    }
    else if(precio<1){
      div.className="alert alert-primary";
      div.role="alert";
      div.innerHTML = `El precio no puede ser menor a 1`;
    }
    else if(cantidad<1){
      div.className="alert alert-primary";
      div.role="alert";
      div.innerHTML = `La cantidad no puede ser menor a 1`;
    }
    else{
      //Ya que se comprueben todos los campos, aqui se hace el fetch post
      alert("Completaste correctamente los campos");
      
      //Modificar date, y seller_idseller
      let nuevaPublicacion = {
        name: nombre,
        description: descripcion,
        brand: marca,
        price: precio,
        publication_Date: "2023-04-13",
        inventory: cantidad,
        state: estado,
        sku: sku,
        visibility: 1,
        productcategories_id_category: categoria,
        seller_id_seller: 4,
      };
      console.log(nuevaPublicacion); 
      agregarProducto(nuevaPublicacion)
      articuloEnVenta.push(nuevaPublicacion);  
    }
  }
  //Para obtener los nombres de las imagenes se tomara el valor del input,
  //se separara por comas y se enviara cada uno por post a la tabla de imagenes
  
  let nombreImagenes = document.getElementById("inputImgNames").value;
  let nombreImagenesArr = nombreImagenes.split(" ");
  for(let i=0; i<nombreImagenesArr.length ; i++){

    //Aqui se toma el id del ultimo producto creado
    let nuevaImagen = {
      image_Name: nombreImagenesArr[i],
      products_idproducts: 16
    }

    console.log(nombreImagenesArr[i]);
      fetch("http://localhost:8080/abdr/imagenes/",{ //hago la conexion a la URL
      
    //Especifico el tipo de solicitud que manejare
    method: "POST",
    headers: {
        "Content-Type" : "application/json",
    },
    body: JSON.stringify(nuevaImagen), //Pasamos la constante definida anteriormente como cuerpo de la solicitud
    })
    .then((response) => response.text())
    .then((data)=>{
        console.log("Producto registrado correctamente", data);
    })
    .catch((error)=>{
        console.log("No pudimos registrar el producto", error);
    });

  }
}

function agregarProducto(nuevaPublicacion){
  fetch("http://localhost:8080/abdr/productos/",{ //hago la conexion a la URL
    
  //Especifico el tipo de solicitud que manejare
  method: "POST",
  headers: {
      "Content-Type" : "application/json",
  },
  body: JSON.stringify(nuevaPublicacion), //Pasamos la constante definida anteriormente como cuerpo de la solicitud
  })
  .then((response) => response.text())
  .then((data)=>{
      console.log("Producto registrado correctamente", data);
  })
  .catch((error)=>{
      console.log("No pudimos registrar el producto", error);
  });
}
