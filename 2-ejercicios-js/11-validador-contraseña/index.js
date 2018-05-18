function validarPassword(){
  var password = document.getElementById('password').value;

  if(comprobarLongitud(password) && letraMayuscula(password)){
      console.log("CONTRASEÑA VÁLIDA");
  }else{
      console.log("contraseña no válida")
  }
}


function comprobarLongitud(palabra){
    console.log(palabra.length +"longitud password")
    if(palabra.length >=8) {
        return true;
    }else{
        return false;
    }
}

function letraMayuscula(palabra){
    var caracter = palabra.charAt(0).charCodeAt(0);
    console.log(typeof caracter)
    console.log("LETRA MAYÚSCULA "+caracter)
    if(caracter >= 65 && caracter <= 90){
        return true;
    }else{
        return false;
    }
}