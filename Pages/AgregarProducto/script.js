
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
  
    if(!erText.test(nombre)){
      div.className="alert alert-primary";
      div.role="alert";
      div.innerHTML = `Nombre inválido`;
    }
  
    if(!erText.test(categoria)){
      div.className="alert alert-primary";
      div.role="alert";
      div.innerHTML = `Ingresa una categoría válida, no ingreses números o carácteres especiales`;
    }
  
    if(!erText.test(marca)){
      div.className="alert alert-primary";
      div.role="alert";
      div.innerHTML = `Ingresa una marca válida`;
    }
  
    if(precio<1){
      div.className="alert alert-primary";
      div.role="alert";
      div.innerHTML = `El precio no puede ser menor a 1`;
    }
 
    if(cantidad<1){
      div.className="alert alert-primary";
      div.role="alert";
      div.innerHTML = `La cantidad no puede ser menor a 1`;
    }  
  }
}