const validar = () =>{

  let mail  = document.getElementById("inputMail").value; //2 localS para guarda mail, valor
  let password = document.getElementById("inputPassword").value; // guardar password-valor

  let erCorreo = /\w+@[a-zA-z]+\.[a-z]{2,3}/;
  let erPassword = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{5,10}/;

  if(mail=="" || password==""){
    alert("Algunos campos obligatorios estan vacios!")
  }
  else if(!erCorreo.test(mail)){
    alert("Email  inválido");
  }
  else if(!erPassword.test(password)){
    alert("La contraseña mínima de 5 carácteres, 1 mayúscula, 1 minúscula, 1 carácter especial y 1 número");
  }
  else{
    var usuario = {
      mail: mail,
      password: password
    };
    // convertimos el objeto JSON en una cadena de texto en formato JSON
    var usuarioJSON = JSON.stringify(usuario);

    // almacenamos la cadena de texto en el almacenamiento local
    localStorage.setItem("usuario",usuarioJSON);
    //alert("Completaste correctamente los campos");// campos ready 
  }
  console.log(usuario);
}