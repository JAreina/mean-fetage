const express = require('express');
const servidor = express();
const peliculas = require('./modelo.js');
var bodyParser = require('body-parser')

   //localhost:4999/index.html
  servidor.use(express.static('views'));

  // peticion get sin indicar recurso
  // http://localhost:4999
   servidor.get("/",function(req,res){
        res.send(``)
   });
   /**
    * GET / peliculas 
    */
   servidor.get("/peliculas",function(req,res){

       
      listarPeliculas(req,res);
   })
/**
    * GET / peliculas/ID 
    */
   servidor.get("/peliculas/:id",function(req,res){
      let id = req.params.id;
       
     buscarPelicula(req,res,id);
 })
 /**
    * POST  / peliculas    
    */
   servidor.post("/peliculas",function(req,res){
    insertarPelicula(req,res);
})
/**
    * PUT   / peliculas/ID   
    */
   servidor.put("/peliculas/:id",function(req,res){
    let id = req.params.id;
    modificarPelicula(req,res,id)
})
/**
    * DELETE   / peliculas/ID   
    */
   servidor.delete("/peliculas/:id",function(req,res){
    let id = req.params.id;
    borrarPelicula(req,res)
})

    


  servidor.listen(4999, function () {

    console.log('http://localhost:4999');
  });


  //      LISTAR PELICULAS 
  function listarPeliculas(req,res){
    console.log("listarpeliculas");
    let pelis = JSON.stringify(peliculas.listarPeliculas());

   // console.log(req);
    res.writeHead(200,{ 'content-type': 'application/json' })
   // res.writeHead("Access-Control-Allow-Origin", "*");
    res.end(pelis);
}

// BUSCAR PELICULA 
function buscarPelicula(req,res,id){
    console.log(id)
  console.log("buscar pelicula ");
 let peliBuscada = peliculas.buscarPelicula(id);
  // console.log(req);
  if(peliBuscada !=null){
      res.writeHead(200,{ 'content-type': 'application/json' })
      // res.writeHead("Access-Control-Allow-Origin", "*");
       res.end(JSON.stringify(peliBuscada));
  }else{
      res.writeHead(404,{ 'content-type': 'application/json' })
      // res.writeHead("Access-Control-Allow-Origin", "*");
       res.end("pelicula no encontrada");
  }
 
}
// INSERTAR PELICULA 
function insertarPelicula(req,res){
    console.log("INSERTAR PELIUCLA SERVIDOR ");
    
    //let peli = JSON.parse(req.body);
  
     //OBTENER EN EL SERVIDOR LA SESSION STORAGE
     let session = req.headers.cookie;
       console.log(session)
   // evento cuando vienen datos en el body de la petición 'data'
   req.on('data',function(body){
       console.log(body.toString());
       let pelicula = JSON.parse(body.toString());
       let mensaje = peliculas.insertarPelicula(pelicula);

     if(mensaje == 'OK'){
        res.writeHead(201,{"contentType": "text/plain"})

        res.end(mensaje);
     }else{
        res.writeHead(400,{"contentType": "text/plain"})

        res.end("mal");
     }
    
   });


    // console.log(req);
    

    
}

// MODIFICAR PELICULA
function modificarPelicula(req,res,id){
    console.log("MODIFICAR  PELIUCLA SERVIDOR ");
    
    //let peli = JSON.parse(req.body);
  
     //OBTENER EN EL SERVIDOR LA SESSION STORAGE
     //let session = req.headers.cookie;
       //console.log(session)
   // evento cuando vienen datos en el body de la petición 'data'
   req.on('data',function(body){
       console.log(body.toString());
       let pelicula = JSON.parse(body.toString());
       //  console.log(`MODIFICAR PELICUAL : ${pelicula}`)
       let mensaje = peliculas.modificarPelicula(pelicula);// en modelo vemos si existe esa peli

     if(mensaje == 'OK'){
        res.writeHead(201,{"contentType": "text/plain"})

        res.end("bien");
     }else{
        res.writeHead(400,{"contentType": "text/plain"})

        res.end("mal");
     }
    
   });
}

// BORRAR PELICULA 
function borrarPelicula(req,res){
    let recurso = req.url;

    let url = recurso.split('/');
    let id = url[url.length-1];
    console.log("ir a borrar  " +id)
    let mensaje = peliculas.borrarPelicula(id);

    if(mensaje == 'OK'){
        res.writeHead(201,{"contentType": "text/plain"})

        res.end("bien");
     }else{
        res.writeHead(400,{"contentType": "text/plain"})

        res.end("mal");
     }
}