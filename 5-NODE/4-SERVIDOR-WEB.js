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
       res.writeHead(405,{ 'content-type': 'text/html' });
       res.end("<h1> SOLO PETICIONES GET</h1>")
       return;
   }else{
   leerRecursoEstatico(req,res);
   
   }

}

servidor.listen(9999);




function leerRecursoEstatico(req,res){

    let recurso = req.url;


    console.log("recurso : "+recurso)
    let extension = recurso.split('.')[1];
    console.log("extension : "+extension)
    if(typeof extension == 'undefined'){
       res.writeHead(400,{ 'content-type': 'text/html' });
       res.end("<h1> error 400  PETICION  incorrecta</h1>")
       return;
    }



    let fich = fs.readFile('./ficheros'+recurso,(err,data)=>{
          

            if( err != null){
                res.writeHead(404,{ 'content-type': 'text/html' });
                res.end(`<h1> error 404 no encontrado</h1>
                          ${err}`);

                return;
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