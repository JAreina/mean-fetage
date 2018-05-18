

// CADA OBJETO TIENE COPIA DE LAS FUNCIONES 
function Cliente(nombre,CC,domicilio){
    this.nombre = nombre;
    this.CC= CC;
    this.domicilio = domicilio;
    this.saludar = ()=>{
        console.log("saludo "+ this.nombre);
    this.toString = ()=>{
        return `${this.nombre}:${this.CC}:${this.domicilio}`
    }
    }

   // return 0;
}

console.log(Cliente());

var cliente1 = new Cliente("JUAN",1234546789,"CALLE MADRID");
console.log(cliente1)
console.log(cliente1.__proto__)
cliente1.saludar();
// this dentro de una funcion es una 
//referencia al objeto que posee la función 

console.log(cliente1.toString());
function estoWindow() {

    // this hace referencia al objeto window
    console.log(this.__proto__)
    console.log(this.constructor.name)
    
}
estoWindow();


console.log("*********** PROTOTIPOS   ************");


// busca primero en el constructor y luego en el prototipo
// las funciones 
function Disco(){
    this.titulo = null;
    this.anio = null;
    this.grupo = null;

}
console.log(new Disco());

// se añade a todos lkos objetos que se creen
// mira tambien en el prototipo que es
// compartido por todas las instancias 
Disco.prototype.concierto= "concierto del prototipo";


console.log(new Disco().concierto);


Disco.prototype.toString = function(){

   return ` tu estring de Disco ---->\n\n :${this.titulo}\n:${this.anio}\n:${this.grupo}\n`;
}

let d = new Disco();

d.titulo = "titulo 1";
d.anio= 6666;
d.grupo = "GRUPO ...."
d.concierto = "concierto del objeto"

console.log(d);



// simular constructor 

function Casa(direccion,habitaciones,ciudad,otra) {
    this.direccion= direccion;
    this.habitaciones=habitaciones;
    this.ciudad=ciudad;
    this.otra = otra;
    
}




Casa.prototype.propietario = "propietaria de la casaa"

let c = new Casa("c/ madrid",6,"Madrid","María");
console.log(c)


//  FUNCIONES PRIVADAS 
console.log("*********** funciones privadas   ************");

function Ciudad(habitatentes, nombre) {
    this.habitatentes = habitatentes;
    this.nombre=nombre;
    this.fPublica = function(){
        console.log("f PUBLICA")
    
      fPrivada();
    }
    
    // funcion privada dentro de otra función 
    //no se puede llamar desde fuera dela función Coiudad
    // FUNCION ANIDADA CLOJURE
    function fPrivada (){
              console.log("funcion privada ");
    }

    Ciudad.prototype.ejecutarPrivada = function(){
        console.log("EJECUTADA DESCE PROTORYPE ");
        fPrivada();
    }
    
}


let ciu1 = new Ciudad(3000,"getafe");
//ciu1.fPrivada();// error
ciu1.fPublica();
ciu1.ejecutarPrivada()

console.log("*********** atributos privados  ************");

function  A(b,c){
    // atributos accesibles publicos
    //this.b=b;
    //this.c=c;

    let d = b;
    let e = c;

    this.getD = function (){
         return d;
    }
    this.setD = function(dd){
        d = dd;

    }
}

let aaa = new A("atributo1", "atributo2");
console.log(aaa.getD());

aaa.setD("nuevo valor")

console.log(aaa)
console.log(aaa.getD());





console.log("*********** PROPIEDADES ESTATICAS  ************");
// propiedades estatiscs 


// pertenecen a la clase o al prototipo 


function Estatico (pro1,pro2){
    this.pro1 = pro1;
    this.pro2 = pro2;
     
    if(typeof Estatico.contador == 'undefined')
           Estatico.contador =0;
    Estatico.contador++;
}


let uno = new Estatico("ddd" ,"fdffd");
console.log(Estatico.contador)
let uno2 = new Estatico("ddd" ,"fdffd");
console.log(Estatico.contador)
let uno3 = new Estatico("ddd" ,"fdffd");
console.log(Estatico.contador)
let uno4 = new Estatico("ddd" ,"fdffd");
console.log(Estatico.contador)

console.log(uno)