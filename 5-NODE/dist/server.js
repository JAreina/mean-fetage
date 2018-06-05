const fs = require('fs');
const http = require('http');


let servidor = http.createServer(cb);

function cb (req,res){
    //console.log(req)  
    
    //http://localhost:9999/index.html

    // http://localhost:9999/datos.txt
    
    let peticion= {
        "url":req.url,
        "metodo": req.method
    }
 
    console.log("**************************************")

   if(peticion.metodo != "GET"){
       gestionarERROR(405,res);
   }else{
   leerRecursoEstatico(req,res);
   
   }

}

servidor.listen(9999);


function gestionarERROR(codigo,res,err){
    res.writeHead(codigo,{ 'content-type': 'text/html' });

    let html = `<h1> ${codigo}</h1>`;
      switch(codigo){
          case 405: html+="<h2> SOLO PETICIONES GET</h2>";
          break;
          case 400: html+="<h2>  PETICION  incorrecta</h2>";
          break;
          case 404: html+=`<h2>   no encontrado</h2> ${err}`;
          break;
      }


    res.end(html);
    return;
}






function leerRecursoEstatico(req,res){

    let recurso = req.url;


    console.log("recurso : "+recurso)
    let extension = recurso.split('.')[1];
    console.log("extension : "+extension)
    if(typeof extension == 'undefined'){
      gestionarERROR(400,res);
    }



    let fich = fs.readFile('./ficheros'+recurso,(err,data)=>{
          

            if( err != null){
                gestionarERROR(404,res,err);
            }





             let contentType = '';
             switch(extension){
                 case 'html': contentType= "text/html";
                 break;
                 case 'css': contentType= "text/css";
                 break;
                 case 'js': contentType= "text/javascript";
                 break;
             }



        res.writeHead(200,{ 'content-type': contentType });
        res.end(data);
        return;
    })

    
}