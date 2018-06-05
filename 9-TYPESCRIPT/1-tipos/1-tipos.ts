
{
    let numero:number = 0;
}
    
{
    let falso : boolean = false;
}
{
    let palatra : string = " cadena ";
}

let algo : void;
let nada: any;
let todo = "todo"

function sumMatrix(matrix: number[][]):number {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }

    return sum;
}


var matriz :number[][] = [[2,2,2],[3,3,3]];
var salida = sumMatrix(matriz);
console.log(salida);


// ARRAYS 
var palabras:string[]=["hola","mundo"];




console.log("****************************")

function saluda():void{
    console.log("SALUA");

}

let salida = saluda();
console.log(salida)// undefined


console.log("****************************")

function sumar(a:number=100,b:number=100):number{
    return a+b;
}

console.log(sumar(33,444))
console.log(sumar(444))

console.log("****************************")

