
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
  mostrarMensaje();
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
function mostrarMensaje() {
  var mensaje = document.getElementById("mensaje");
  mensaje.innerHTML = "Editar información";
  mensaje.style.display = "block";
}
btnGuardar.addEventListener('click', (e) => {
  e.preventDefault();
  ocultarMensaje();
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
function ocultarMensaje() {
  setTimeout(function() {
    mensaje.innerHTML = "";
    mensaje.classList.remove("resaltado");
  }, 1000); // Ocultar el mensaje después de 1 segundo (1000 ms)
}
/* ---------------- METODOS PARA VISIBILIDAD DE PRODUCTOS ---------*/
let tabla = document.getElementById("tablaProductos");

let productos = JSON.parse(localStorage.getItem('productos'));

// SI esta vacio obtenemos datos del JSON

if(productos === null){// mando a llmar quiero saber que tiene

    fetch('/Pages/template/templateProductos.json')
      .then(response => response.json())      
      .then(data=>{
        console.log(data);
        // Guardamos los productos en el localStorage
        localStorage.setItem('productos', JSON.stringify(data));
        // mostrarProductos(productos);
        //Obtenemos los primeros 5 productos      
        productos = data.slice(0,5);
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
      
        <td class="td-js"><a href="/Pages/productoEspecifico/productoEspecifico.html"><img src="${producto.img}" class="img-js"></a></td>
        <td class="td-js"><a href="/Pages/productoEspecifico/productoEspecifico.html">${producto.name}</a></td>       
        <td class="td-js">$${producto.price} MXN</td>      
        <td class="td-js">
          <button class="btn btn-primary ic-Edit " type="reset" id="btn-editar-producto"  onclick="showModal('modalEditarProducto')">
              <span class="material-symbols-outlined" id="iconoEditar">edit</span>
          </button>
        </td>      
        <td class="td-js red-column">
          <input class="checked" type="checkbox" id="billing-checkbox">
        </td>
        <tbody id="tablaProductos"></tbody>                                                  

    `;       
    tabla.appendChild(fila);  
    const checkbox = fila.querySelector('.checked');
    const columnaHabilitar = fila.querySelector('.red-column');

    checkbox.addEventListener('change', (event) => {
        if (event.target.checked) {
            columnaHabilitar.classList.remove('red-column');
        } else {
            columnaHabilitar.classList.add('red-column');
        }
    });     
  });  
}

function showModal(modalId) {
  console.log("Toy vivo");
  const modal = document.getElementById(modalId);
  modal.classList.add("show");
  modal.style.display = "block";
  document.body.classList.add("modal-open");
}
 
function closeModal(modalId) {
  console.log("Toy vivo Cerrar");
  const modal = document.getElementById(modalId);
  modal.classList.remove("show");
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
}

// Evento por si se desactiva el checked









