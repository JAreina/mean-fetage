const http = require('http');




const servidor = http.createServer(
    (req,res)=>{
       
        console.log(req.headers)
         console.log("peticion recibida");
         
          res.writeHead(200,{"content-type":"text/html"});
          res.end("<h1> generado servidor</h1>")
    });

  

    servidor.listen(3002);
    





