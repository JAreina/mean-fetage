// OBJETO NORMAL
let Coche = {
    'marca':null,
    "modelo":null,
    "matri":null
}

console.log("-------------Object.create ---------------");
let coche1 = Object.create(Coche);
coche1.marca = "mercedes1";


let coche2 = Object.create(Coche);
coche2.marca = "mercedes2";

console.log(coche1,coche2);



let Libro = {
    "titulo":null,
    "autor":"autor objeto",
    "toString": ()=>{
        return this.titulo+ "-----"+this.autor;
    }
}


console.log("rea el mismo objeto con los mismos atributos del prototypo")
/// crea el mismo objeto con los mismos atributos del prototypo
let libro1 = Object.create(Libro);
let libro2 = Object.create(Libro);

libro1.autor ="autor 1";
libro2.autor="autor 2";

// añadir propiedades al prototypo despues
Libro.imprimir = function (){
    console.log(this.titulo, this.autor);
}
console.log(libro1)
console.log(libro2)
libro1.imprimir();
libro2.imprimir();


console.log("------------- new Object ---------------");
console.log("crea nuevo objeto con sus propios atributos y funciones ")
//crea nuevo objeto con sus propios atributos y funciones 
let libro3 = new Object(Libro);
libro3.autor = "con new Object"


console.log(libro3)


console.log("----------------------------");
// comparten atributos todos los objetos creados 
let avion = {
    "fabricante":{"nombre":null},
    "modelo": null
}

let a = Object.create(avion);
a.fabricante.nombre = "boing";
let a2 = Object.create(avion);
a2.fabricante.nombre = "abion 2"





console.log(a,a2)




let a3 = Object.create(avion);
let nombre2 = new Object();
nombre2.nombre ="nombre nuevo";


a3.fabricante.nombre= nombre2.nombre;
console.log(a3);


let a4 = new Object(avion);
a4.fabricante.nombre = "nombre con new object";
console.log(a4);



// forma de hacerlo 

function Abion(){
    this.modelo = null;
    this.fabricante = {'nombre':null}
}

Abion.prototype.toString= function(){
          return this.modelo +" ---> "+this.fabricante.nombre;
}


let a5 = new Abion();
let a6 = new Abion();
let a7 = new Abion();
a5.fabricante.nombre = "fabrica 1";
a6.fabricante.nombre = "fabrica 2";
a7.fabricante.nombre = "fabrica 3";
console.log(a5);
console.log(a6.toString());console.log(a7.toString());




// simular herencia 

console.log("-------- simular HERENCIA ")

let Persona = {
    "nombre":null,
    "dire":null,
    "tele":null
}

let Cliente = Object.create(Persona);
Cliente.cuenta = null;

let persona = Object.create(Persona)

let cliente = Object.create(Cliente);
console.log("cliente ",cliente);
console.log("persona " ,persona);