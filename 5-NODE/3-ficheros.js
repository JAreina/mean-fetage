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