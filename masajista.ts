import { Jugador } from "./jugador";

export  class Masajista {
    private ListaPacientes: Jugador [];


    constructor(pListaPacientes: Jugador[]) {
        this.ListaPacientes = pListaPacientes;
    }
    tratarJugador(pNombre: Jugador): void {
        this.ListaPacientes.push(pNombre);
        console.log(pNombre, "  necesita masajes.");
    }

    altaJugador(pNombre: Jugador): void {
        for (let i: number = 0; i < this.ListaPacientes.length; i++ ){
            if (pNombre.getApellido() === this.ListaPacientes[i].getApellido()){
                this.ListaPacientes.splice(i, 1);
                console.log("El jugador: ", pNombre.getNombre(), " ya fue atendido.");
            }
        }
    }
}