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
exports.Entrenador = void 0;
var incorporacion_1 = require("./incorporacion");
var Entrenador = /** @class */ (function (_super) {
    __extends(Entrenador, _super);
    function Entrenador(pNombre, pApellido, pCargo, pListaJugadores) {
        var _this = _super.call(this, pNombre, pApellido, pCargo) || this;
        _this.listaJugadores = pListaJugadores;
        return _this;
    }
    Entrenador.prototype.titularizar = function (pJugador) {
        this.listaJugadores.push(pJugador);
        console.log(pJugador, " se incorpora al plantel titular.");
    };
    Entrenador.prototype.sacarDeListaDeTitulares = function (pJugador) {
        for (var i = 0; i < this.listaJugadores.length; i++) {
            if (pJugador.getApellido() === this.listaJugadores[i].getApellido()) {
                this.listaJugadores.splice(i, 1);
                console.log("El jugador ", pJugador.getNombre(), " ", pJugador.getApellido(), " pasa a formar como suplente.");
            }
        }
    };
    Entrenador.prototype.incorporar = function () {
    };
    return Entrenador;
}(incorporacion_1.Incorporacion));
exports.Entrenador = Entrenador;
