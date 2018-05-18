function contarPalabras(){
    var texto = document.getElementById("texto").value;
    var divide = texto.split(' ');
    console.log(divide);
    
    var arrayAsociativo={};
    

     for (var i =0;i<divide.length; i++){
            if(arrayAsociativo[divide[i]] == undefined){
                arrayAsociativo[divide[i]]=1
            }else{
                arrayAsociativo[divide[i]] +=1;
            }
        
     }
     console.log(arrayAsociativo);
     var claves = Object.keys(arrayAsociativo);
     console.log(claves);

     console.log("********  mostrar con object.keys y for normal ......")
      for(var j =0;j<claves.length;j++){
          console.log("clave : "+ claves[j]+ " valor : "+arrayAsociativo[claves[j]])
      }
    

     mostrarObjeto(arrayAsociativo);
}

function mostrarObjeto(arrayAsociativo){  
    console.log("MOSTRAR CON UN FOR IN EL OBJETO") 
    for (var a in  arrayAsociativo){    // solo para objetos iterables por clave 
        console.log("key : " +a  + "  valor: "+arrayAsociativo[a]);
    }        
}
