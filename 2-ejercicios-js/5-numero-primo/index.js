function esPrimo(){
    var primo=true;


    // 267345678
    var num = prompt("di un numero");
    //no hay numero primo qu sea mayor que la raiz cuadrada
    for (var i = 2; i < num; i++) {

        if (num % i === 0) {
          primo = false;
          break;
        }


}
        if(primo)
        {
        return('primo')
        }
        else
        {
        return('no es primo')
        }
}


var sol = esPrimo();
console.log("solucion :" +sol)