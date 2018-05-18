

window.onload = inicio;


function inicio(){
    titular = document.getElementById('titular');
    div1 = document.getElementById('div1');
    div2 = document.getElementById('div2');


       uno = document.getElementById('id1');//DOCUMENT.WRITE
       dos = document.getElementById('id2');//innerHTML
       tres = document.getElementById('id3');//vaciar innerHTML
       cuatro = document.getElementById('id4');// CREAR NODOS
       cinco = document.getElementById('id5');
        CUERPO = document.getElementsByTagName('body');
       // UNA FORMA 
       // uno.addEventListener('click', _innerHTML);


         // OTRA FORMA 
        uno.onclick = docWrite;
        dos.addEventListener('click', _innerHTML);
        tres.addEventListener('click', vaciarConInnerHTML);
        cuatro.addEventListener('click', crearNodos);
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
function vaciarSelect() {}


