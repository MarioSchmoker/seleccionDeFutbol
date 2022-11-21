export abstract class Incorporacion {
    protected nombre: string;
    protected apellido: string;
    protected cargo: string;

 constructor (pNombre: string, pApellido: string, pCargo: string){
    this.nombre = pNombre;
    this.apellido = pApellido;
    this.cargo = pCargo;
    }
    getNombre(): string {
        return this.nombre;
    }
    setNombre (pNombre: string): void {
        this.nombre = pNombre;
    }

    getApellido(): string{
        return this.apellido;
    }
    setApellido(pApellido: string): void {
        this.apellido = pApellido;
    }
    abstract incorporar (): void;
    }