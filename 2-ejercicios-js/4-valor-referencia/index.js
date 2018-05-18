function referencia(){
    var fecha = new Date(2001,2,3);
    var fecha2 = fecha;

    console.log("fecha1 "+fecha )
    console.log("fecha2 "+fecha2 )


    fecha2.setFullYear(2000,2,5);

    console.log("fecha1 "+fecha )
    console.log("fecha2 "+fecha2 )

}
console.log("---------POR REFERENCIA ")
referencia();


// las dos variables apuntan a la misma direccion de memoria.

// cualquier cambio afecta al mismo objeto


function porValor(){
    var fecha = new Date(2001,2,3);
    var fecha2 = new Date(fecha);// CREA NUEVO OBJETO

    console.log("fecha1 "+fecha )
    console.log("fecha2 "+fecha2 )


    fecha2.setFullYear(2000,2,5);

    console.log("fecha1 "+fecha )
    console.log("fecha2 "+fecha2 )

}

console.log("POR VALOR ..........");
porValor();