class Clase{
    public aula:string;
    protected universidad:string;
    private codigo:number;

    //es unico
    constructor(aula:string,uni:string, codigo:number){
       this.aula  = aula;
       this.universidad=uni;
       this.codigo=codigo;
    }


    getUniversidad(){
        return this.universidad;
    }
    getCodigo(){
        return this.codigo;
    }
    llegar(){
        return this;
    }
}


let clase = new Clase("B-12","complutentes",2354545);
let salida = clase.llegar();
console.log(salida)

console.log("****************************")

let clase2 = new Clase("","",10);
clase2.aula = "public";
clase2.universidad = "protegido";
clase2.getUniversidad();
clase2.codigo = 1000000;
let cod= clase2.getCodigo();
console.log(cod)
console.log(clase2);


console.log("****************************")

let nombre = "el nombre"
function Barco (){
    return function Barco(){
        this.nombre = nombre;
    }
    
}

let barco = Barco();
let x = new barco();
console.log(typeof x);

console.log("****************************");


class Persona{
    static empresa = "iberia "
    readonly direccion:string;
    constructor(public edad:string,protected nombre:string, private dni:string,dir:string){
          this.direccion = dir;
    }

    
    get  getDni() : string {
        return this.dni
    }
    public toString():string{
        return `${this.edad},${this.nombre},${this.dni},${this.direccion} `
    }
}


let p = new Persona("12","juan","d88347384x","calle");
//p.direccion = "desconocido" ERRORRRRRRRRR
console.log(p)
console.log(p.getDni)
console.log(p.toString())
console.log("************* herencia ***************");

class Empleado extends Persona{

   
    constructor(public edad:string,protected nombre:string, dni:string,dir:string,public departamento:string){
        super(edad,nombre, dni,dir);
        this.departamento=departamento;
    }
}


let emplea = new Empleado("12","juan","d88347384x","calle","DEPARTAMENTO");
console.log(emplea.getDni);
let per:Persona;

per = emplea;
console.log(per)
console.log(emplea);

console.log(Persona.empresa);
console.log(Empleado.empresa);


//poliformismo   En programación orientada a objetos, el polimorfismo' o '
// se refiere a la propiedad por la que es posible enviar mensajes sintácticamente 
//iguales a objetos de tipos distintos. 
//El único requisito que deben cumplir los objetos que se utilizan de manera polimórfica 
//es saber responder al mensaje que se les envía.
let em:Persona =new Empleado("12dfdfdf","maria","d88347384x","calle","DEPARTAMENTO");


console.log(em);

console.log("********* ABSTRAC****************");


abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log("DEPARTAMENTO CLASE ABSTRACTA: " + this.name);
    }

    abstract printMeeting(): void; // must be implemented in derived classes
}

class AccountingDepartment extends Department {

    constructor() {
        super("CONSTRUYE OBJETO ACOUUTING DEPART"); // constructors in derived classes must call super()
    }

    printMeeting(): void {
        console.log("IMPRIME");
    }

    generateReports(): void {
        console.log("GENERA INFORME.");
    }
}

let department: Department; // ok to create a reference to an abstract type
//department = new Department(); // error: cannot create an instance of an abstract class
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
//department.generateReports(); // error: method doesn't exist on declared abstract type