"use strict";
exports.__esModule = true;
exports.Masajista = void 0;
var Masajista = /** @class */ (function () {
    function Masajista(pListaPacientes) {
        this.ListaPacientes = pListaPacientes;
    }
    Masajista.prototype.tratarJugador = function (pNombre) {
        this.ListaPacientes.push(pNombre);
        console.log(pNombre, "  necesita masajes.");
    };
    Masajista.prototype.altaJugador = function (pNombre) {
        for (var i = 0; i < this.ListaPacientes.length; i++) {
            if (pNombre.getApellido() === this.ListaPacientes[i].getApellido()) {
                this.ListaPacientes.splice(i, 1);
                console.log("El jugador: ", pNombre.getNombre(), " ya fue atendido.");
            }
        }
    };
    return Masajista;
}());
exports.Masajista = Masajista;
