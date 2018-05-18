

var numero1 = document.getElementById("texto1").value;
var numero2 = document.getElementById("texto2").value;


function comparaNumeros(){
    var salida;
    if(isNaN(parseFloat(numero1))){
       if(numero1 === numero2){
              
              salida = "son iguales";
              console.log(salida);
       }
       if(numero1 >numero2){
        console.log(numero1 + " es mayor")
    } else{
        console.log(numero2 + " es mayor")
    }
    }
    return salida;
}


function comparaStrings(){
   if(numero1 > numero2){
       console.log(numero1 + " es mayor")
   } else{
       console.log(numero2 + " es mayor")
   }
}