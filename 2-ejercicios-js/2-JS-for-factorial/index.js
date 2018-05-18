function factorial(n){
    var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total;  
}


var fac= factorial(17);   //	6227020800
console.log("FACTORIAL "+fac)


for (let i =1 ; i<=100; i++) console.log(i +" HOLA");



function contar(){

    var contador =0;
    var num;
    
  do {
    num = Math.random().toFixed(1);
        if (num <0.8) {
            contador++; console.log(num);
        }
         
    }  while(num<0.8)
    console.log("NUMERO DE VECES < 0.8 : " +contador)
}

contar();