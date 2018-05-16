const fs = require('fs');



console.log("ficheros  ....... aSINCRONA..........");

let data = fs.readFileSync("./ficheros/fichero.txt");
let segundoFichero = data.toString();


data = fs.readFileSync("./ficheros/"+segundoFichero);
let tercerFichero = data.toString();


data = fs.readFileSync("./ficheros/"+tercerFichero);
console.log(data.toString())



console.log(".------- ASINCRONO-----------");

fs.readFile('./ficheros/fichero.txt',(err,data)=>{
   let segundo = data.toString();
   fs.readFile("./ficheros/"+segundo, (err,data)=>{
      let tercero = data.toString();
      fs.readFile("./ficheros/"+tercero,(err,data)=>{
        console.log(data.toString());
      })
   })
})


fs.writeFile("f1.txt","fichero.txt",function(err){
  console.log("escrito 1")
  fs.writeFile("f2.txt","fichero2.txt",function(err){
    console.log("escrito 2")
  })
})


fs.writeFile("f3.txt","datos.txt",function(err){
  console.log("escrito 3")
})