
const btnEditarcontrasena = document.getElementById('btn-editar-contrasena');
let valorOriginalNombre;
let valorOriginalEmail;
let valorOriginalApellido;
let valorOriginalTelefono;
let valorOriginalContasenaC;

btnEditarcontrasena.addEventListener('click', (e) => {
  e.preventDefault();
  console.log("toy vivo");
  const inputNombre = document.getElementById('inputNombre');
  const inputApellido = document.getElementById('inputApellido');
  const inputTelefono = document.getElementById('inputTel');
  const inputContrasena = document.getElementById('inputContrasena');
  const btnEditarcontrasena = document.getElementById('btn-editar-contrasena');

  if (inputContrasena.readOnly == true) {
    console.log(inputContrasena.value);

    valorOriginalNombre = inputNombre.value;
    inputNombre.readOnly = false;

    valorOriginalApellido = inputApellido.value;
    inputApellido.readOnly = false;

    valorOriginalTelefono = inputTelefono.value;
    inputTelefono.readOnly = false;


    originalValue = inputContrasena.value;
    inputContrasena.readOnly = false;


    

    btnEditarcontrasena.innerHTML = "Guardar"; // Alert de gaurdado con exito
  } else {

    inputNombre.readOnly = true;

    inputEmail.readOnly = true;


    console.log(inputContrasena.value);
    inputContrasena.readOnly = true;

    btnEditarcontrasena.innerHTML = "Editar";

    var newValue = inputContrasena.value;

    // Aquí podrías guardar los cambios en tu base de datos

    if (newValue !== originalValue) {
      alert("Guardado con exito");
      // Aquí podrías mostrar una confirmación al usuario de que los cambios se han guardado
    }
  }
});
var originalValue;

