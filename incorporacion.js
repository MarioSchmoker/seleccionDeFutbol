"use strict";
exports.__esModule = true;
exports.Incorporacion = void 0;
var Incorporacion = /** @class */ (function () {
    function Incorporacion(pNombre, pApellido, pCargo) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.cargo = pCargo;
    }
    Incorporacion.prototype.getNombre = function () {
        return this.nombre;
    };
    Incorporacion.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Incorporacion.prototype.getApellido = function () {
        return this.apellido;
    };
    Incorporacion.prototype.setApellido = function (pApellido) {
        this.apellido = pApellido;
    };
    return Incorporacion;
}());
exports.Incorporacion = Incorporacion;
