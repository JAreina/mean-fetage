var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Clase = /** @class */ (function () {
    //es unico
    function Clase(aula, uni, codigo) {
        this.aula = aula;
        this.universidad = uni;
        this.codigo = codigo;
    }
    Clase.prototype.getUniversidad = function () {
        return this.universidad;
    };
    Clase.prototype.getCodigo = function () {
        return this.codigo;
    };
    Clase.prototype.llegar = function () {
        return this;
    };
    return Clase;
}());
var clase = new Clase("B-12", "complutentes", 2354545);
var salida = clase.llegar();
console.log(salida);
console.log("****************************");
var clase2 = new Clase("", "", 10);
clase2.aula = "public";
clase2.universidad = "protegido";
clase2.getUniversidad();
clase2.codigo = 1000000;
var cod = clase2.getCodigo();
console.log(cod);
console.log(clase2);
console.log("****************************");
var nombre = "el nombre";
function Barco() {
    return function Barco() {
        this.nombre = nombre;
    };
}
var barco = Barco();
var x = new barco();
console.log(typeof x);
console.log("****************************");
var Persona = /** @class */ (function () {
    function Persona(edad, nombre, dni, dir) {
        this.edad = edad;
        this.nombre = nombre;
        this.dni = dni;
        this.direccion = dir;
    }
    Object.defineProperty(Persona.prototype, "getDni", {
        get: function () {
            return this.dni;
        },
        enumerable: true,
        configurable: true
    });
    Persona.prototype.toString = function () {
        return this.edad + "," + this.nombre + "," + this.dni + "," + this.direccion + " ";
    };
    Persona.empresa = "iberia ";
    return Persona;
}());
var p = new Persona("12", "juan", "d88347384x", "calle");
//p.direccion = "desconocido" ERRORRRRRRRRR
console.log(p);
console.log(p.getDni);
console.log(p.toString());
console.log("************* herencia ***************");
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(edad, nombre, dni, dir, departamento) {
        var _this = _super.call(this, edad, nombre, dni, dir) || this;
        _this.edad = edad;
        _this.nombre = nombre;
        _this.departamento = departamento;
        _this.departamento = departamento;
        return _this;
    }
    return Empleado;
}(Persona));
var emplea = new Empleado("12", "juan", "d88347384x", "calle", "DEPARTAMENTO");
console.log(emplea.getDni);
var per;
per = emplea;
console.log(per);
console.log(emplea);
console.log(Persona.empresa);
console.log(Empleado.empresa);
//poliformismo   En programación orientada a objetos, el polimorfismo' o '
// se refiere a la propiedad por la que es posible enviar mensajes sintácticamente 
//iguales a objetos de tipos distintos. 
//El único requisito que deben cumplir los objetos que se utilizan de manera polimórfica 
//es saber responder al mensaje que se les envía.
var em = new Empleado("12dfdfdf", "maria", "d88347384x", "calle", "DEPARTAMENTO");
console.log(em);
console.log("********* ABSTRAC****************");
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("DEPARTAMENTO CLASE ABSTRACTA: " + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, "CONSTRUYE OBJETO ACOUUTING DEPART") || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("IMPRIME");
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log("GENERA INFORME.");
    };
    return AccountingDepartment;
}(Department));
var department; // ok to create a reference to an abstract type
//department = new Department(); // error: cannot create an instance of an abstract class
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
//department.generateReports(); // error: method doesn't exist on declared abstract type
