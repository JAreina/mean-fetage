function sumar(a){
    console.log("NUMERO parametros esperados: "+arguments.callee.length)
    
    console.log("parametros recibidos: " +arguments.length)
    
    var suma =0;
    for(var i =0;i< arguments.length; i++){
        suma +=arguments[i];
    }
return suma;
}


console.log(sumar(5,5));