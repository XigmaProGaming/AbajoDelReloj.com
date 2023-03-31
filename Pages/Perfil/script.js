
const btnEditar = document.getElementById('btn-editar-contrasena');
const btnGuardar = document.getElementById('btn-guardar');

let valorOriginalNombre;
let valorOriginalEmail;
let valorOriginalApellido;
let valorOriginalTelefono;
let valorOriginalContasenaC;

btnEditar.addEventListener('click', (e) => {
  e.preventDefault();
  console.log("toy vivo");
  const inputNombre = document.getElementById('inputNombre');
  const inputApellido = document.getElementById('inputApellido');
  const inputTelefono = document.getElementById('inputTel');
  const inputContrasena = document.getElementById('inputContrasena');
  const btnEditarcontrasena = document.getElementById('btn-editar-contrasena');

  
  console.log(inputContrasena.value);

  valorOriginalNombre = inputNombre.value;
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
  inputEmail.readOnly = true;
  console.log(inputContrasena.value);
  inputContrasena.readOnly = true;
  btnEditarcontrasena.innerHTML = "Guardar";
  var newValue = inputContrasena.value;

  if (newValue !== originalValue || valorOriginalTelefono !== inputTelefono.value ||  valorOriginalNombre !== inputNombre.value || valorOriginalApellido !== inputApellido) {
    alert("Guardado con exito");
    // Aquí podrías mostrar una confirmación al usuario de que los cambios se han guardado
  }
});

/* ---------------- METODOS PARA VISIBILIDAD DE PRODUCTOS ---------*/
$(document).ready(function() {
  $('#visibility').change(function() {
      if ($(this).is(':checked')) {
          $('#product-container').addClass('grayed-out');
      } else {
          $('#product-container').removeClass('grayed-out');
      }
  });
});



