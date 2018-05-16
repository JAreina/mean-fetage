const fs = require('fs');


console.log("ficheros  ....... SINCRONA..........");
// DEVUELVE OBJETO

let contenido = fs.readFileSync("datos.txt");
console.log(contenido.toString())

console.log("ficheros  ....... aSINCRONA..........");

let asin= fs.readFile("datos.txt","utf-8",(err,data)=>{
    console.log("ya")
    console.log(data)

})
console.log("fin")

let abre = fs.openSync("fichero.txt",'r');

fs.read(abre,contenido,5,3,null,(err,bytesrEAD,buffer)=>{
  console.log(err +"  ERROR")  
  console.log(bytesrEAD +"  BYTES READ")  
  console.log(buffer +"  BUFFER")  
})