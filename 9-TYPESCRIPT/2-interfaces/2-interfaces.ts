interface Coche{
    marca:string;
    modelo:string;
    potencia:number
}

let c: Coche={
    marca: "modelo",
    modelo:" aaa",
    potencia: 456
}

function insertarCoche(c:Coche):void{
    console.log("insertando coche"+c.modelo)
}

insertarCoche(c)