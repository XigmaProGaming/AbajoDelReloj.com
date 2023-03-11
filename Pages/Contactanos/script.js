const validar = () =>{
  let nombre = document.getElementById("nombre").value;
  let telefono = document.getElementById("telefono").value;
  let mail = document.getElementById("mail").value;
  let mensaje = document.getElementById("mensaje").value;
  let erMail = /\w+@[a-zA-z]+\.[a-z]{2,3}/;
  let erNom = /[A-ZÑa-zñáéíóúÁÉÍÓÚ ]+/;
  if(nombre==="" || telefono==="" || mail==="" || mensaje===""){
    alert("Algunos campos estan vacios, rellenar correctamente los campos");
    return false;
  }
  console.log(telefono.length)
  
  if(telefono.length < 10 || telefono.length > 10){
    alert("Telefono incorrecto, Excribe los 10 digitos de tu telefono");
    return false;
  }

  if(!erNom.test(nombre)){
    alert("Ingresa un nombre válido, no ingreses números o carácteres especiales");
    return false;
  }
  if(!erMail.test(mail)){
      alert("Ingresa un correo electrónico válido");
      return false;
  }
}