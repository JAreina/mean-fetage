
let peliculas = [];
let contador =0;

exports.listarPeliculas = function() {
    return peliculas;
};

exports.buscarPeliculas = function(id) {};

exports.modificarPeliculas = function(pelicula) {};

exports.borrarPeliculas = function(id) {};

exports.insertarPeliculas = function(pelicula) {
        contador++;
        pelicula.id = contador;
        peliculas.push(pelicula);
};