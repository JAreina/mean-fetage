function subscribe(exito,fallo,siempre){
   
    let datos = '{"nombre":"juan"}';

    exito(datos);

    let error = '[{"status":"400"},{"mensaje":\"ha habido error"}]';

    fallo(error);

    siempre();
}

subscribe(function(datos){
           console.log(JSON.parse(datos))
        },function(error){
            console.log(JSON.parse(error))
        },function(){
            console.log("siempre")
        })

console.log(`
        subscribe(datos => console.log(JSON.parse(datos))
        ,(error)=>{
            console.log(JSON.parse(error))
        },()=>{
            console.log("siempre")
        })
`)

subscribe(datos => console.log(JSON.parse(datos))
         ,(error)=>{
             console.log(JSON.parse(error))
         },()=>{
             console.log("siempre")
         })

console.log("-------   return ");


function crearCodFactura(formatear,numero){
   

    let codigo = formatear(numero);

    return codigo;
}


let formatear = num=>{
    // si aqui solo hay una sola linea : return implicito , es innecesario ponerlo
    let aleatorio = (Math.abs(Math.random()*100)).toFixed(0);
    return `FAC-${num}-${aleatorio}`
}


console.log(crearCodFactura(formatear,203));


console.log("-------------THIS")

function f1(){

      // aqui this el el objeto al que se le asigna f1
    let f = function(){
       
        console.log(this+".........................") // global en node 
       
    }
    return f;
}

let fu = f1();
console.log(fu)

console.log(fu())


let f2= ()=>{
    console.log(this+"ccccccccccccc")
    // aqui this el el objeto al que se le asigna f1
  let f22 = ()=>{
     
      console.log(this+".........................")
     
  }
  return f22;
}

let fu2 = f2();


console.log(fu2())


console.log("==========================");
let persona = { nombre : 'Venancio',
                saludar : funcion1 }

function funcion1(){
    //Aqui this es el objeto al que se le asigna 'funcion1' como valor
    //de una propiedad
    console.log(this.nombre); //Aqui this es 'persona'
    let that = this;

    let fa = function(){
        //Dentro de esta funcion 'this' no es el mismo que en la funcion
        //'funcion1' y por eso usamos (entre otras posibilidades) el 
        //truco del 'that'
        console.log(that.nombre); //Venancio
        console.log(this.nombre); //undefined
    }

    //Dentro de una expresión lambda 'this' tiene el mismo valor
    //que el de la funcion que la contiene
    //Con expresiones lambda nos ahoramos el truqui del 'that'
    let fb = () => {
        console.log(that.nombre); //Venancio
        console.log(this.nombre); //Venancio
    }

    console.log("------------------");
    fa();
    console.log("------------------");
    fb();
}

persona.saludar();
