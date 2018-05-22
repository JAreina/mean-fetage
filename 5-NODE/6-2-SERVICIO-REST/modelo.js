
let peliculas = [];
let contador =3;



// peliculas pruebas
peliculas.push({
    "id":1,
    "titulo":"titulo 1",
    "director":'director 1',
    "genero":'genero 1',
    "anio":'2001'
},
{
    "id":2,
    "titulo":"titulo 2",
    "director":'director 2',
    "genero":'genero 2',
    "anio":'2002'
},
{
    "id":3,
    "titulo":"titulo 3",
    "director":'director 3',
    "genero":'genero 3',
    "anio":'2003'
}
);





exports.listarPeliculas = function() {
    return peliculas;
};

exports.buscarPelicula = function(id) {
    for(let i =0;i<peliculas.length;i++){
        let pelicula = peliculas[i];
        if(pelicula.id == id){
            return pelicula;
        }
    }
    return null;
};

exports.modificarPelicula = function(pelicula) {
    for(let i =0;i<peliculas.length;i++){
        let p = peliculas[i];
        if(pelicula.id == p.id){
            return "OK";
        }
    }
    return null;
};

exports.borrarPeliculas = function(id) {};

exports.insertarPelicula = function(pelicula) {
        
    if(pelicula.director.trim()!=''){
        contador++;
        pelicula.id = contador;
        peliculas.push(pelicula);
        return 'OK';
    }
    
    
};