

window.onload = inicio;


function inicio2(){
    let a = document.getElementsByTagName('input');
    console.log(a);

     let metodos = [
        docWrite,_innerHTML, vaciarConInnerHTML,crearNodos,
        crearNodos2, vaciarSelect,crearTabla
     ]



    for (let i = 0; i < a.length; i++) {
        
          console.log(metodos[i]);

        let nodo = a[i];
        let idd = nodo.id;
        let num = idd.substring(2);
        console.log("NUMERO ID" +num)
        console.log(nodo)
           if(parseInt(num) === i)
        nodo.addEventListener('click',metodos[i]);
                
    }
}






function inicio(){

    inicio2();


    titular = document.getElementById('titular');
    div1 = document.getElementById('div1');
    div2 = document.getElementById('div2');
    CUERPO = document.getElementsByTagName('body');

      /* uno = document.getElementById('id1');//DOCUMENT.WRITE
       dos = document.getElementById('id2');//innerHTML
       tres = document.getElementById('id3');//vaciar innerHTML
       cuatro = document.getElementById('id4');// CREAR NODOS
       cinco = document.getElementById('id5');
        
        cinco = document.getElementById('id7');
        seis = document.getElementById('id6');
       // UNA FORMA 
       // uno.addEventListener('click', _innerHTML);


         // OTRA FORMA 
        uno.onclick = docWrite;
        dos.addEventListener('click', _innerHTML);
        tres.addEventListener('click', vaciarConInnerHTML);
        cuatro.addEventListener('click', crearNodos);
        cinco.addEventListener('click', crearTabla);
        seis.addEventListener('click',vaciarSelect);*/
}

function docWrite(){
    document.write("ESCRIBE EN TODO EL DOCUMENTO");
}

function _innerHTML() {
    titular.style.fontSize = '86px';
    titular.style.color= "white";
    div1.innerHTML = "<marquee> olaaaaaaaaaaaaaaaaa </marquee>";
    CUERPO[0].style.backgroundColor= "orange";
    console.log("ha escrito innerhtml")
}
function vaciarConInnerHTML() {
    div1.innerHTML = '';
    
    CUERPO[0].style.backgroundColor= "grey";
}

function crearNodos() {


    if(div2.getElementsByTagName('h1').length ==  0){
        let h1 = document.createElement('h1');
        h1.appendChild(document.createTextNode("TITULAR"));
        
        
        h1.setAttribute("class","atributo");
        div2.appendChild(h1);
    }
    
}

function crearNodos2() {}





function crearTabla(){

    div2.innerHTML="";
    
     var pelis = getPelis();

   var tabla = document.createElement('table');
   crearTh(tabla);
   tabla.style.border= "1px solid black";
   tabla.style.borderCollapse= "collapse";
  
   
     pelis.forEach(function(value,index){
        var tr = crearTr();
         console.log(value, index);
        
        for(var i in value){
            console.log("valor de peli"+i);
            var td = document.createElement('td');
            td.style.padding ="30px";
        td.style.border= "1px solid black";
            var texto = document.createTextNode(value[i]);
            td.appendChild(texto);
            tr.appendChild(td);
        }
       
    
        tabla.appendChild(tr)
     })
        
    
      div2.appendChild(tabla);

}

function crearTr(){
    return document.createElement('tr');
}


function crearTh(tabla){
    var tr = crearTr();
    
    var ths = ["nombre","director","año"];
    
    
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




function getPelis(){
    let pelis = [
        {
            nombre: "nombre 1",
            director: "director 1",
            anio: 2001
        },
        {
            nombre: "nombre 2",
            director: "director 2",
            anio: 2002
        },
        {
            nombre: "nombre 3",
            director: "director 3",
            anio: 2003
        },
        {
            nombre: "nombre 4",
            director: "director 4",
            anio: 2004
        }

    ];
    return pelis;
}



function vaciarSelect(){
   var sel= document.getElementById("ciudades");
   //sel.innerHTML="";   BORRAR TODO


   var hijos = sel.childNodes;
   console.log(hijos);
   //BORRAR UN HIJO

 for (let index = 0; index < hijos.length; index++) {
     const element = hijos[index].remove();
     
 }
     
   

}