
function pruebasDOM() {
    
}

function pruebaDOM() {
    console.log(document);
    let dato = document.getElementById('dato');
    console.log('PROPIEDADES DE NODO CON ID : dato')
    console.log(dato.size);
    console.log(dato.value);
    console.log(dato.name);
    console.log(dato.type);
    console.log(dato.id);


    console.log('document.getElementsByName ***************');
    let nombre = document.getElementsByName('accion');
    console.log(nombre)
    nombre.forEach(element => {
        console.log(element.value)
        console.log(element.namespaceURI)
    });



    console.log('document.getElementsByTagName ***************');


    let etiquetas = document.getElementsByTagName('td');
    console.log(etiquetas)
    console.log('total etiquetas td ' + etiquetas.length)
    for (var i = 0; i < etiquetas.length; i++) {
        etiquetas[i].style.border = '1px solid red';
        console.log(etiquetas[i].id)

    }

    console.log('document.getElementsByClassName ***************');

    let clases = document.getElementsByClassName('main');

    for (var i = 0; i < clases.length; i++) {
        clases[i].style.backgroundColor = 'orange';
        console.log(clases[i].value)
    }

    // buscar nodos en XML    document.getElementByTagNameNS('xxx');  


    console.log(' FORMULARIO ***************');
    let formulario = document.getElementById('formulario');
    let hijos = formulario.childNodes;
    for (var i = 0; i < hijos.length; i++) {
       console.log(hijos[i]);
    }





}


function validar() {
 var nombre = document.getElementById('nombre').value;
 var direccion = document.getElementById('direccion').value;


 if(nombre != "" && direccion != ""){
     console.log("correcto")
 }else{
     console.log("NOMBRE Y DIRECCION SON OBLIGATORIOS")
 }
}



function prepararParametros() {
         
        // 
    

        parametros = "nombre="+document.getElementById("nombre").value+"&"+
                 "direccion="+document.getElementById("direccion").value+"&"+
                 "telefono="+document.getElementById("telefono").value+"&"+
                 "ciudad="+document.getElementById("ciudad").value+"&"+
                 "observaciones="+document.getElementById("observaciones").value;
  
  console.log(parametros)





  var formulario = document.getElementById('formulario');


  // array de elementos del array
  var arrayForm = formulario.elements;
  console.log(arrayForm);
    var params="?";
  for (var i = 0; i < arrayForm.length; i++) {
      var nodo = arrayForm[i]
    console.log(nodo.id);
    if(nodo.type == 'button' || nodo.type == 'submit'){
        continue;
    }
       params += `${nodo.name}=${nodo.value}&`;
     

 }
 console.log(params.substring(0,params.length-1));
 return params;

}