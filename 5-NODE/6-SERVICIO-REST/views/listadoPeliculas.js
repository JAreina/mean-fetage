$(inicializar);

function inicializar(){
    $('#botonNuevo').click(actualizar);
    $('#botonActualizar').click(getPeliculas);
    getPeliculas();
    $('#botonEnviar').click(procesarFormulario);
}


function addNuevo(){
  
    console.log("AÑADIDO NUEVO");
}


let url = "http://localhost:3999"//NO HACE FALTA PONER ESTO
function getPeliculas(){
    // ajax DEPRECATED
    /*$.ajax({
        url:url+"/peliculas",
        success: rellenarTabla,
        error: procesarError

    });*/
     $.ajax({url: '/peliculas'})
            .done(rellenarTabla)
            .fail(procesarError)
            .always(ok)
    
}

function rellenarTabla(datos){
   console.log(datos)
   let data = JSON.stringify(datos);
   console.log(data)
   //document.getElementById('tabla').innerHTML = datos[0].titulo;
   //pintarTabla(datos,'table');
   rellenarTablaJQUERY(datos)

}

function ok(){
    console.log("HECHO")
}

function procesarError(error){
    console.log(error);
}


/*
function pintarTabla(datos,elemento){
    let tabla = document.getElementById(elemento);
    tabla.innerHTML="";
    crearTh(tabla);

    for(var i = 0; i<datos.length; i++){
        document.getElementById(elemento).innerHTML += `
    
        <tr>
        <td>${datos[i].id}</td>
        <td>${datos[i].titulo}</td>
        <td>${datos[i].director}</td>
        <td>${datos[i].genero}</td>
        <td>${datos[i].anio}</td>
        
        </tr>`;
    }
    
}

function crearTr(){
    var fila = document.createElement('tr');
    fila.setAttribute("name","fila");
    fila.setAttribute("onclick","buscar(this)");
    return fila;
}


function crearTh(tabla){
    var tr = crearTr();
    
    var ths = ["id","titulo","director","genero","año"];
    
    
    ths.forEach(element => {
        var th = document.createElement('th');
        th.style.padding ="30px";
        th.style.border= "1px solid black";
        var text= document.createTextNode(element);
        th.appendChild(text);
        tr.appendChild(th);
    });
    tabla.appendChild(tr);
}*/


/* RELLENAR TABLA CON JQUERY */
function rellenarTablaJQUERY(datos){
    let tabla = $('#tableBody')
    tabla.html('');
    console.log(tabla);
    for(var i = 0; i<datos.length; i++){
          let peli = datos[i];
          $(
          "<tr>"+
          "<td>"+peli.id+"</td>"+
          "<td>"+peli.titulo+"</td>"+
          "<td>"+peli.director+"</td>"+
          "<td>"+peli.genero+"</td>"+
          "<td>"+peli.anio+"</td>"+
          "</tr>").appendTo(tabla);
    }
}
function actualizar(){

    window.location = "/formularioPeliculas.html";
}




/* FORMULARIO PELICULAS ************************************/

function obtenerValor(){
    
    
}

function procesarFormulario(){
    console.log("procesar formulario")
    pelicula = {};
    console.log("  DATOS DEL FORMULARIO --------------")
    $("#formulario [campo]").each(function(){
        pelicula[this.id] = this.value;
    }) ;



    console.log(pelicula);


    $.ajax({
        url: '/peliculas',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify(pelicula)
        
}).done(verListado).fail(procesarError2)






}

function verListado(){
    console.log("guardado ver LISTADO")
    window.location="/listadoPeliculas.html"
}


function procesarError2(){
    console.log("procesar error insertar ")
    window.location="/listadoPeliculas.html"
}