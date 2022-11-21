import {Incorporacion} from "./incorporacion"

export class Jugador extends Incorporacion {
    private posicion: number;
    private rendimiento: number;
    private estado: boolean;
    

 constructor (pNombre: string, pApellido: string, pCargo:string, pPosicion: number, pRendimiento: number, pEstado: boolean) {
    super (pNombre, pApellido, pCargo);
    this.posicion = pPosicion;
    this.rendimiento = pRendimiento;
    this.estado = pEstado;

    }
    getRendimiento(): number {
        return this.rendimiento;
    }
    getEstado(): boolean {
        return this.estado;
    }
    getPosicion(): number {
        return this.posicion;
    }
     
    incorporar(): void {
        if (this.rendimiento > 70){
            this.estado = true;
            console.log ("Apto")
        }else {
            this.estado = false;
            console.log ("No Apto")
        }
    }           
}