const express = require('express');
const servidor = express();
var bodyParser = require('body-parser')

   //localhost:3999/index.html
  servidor.use(express.static('views'));

  // peticion get sin indicar recurso
  // http://localhost:3999
   servidor.get("/",function(req,res){
        res.send(`<h1>PETICION GET 
        servidor.get("/",function(req,res){
            res.send("")
       }); </h1>`)
   });
// peticion get que recibe un parametro
   servidor.get("/sumar",function(req,res){

       // acceder a la query url despues de la ? los parametros 
       //http://localhost:3999/sumar?sumando1=50&sumando2=60
       let sumando1 = parseInt(req.query.sumando1)
       let sumando2 = parseInt(req.query.sumando2)
       res.send(`${sumando1+sumando2}`)
   })

    //peticion que recibe parametro en la url 
    //http://localhost:3999/peliculas/directores/3/generos/suspense
    servidor.get("/peliculas/directores/:idDirector/generos/:idGenero",
                  function(req,res){
                  let idDirector = req.params.idDirector;
                  let genero = req.params.idGenero;
                  
                  console.log(idDirector)
                  res.send("ID DEL DIRECTOR :"+idDirector+"</br> genero: "+genero);
    })

    // recupera  body de la peticion PARA LEER EL BODY DE LA PETICION. TRANSFORMA JSON A OBJETO
    var jsonParser = bodyParser.json()
    servidor.use(jsonParser);


   // POST /api/users gets JSON bodies
   servidor.post('/peliculas', jsonParser, function (req, res) {

    let pelicula = req.body;
    console.log(pelicula.titulo+" , "+pelicula.director)
    res.status(201)
    if (!req.body) return res.sendStatus(400)
    // create user in req.body
  })

   /**
    * colocar un json en la respuest
    */
   servidor.get("/coches/:idCoche",function(req,res){
              let ide = req.params.idCoche;
              let coche = {
                  id: ide,
                  marca: 'ferrri',
                  modelo: '699'
              }
              res.json(coche)
   })


  servidor.listen(3999, function () {

    console.log('http://localhost:3999');
  });
