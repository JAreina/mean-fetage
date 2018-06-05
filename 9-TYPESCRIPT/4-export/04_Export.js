"use strict";
exports.__esModule = true;
var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.sumar = function (s1, s2) {
        return s1 + s2;
    };
    return Calculadora;
}());
exports.Calculadora = Calculadora;
var Saludador = /** @class */ (function () {
    function Saludador() {
    }
    Saludador.prototype.saludar = function (nombre) {
        return "Hola " + nombre;
    };
    return Saludador;
}());
exports.Saludador = Saludador;
