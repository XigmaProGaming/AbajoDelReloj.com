
const btnEditar = document.getElementById('btn-editar-contrasena');
const btnGuardar = document.getElementById('btn-guardar');
const inputNombre = document.getElementById('inputNombre');
const inputApellido = document.getElementById('inputApellido');
const inputTelefono = document.getElementById('inputTel');
const inputContrasena = document.getElementById('inputContrasena');
const btnEditarcontrasena = document.getElementById('btn-editar-contrasena');

let valorOriginalNombre;
let valorOriginalEmail;
let valorOriginalApellido;
let valorOriginalTelefono;
let valorOriginalContasenaC;

btnEditar.addEventListener('click', (e) => {
  e.preventDefault();
  console.log("toy vivo");  
  
  // console.log(inputContrasena.value);
  valorOriginalNombre = inputNombre.value; // guardamos los nuevos valores
  inputNombre.readOnly = false;
  valorOriginalApellido = inputApellido.value;
  inputApellido.readOnly = false;
  valorOriginalTelefono = inputTelefono.value;
  inputTelefono.readOnly = false;
  originalValue = inputContrasena.value;
  inputContrasena.readOnly = false;

});

btnGuardar.addEventListener('click', (e) => {
  e.preventDefault();
  inputNombre.readOnly = true;
  inputApellido.readOnly = true;
  inputTelefono.readOnly = true;
  inputEmail.readOnly = true; 
  inputContrasena.readOnly = true;

  // console.log(inputContrasena.value);
 
  //btnEditarcontrasena.innerHTML = "Guardar";
  var newValue = inputContrasena.value;

  // if ( (newValue !== originalValue) || (valorOriginalTelefono !== inputTelefono.value) ||  valorOriginalNombre !== inputNombre.value || valorOriginalApellido !== inputApellido) {
  //   // Aquí podrías mostrar una confirmación al usuario de que los cambios se han guardado
  // }
});

/* ---------------- METODOS PARA VISIBILIDAD DE PRODUCTOS ---------*/
let tabla = document.getElementById("tablaProductos");

let productos = JSON.parse(localStorage.getItem('productos'));

// SI esta vacio obtenemos datos del JSON
if(productos != null){// mando a llmar quiero saber que tiene
    fetch('./vendedor-test/vendedor.json')
      .then(response => response.json())      
      .then(data=>{
        console.log(data);
        // Guardamos los productos en el localStorage
        localStorage.setItem('productos', JSON.stringify(data));
        // mostrarProductos(productos);
        //Obtenemos los primeros 5 productos      
        productos = data.slice(0,3);
        // Mostramos los datos en la tabla
        mostrarProductos(productos);
       
      })
      .catch(function(error){
        console.error('Error al realizar la peticion: ', error);
      });
}else{
    // si hay productos en el almacenamiento local, obtener los primeros 5 productos
    const primerosProductos = productos.slice(0, 5);
    // muestra los productos en la tabla
    mostrarProductos(primerosProductos);
}

function mostrarProductos(productos){
  productos.forEach(producto => {
    let fila = document.createElement("tr");
  
    // Aqui agregamos los elementos de texto
    fila.innerHTML = `
      
        <td hidden>${producto.id}</td>
      
        <td class="td-js"><a href="/Pages/productoEspecifico/productoEspecifico.html"><img src="${producto.rutaImagen}" class="img-js"></a></td>
        <td><a href="/Pages/productoEspecifico/productoEspecifico.html">${producto.nombre}</a></td> 
      
        <td>${producto.precio}</td>
      <td><button class="btn btn-warning btn-sm editar" data-id="${producto.id}">Editar</button></td>
      <td><button class="btn btn-danger btn-sm eliminar" data-id="${producto.id}">Eliminar</button></td>
    `;
    tabla.appendChild(fila);
    
    // Imagen del producto.
    // let celdaImagen = fila.insertCell(1);
    // let imagen = document.createElement("img");
    // imagen.src = producto.rutaImagen;
    // imagen.width = 100;
    // celdaImagen.appendChild(imagen);
    
  });
}






