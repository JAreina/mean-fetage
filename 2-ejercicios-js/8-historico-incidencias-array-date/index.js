

var arrFechas=[];
var arrIncidencias = [];

function fecha(){
    return  new Date();
}

function registrarIncidencia(){
    arrFechas.push(fecha());
    arrIncidencias.push(document.getElementById('incidencia').value);
}

function mostrarOrdenadoFechas(){
    for( var i =0; i<arrFechas.length; i++){
        console.log(arrFechas[i]+" : "+ arrIncidencias[i]);
    }

}

function ordenarFechasMayor(){
        
    var arrFechas=[
        new Date(2018,2,12),
        new Date(2015,2,12),
        new Date(2013,2,12),
    ]
    
    var arrayOrdenado =[];
          var mayor ;
        posicionDelMayor =0;
          var copia = arrFechas.slice(0);// copia el array
    for( var i =0; i<arrFechas.length; i++){
        mayor = arrFechas[posicionDelMayor].getTime();
        console.log(mayor);
        for(var j =0 ; j<copia.length; j++){
              if(copia[j].getTime()<mayor){
                  arrayOrdenado.push(copia[j]);
                //  copia.slice(1,i);
                  console.log("fecha ordenada" +"posicion :" +i + "   "+copia[j])
               posicionDelMayor=i;
              }
        }
              
    }
    console.log("NUEVO ARRAY ORDENA " +arrayOrdenado)
    return arrayOrdenado;
}


function cualEsMayor(){
    var arrFechas=[
        new Date(2018,2,12),
        new Date(2015,2,12),
        
        new Date(2016,2,12),
        new Date(1019,2,12),
        new Date(2049,2,12),
        new Date(2028,2,12)
    ]
var mayor;



    for( var i =0; i<arrFechas.length; i++){
          mayor =  arrFechas[i].getTime();
        for(var j =0 ; j<arrFechas.length; j++){
            if(arrFechas[j].getTime()  > mayor){
                mayor = arrFechas[j];
            }

        }
       
    }
    return mayor;
}

console.log("EL MAYOR: "+new Date(cualEsMayor()));



function ordenarSort(){
    arrFechas.sort((a,b)=>{
        return 
    })
}

