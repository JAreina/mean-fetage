const http = require('http');

const servidor = http.createServer((req, res) => {
	console.log(req.headers);
	console.log('peticion recibida');
	let datos = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
	let d = [...datos ];

	res.writeHead(200, { 'content-type': 'text/html' });
	res.end(`<h1> generado servidor:   ${d} </h1>`);
});

servidor.listen(3002);
