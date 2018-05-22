const fs = require('fs');
const http = require('http');
const peliculas = require('./modelo.js');

let servidor = http.createServer(cb);
console.log("ir a : http://localhost:3999");
servidor.listen(3999);


function cb (req,res){
    //console.log(req)  
    
    //http://localhost:9999/index.html

    // http://localhost:9999/datos.txt
    
    let metodo = req.method.toUpperCase();
    let recurso = req.url;
    console.log(recurso)
    console.log(metodo)

// GET peliculas
// GET peliculas/{id}
// PUT peliculas        
//POST peliculas
// DELETE peliculas/{id}

let num =0;
if(metodo == 'GET' && recurso == '/peliculas'){
     //
   
    listarPeliculas(req,res);
}else if(metodo == 'GET' && recurso == '/peliculas/id'){

    buscarPelicula(req,res);

}else if(metodo == 'POST' && recurso == '/peliculas'){
       insertarPelicula(req,res);

}else if(metodo == 'PUT' && recurso == '/peliculas'){


}else if(metodo == 'DELETE' && recurso == '/peliculas'){

}else{
    console.log("**************************************");
    leerRecursoEstatico(req,res);
    
}

   


}

/*****************LOGICA CONTROL SERVICIO REST 
 * ************************************************* */

/* 
1- extrarer de la peticion la informacion necesaria
2. transformar esa informaión en algo que entienda la lógica de negocio
3. llamar a la función de negocio adecuada
4. si la lógica de negoci devuelve algo transformarla
 en lo que espera el cliente y colocarlo en la vista
5. SI DE PRODUCE ERROR DEVOLVER MENSAJE CON HTTP ADECUADO


*/



function listarPeliculas(req,res){
    console.log("listarpeliculas");
    let pelis = JSON.stringify(peliculas.listarPeliculas());

   // console.log(req);
    res.writeHead(200,{ 'content-type': 'application/json' })
   // res.writeHead("Access-Control-Allow-Origin", "*");
    res.end(pelis);
}

function buscarPelicula(req,res){
      
    console.log(req.url);
}



/**
 * INSERTAR UNA PELICULA 
 * @param {*} req 
 * @param {*} res 
 */
function insertarPelicula(req,res){
    console.log("INSERTAR PELIUCLA SERVIDOR ");
    
    //let peli = JSON.parse(req.body);
  



   req.on('data',function(body){
       console.log(body.toString());
       let pelicula = JSON.parse(body.toString());
       let mensaje = peliculas.insertarPelicula(pelicula);

     if(mensaje == 'OK'){
        res.writeHead(201,{"contentType": "text/plain"})

        res.end("bien");
     }else{
        res.writeHead(400,{"contentType": "text/plain"})

        res.end("mal");
     }
    
   });


    // console.log(req);
    

    
}


function gestionarERROR(codigo,res,err){
    res.writeHead(codigo,{ 'content-type': 'text/html' });

    let html = `<h1> ${codigo}</h1>`;
      switch(codigo){
          case 405: html+="<h2> SOLO PETICIONES GET</h2>";
          break;
          case 400: html+="<h2>  PETICION  incorrecta</h2>";
          break;
          case 404: html+=`<h2>   no encontrado</h2> ${err}`;
          break;
      }


    res.end(html);
    return;
}


function leerRecursoEstatico(req,res){

    let recurso = req.url;
    let peticion= {
        "url":req.url,
        "metodo": req.method
    }

    if(peticion.metodo != "GET"){
        gestionarERROR(405,res);
    }

    console.log("recurso : "+recurso)
    let extension = recurso.split('.')[1];
    console.log("extension : "+extension)
    if(typeof extension == 'undefined'){
      gestionarERROR(400,res);
    }



    let fich = fs.readFile('./views'+recurso,(err,data)=>{
          

            if( err != null){
                gestionarERROR(404,res,err);
            }

             let contentType = '';
             switch(extension){
                 case 'html': contentType= "text/html";
                 break;
                 case 'css': contentType= "text/css";
                 break;
                 case 'js': contentType= "text/javascript";
                 break;
             }

        res.writeHead(200,{ 'content-type': contentType });
        res.end(data);
        return;
    })
  
}