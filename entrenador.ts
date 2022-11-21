import { Incorporacion } from "./incorporacion";
import { Jugador } from "./jugador";

export class Entrenador extends Incorporacion {
    private listaJugadores: Jugador[];

    constructor(pNombre: string, pApellido: string, pCargo: string, pListaJugadores: Jugador[]) {
        super(pNombre, pApellido, pCargo)
        this.listaJugadores = pListaJugadores;        
    }

    titularizar (pJugador: Jugador): void {
        this.listaJugadores.push(pJugador);
        console.log(pJugador," se incorpora al plantel titular.");
    }
    sacarDeListaDeTitulares(pJugador: Jugador): void {
        for (let i: number = 0; i < this.listaJugadores.length; i ++){
            if (pJugador.getApellido() === this.listaJugadores[i].getApellido()) {
                this.listaJugadores.splice(i, 1);
                console.log ("El jugador ", pJugador.getNombre(), " ", pJugador.getApellido(), " pasa a formar como suplente.");
            }
        }
    }
    incorporar(): void {
    }           

}