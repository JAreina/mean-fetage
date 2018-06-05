{
    var numero = 0;
}
{
    var falso = false;
}
{
    var palatra = " cadena ";
}
var algo;
var nada;
var todo = "todo";
function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }
    return sum;
}
var matriz = [[2, 2, 2], [3, 3, 3]];
var salida = sumMatrix(matriz);
console.log(salida);
// ARRAYS 
var palabras = ["hola", "mundo"];
console.log("****************************");
function saluda() {
    console.log("SALUA");
}
var salida = saluda();
console.log(salida); // undefined
console.log("****************************");
function sumar(a, b) {
    if (a === void 0) { a = 100; }
    if (b === void 0) { b = 100; }
    return a + b;
}
console.log(sumar(33, 444));
console.log(sumar(444));
console.log("****************************");
