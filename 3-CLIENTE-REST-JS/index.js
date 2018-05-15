window.onload = obtenerPeliculas;




function eventos(){
    let a = document.getElementsByTagName('input');
    console.log(a);

     let metodos = [
        insertar,actualizar
     ]



    for (let i = 0; i < a.length; i++) {
        
          console.log(metodos[i]);

        let nodo = a[i];
        let idd = nodo.id;
        let num = idd.substring(2);
        console.log("NUMERO ID" +num)
        console.log(nodo)
           if(parseInt(num) === i)
        nodo.addEventListener('click',metodos[i]);
                
    }
}

function even(){
    let insert= document.getElementById('id1').onclick = insertar;
}




function obtenerPeliculas(){
  

    even();
    let xmlHttp = new XMLHttpRequest();
    
      xmlHttp.onreadystatechange = function(){
        console.log(xmlHttp.status)
        console.log(xmlHttp.readyState)
              // status 0 creado
              //         1 open
              //          2 enviado
              //          3 comienza a recibir respuesta
              //           4 respuesta completa

          if(this.status == 200 &&  this.readyState  == 4){


               
               console.log(xmlHttp.status)
               let data = JSON.parse(xmlHttp.responseText);
               console.log(data)
               pintarTabla(data);
          }else{
             procesarERROR(xmlHttp)
          }
      }



    xmlHttp.open("get","http://localhost:8080/Ej01_REST/servicios/peliculas",true);
    xmlHttp.send();

 
   
}


function pintarTabla(datos){
    document.getElementById('tablaPeliculas').innerHTML="";

    for(var i = 0; i<datos.length; i++){
        document.getElementById('tablaPeliculas').innerHTML += `
    
        <tr><td>${datos[i].titulo}</td>
        <td>${datos[i].director}</td>
        <td>${datos[i].genero}</td>
        <td>${datos[i].year}</td>
        
        </tr>`;
    }
    
}



function procesarERROR(err){
      if(err.status == 404){
           console.log("NO ENCONTRADO")
      }
}



function insertar(){
        let titulo = document.getElementById("titulo").value;
        let director = document.getElementById("director").value;
        let genero = document.getElementById("genero").value;
        let year = document.getElementById("year").value;

        let peli = {
            "titulo": titulo,
            "director": director,
            "genero": genero,
            "year": year

        }
        let xmlHttp = new XMLHttpRequest();
       
        let data = JSON.stringify(peli);
        console.log(data)

        xmlHttp.onreadystatechange = function(){
          console.log(xmlHttp.status)
          console.log(xmlHttp.readyState)
            
            if(this.status == 200 &&  this.readyState  == 4){
  
  
                 
                 console.log(xmlHttp.status)
                 obtenerPeliculas();
              
               
            }else{
               procesarERROR(xmlHttp)
            }
        }
  
  
  
      xmlHttp.open("post","http://localhost:8080/Ej01_REST/servicios/peliculas",true);
      xmlHttp.setRequestHeader("Content-type", "application/json");
      xmlHttp.send(data);
  
   

}

function actualizar(){}