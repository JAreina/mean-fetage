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
    var patron = /^.{8}/     //     /^[A-Z]\w{7,}$/
    if(patron.test(palabra)) {
        return true;
    }else{
        return false;
    }
}

function letraMayuscula(palabra){
    //var caracter = palabra.charAt(0).charCodeAt(0);
    //console.log(typeof caracter)
    //console.log("LETRA MAYÚSCULA "+caracter)
      var patron = /^[A-Z]/;

    if(patron.test(palabra)){
        return true;
    }else{
        return false;
    }


}
    function validarCorreo(){
  
        var correo = document.getElementById('correo').value;
        var patron = /[a-z]@$/;

    if(patron.test(correo)){
        return true;
    }else{
        return false;
    }

    }


     function validaCorreo(){
         var ok = validarCorreo()
         console.log("correo valido : "+ok);
     }