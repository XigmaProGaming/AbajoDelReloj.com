const validar = () =>{

  // Imagen

  // Nombre
  // Descripcion  Texto + num
  // Categoria
  // Marca

  // Estado     Este seleccionada una opcion

  // Precio       n > 0
  // Cantidad     n > 0

  let nombre = document.getElementById("inputName").value;
  let descripcion = document.getElementById("inputDescription").value; 
  let categoria  = document.getElementById("inputCategory").value;
  let marca = document.getElementById("inputBrand").value;
  let precio = document.getElementById("inputPrecio").value;
  let cantidad = document.getElementById("inputInventario").value; 
  let imagenes = document.getElementById("inputImagenes").value;

  console.log(imagenes);
  let div = document.getElementById('alert');
  let divimg = document.getElementById('img');
  
  // const archivos = imagenes.files;
  // // Si no hay archivos salimos de la función y quitamos la imagen

  // // Ahora tomamos el primer archivo, el cual vamos a previsualizar
  // const primerArchivo = archivos[0];
  // // Lo convertimos a un objeto de tipo objectURL
  // const objectURL = URL.createObjectURL(primerArchivo);
  // // Y a la fuente de la imagen le ponemos el objectURL
  // divimg.src = objectURL;

  // divimg.innerHTML = '<embed src="'+imagenes.value+'" width="100" height="100" />';
  divimg.width="100"; 
  divimg.height="100";
  divimg.src = `${imagenes.value}`;

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