"use strict";
exports.__esModule = true;
//Importando las clases de una en una
var _04_Export_1 = require("./04_Export");
var _04_Export_2 = require("./04_Export");
var calculadora = new _04_Export_1.Calculadora();
var saludador = new _04_Export_2.Saludador();
console.log(calculadora.sumar(10, 20));
console.log(saludador.saludar("Luis Ramón"));
//Importando un fichero entero
var movida = require("./04_Export");
var calculadora2 = new movida.Calculadora();
