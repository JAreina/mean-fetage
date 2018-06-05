// creada con new 

// recobe ima funcion con dos parmetros que son funciones 
let promesa = new Promise(
   function( resolve,reject){
    let ok = null;
        // ejecutar una tarea en sgundo plano
        let z = 100;
        let salida=0;
       for(;z; z-- ){
           salida++;
           if(salida == 30){
            ok = false;
            break;
           } 
       }


       
       if(ok){
           resolve(salida)
           //console.log(salida)
       }else{
           reject(salida)
       }
   }
);

// realizada la tarea saber si ha habido exito o no



promesa.then(function(salida){
   console.log(".then "+salida)
    console.log("realizada")

})
.catch(function(salida){
    rechazada(salida);
})


function rechazada(a){
    console.log(".catch "+a)
    console.log("rechazada")
}


/*
var jsonPromise = new Promise(function(resolve, reject) {
    // JSON.parse throws an error if you feed it some
    // invalid JSON, so this implicitly rejects:
    resolve(console.log("This ain't JSON"));
  });
  
  jsonPromise.then(function(data) {
    // This never happens:
    console.log("It worked!", data);
  }).catch(function(err) {
    // Instead, this happens:
    console.log("It failed!", err);
  })
  */