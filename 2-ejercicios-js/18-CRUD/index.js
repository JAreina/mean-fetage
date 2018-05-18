function VideoJuego(id, titulo, fabricante, fecha, tipo) {
    if (typeof VideoJuego.id == "undefined") {
        VideoJuego.id = 0
        this.id = VideoJuego.id;
    }

    this.id = VideoJuego.id++;
    this.titulo = titulo;
    this.fabricante = fabricante;
    this.fecha = fecha;
    this.tipo = tipo;

    

    this.guardar = function () {

        let titulo = document
            .getElementById('titulo')
            .value;
        let fabricante = document
            .getElementById('fabricante')
            .value;
        let fecha = document
            .getElementById("fecha")
            .value;
        let tipo = document
            .getElementById('tipo')
            .value;
        console.log(titulo, fabricante, fecha, tipo)

        let nuevo = new VideoJuego(VideoJuego.id, titulo, fabricante, fecha, tipo)
        arr.push(nuevo);
        console.log(nuevo);
        crearTabla();
        modoSeleccion();

    }

    this.ver = function (){
        crearTabla();

    }

    this.borrar = function(){
               var elemento = document
               .getElementById('identificador')
               .value;

               for ( var i =0;i<arr.length;i++){
                if(parseInt(elemento) === arr[i].id ){
                    arr.splice(i,1);
                }
           }

console.log(arr);
crearTabla();
    }
    this.actualizar = function(){
        let id= document
    .getElementById('identificador')
    .value;
        let titulo = document
            .getElementById('titulo')
            .value;
        let fabricante = document
            .getElementById('fabricante')
            .value;
        let fecha = document
            .getElementById("fecha")
            .value;
        let tipo = document
            .getElementById('tipo')
            .value;
        console.log(titulo, fabricante, fecha, tipo)

        let nuevo = new VideoJuego(id, titulo, fabricante, fecha, tipo);
        
        
        for ( var i =0;i<arr.length;i++){
            if(id == arr[i].id ){
                arr[i]= nuevo;
            }
       }
       
        console.log(arr);
        crearTabla()
    }

}

var buscar = function(e){
    var elemento = e;
    var celdas = elemento.cells;
    //id a mostrar 
    var hijo = celdas.item(0).innerText;
    var videojuego;
    console.log("ELEMENTO DEL CLICK: " +hijo);
  

    for ( var i =0;i<arr.length;i++){
         if(parseInt(hijo) == arr[i].id ){
             videojuego =  arr[i];
         }
    }
    mostrar(videojuego);
}



function mostrar(videojuego){
    document
    .getElementById('identificador')
    .value =videojuego.id;
     document
    .getElementById('titulo')
    .value =videojuego.titulo;
 document
    .getElementById('fabricante')
    .value= videojuego.fabricante;
 document
    .getElementById("fecha")
    .value = videojuego.fecha;
document
    .getElementById('tipo')
    .value= videojuego.tipo;
}


function modoInsercion(){
    document.getElementById('ver').disabled = true;
    document.getElementById('borrar').disabled = true;
    document.getElementById('actualizar').disabled = true;
    document.getElementById('guardar').disabled = false;
}
function modoSeleccion(){
    


    document.getElementById('ver').disabled = false;
    document.getElementById('borrar').disabled = false;
    document.getElementById('actualizar').disabled = false;
    document.getElementById('guardar').disabled = true;
}
window.onload = inicio;

function inicio() {
    arr = [];
    tabl = document.getElementById('tabla')
    let v = new VideoJuego();
    let guard = document.getElementById('guardar')
    guard.addEventListener('click', v.guardar);

  
    document.getElementById('ver').addEventListener('click', v.ver);
    document.getElementById('borrar').addEventListener('click', v.borrar);
    document.getElementById('actualizar').addEventListener('click', v.actualizar);
    modoInsercion();
}



function reset (){
    let form = document.getElementById("formulario").reset();
}



function crearTabla(){

    tabl.innerHTML="";
    
    

   var tabla = document.createElement('table');
   crearTh(tabla);
   tabla.style.border= "1px solid black";
   tabla.style.borderCollapse= "collapse";
  
   
     arr.forEach(function(value,index){
        var tr = crearTr();
         console.log(value, index);
        
        for(var i in value){

            if(typeof value[i] != "function"){
                console.log("-------->"+i + "valor "+value[i]);
                var td = document.createElement('td');
                td.style.padding ="30px";
            td.style.border= "1px solid black";
                var texto = document.createTextNode(value[i]);
                td.appendChild(texto);
                tr.appendChild(td);
            }
       
        }
       
    
        tabla.appendChild(tr)
     })
        
    
    tabl.appendChild(tabla);
    reset();

}

function crearTr(){
    var fila = document.createElement('tr');
    fila.setAttribute("name","fila");
    fila.setAttribute("onclick","buscar(this)");
    return fila;
}


function crearTh(tabla){
    var tr = crearTr();
    
    var ths = ["id","titulo","fabricante","fecha","tipo"];
    
    
    ths.forEach(element => {
        var th = document.createElement('th');
        th.style.padding ="30px";
        th.style.border= "1px solid black";
        var text= document.createTextNode(element);
        th.appendChild(text);
        tr.appendChild(th);
    });
    tabla.appendChild(tr);
}