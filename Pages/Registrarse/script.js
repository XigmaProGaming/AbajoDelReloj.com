var usuariosNuevos = [];

const validar = () =>{

  let nombre = document.getElementById("inputName").value;
  let apellidos = document.getElementById("inputApellidos").value;
  let username = document.getElementById("inputUsername").value; 
  let mail  = document.getElementById("inputMail").value;
  let password = document.getElementById("inputPassword").value;
  let tel = document.getElementById("inputTelefono").value;

  let erCorreo = /\w+@[a-zA-z]+\.[a-z]{2,3}/;
  let erUsuario = /[a-zA-Z0-9]{5,20}/;
  let erPassword = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{5,10}/;
  let erText = /[ A-Z Ññ a-z á é í ó ú Á É Í Ó Ú]+/;

  if(nombre=="" || apellidos=="" || username=="" || mail=="" || password=="" || tel=="" ){
    alert("Algunos campos obligatorios estan vacios!")
  }
  else if(!erText.test(nombre)){
    alert("Ingresa un nombre válido, no ingreses números o carácteres especiales");
  }
  else if(!erText.test(apellidos)){
    alert("Ingresa un apellido válido, no ingreses números o carácteres especiales");
  }
  else if(!erUsuario.test(username)){
    alert("Ingresa un usuario válido, Minimo 5 letras y numeros");
  }
  else if(!erCorreo.test(mail)){
    alert("Email  inválido");
  }
  else if(!erPassword.test(password)){
    alert("La contraseña mínima de 5 carácteres, 1 mayúscula, 1 minúscula, 1 carácter especial y 1 número");
  }
  else if(tel.length< 10 || tel.length > 10){
    alert("El número de telefono tiene que tener 10 dígitos");
  }
  else{
    alert("Completaste correctamente los campos");
    
    let nuevoUsuario = {
        nombre: nombre,
        apellidos: apellidos,
        username: username,
        mail: mail,
        password: password,
        tel: tel
    };
    console.log(nuevoUsuario); 
    usuariosNuevos.push(nuevoUsuario);    
  }
}