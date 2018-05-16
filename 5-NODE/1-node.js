const http = require('http');

const servidor = http.createServer((req, res) => {
	console.log(req.headers);
	console.log('peticion recibida');
	let datos = [ 31, 23, 33, 34, 35, 36, 37, 38, 39 ];
	let d = [...datos ];
    let salida = "";

    datos.forEach(element => {
        salida += `<table>
        
        
                      <th> ${element}</th>
                      
                      </table>`
    });
    



	res.writeHead(200, { 'content-type': 'text/html' });
	res.end(`<h1> generado servidor:   ${d}${salida}</h1>`);
});

servidor.listen(3002);
