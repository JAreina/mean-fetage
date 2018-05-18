window.onload = function(){
        document.getElementById("DALE").onclick = btnDale;
        document.getElementById("Enviar").onclick = validarForm;
}

function btnDale(){
           console.log("HAS HEHCO CLIC EN DALE")
}

function validarForm(e){
    e.preventDefault();
    var ok = true;
    console.log(e.target)

    var padre = e.target.parentNode;
    console.log(padre);

    var hijosFormulario = padre.childNodes;
    console.log(hijosFormulario);
    for(var i =0; i<hijosFormulario.length; i++){
        if( hijosFormulario[i].id == "dato" && hijosFormulario[i].value ){
            console.log(hijosFormulario[i].value)
            ok = false;
            console.log(ok)
        }
    }
    if(ok== true){
        console.log("dato es obligatorio");
    }
    return ok;
}
