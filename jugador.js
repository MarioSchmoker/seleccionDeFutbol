"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Jugador = void 0;
var incorporacion_1 = require("./incorporacion");
var Jugador = /** @class */ (function (_super) {
    __extends(Jugador, _super);
    function Jugador(pNombre, pApellido, pCargo, pPosicion, pRendimiento, pEstado) {
        var _this = _super.call(this, pNombre, pApellido, pCargo) || this;
        _this.posicion = pPosicion;
        _this.rendimiento = pRendimiento;
        _this.estado = pEstado;
        return _this;
    }
    Jugador.prototype.getRendimiento = function () {
        return this.rendimiento;
    };
    Jugador.prototype.getEstado = function () {
        return this.estado;
    };
    Jugador.prototype.getPosicion = function () {
        return this.posicion;
    };
    Jugador.prototype.incorporar = function () {
        if (this.rendimiento > 70) {
            this.estado = true;
            console.log("Apto");
        }
        else {
            this.estado = false;
            console.log("No Apto");
        }
    };
    return Jugador;
}(incorporacion_1.Incorporacion));
exports.Jugador = Jugador;
