
const btnEditarcontrasena = document.getElementById('btn-editar-contrasena');
let valorOriginalNombre;
let valorOriginalEmail;




btnEditarcontrasena.addEventListener('click', (e) => {
  e.preventDefault();
  console.log("toy vivo");
  const inputNombre = document.getElementById('inputNombre');
  const inputEmail = document.getElementById('inputEmail');
  //const inputUniversidad = document.getElementById('inputUniversidad');
  const inputContrasena = document.getElementById('inputContrasena');
  const btnEditarcontrasena = document.getElementById('btn-editar-contrasena');

  if (inputContrasena.readOnly == true) {
    console.log(inputContrasena.value);
    valorOriginalNombre = inputNombre.value;
    inputNombre.readOnly = false;

    valorOriginalEmail = inputEmail.value;
    inputEmail.readOnly = false;

    // valorOriginalUniversidad = inputUniversidad.value;
    // inputUniversidad.readOnly = false;


    originalValue = inputContrasena.value;
    inputContrasena.readOnly = false;
    //inputContrasena.style.backgroundColor = "#fff";

    btnEditarcontrasena.innerHTML = "Guardar";
  } else {

    inputNombre.readOnly = true;

    inputEmail.readOnly = true;


    console.log(inputContrasena.value);
    inputContrasena.readOnly = true;
    //inputContrasena.style.backgroundColor = "#eee";
    btnEditarcontrasena.innerHTML = "Editar";

    var newValue = inputContrasena.value;

    // Aquí podrías guardar los cambios en tu base de datos

    if (newValue !== originalValue) {
      // Aquí podrías mostrar una confirmación al usuario de que los cambios se han guardado
    }
  }
});
var originalValue;

