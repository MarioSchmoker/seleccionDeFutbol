import { Incorporacion } from "./incorporacion" 
import { Jugador } from "./jugador"
import { Masajista } from "./masajista"
import { Entrenador } from "./entrenador";

let jugadorUno: Jugador = new Jugador ("Mariano" , "Suarez" , "jugador" , 11 , 85 , true);
let jugadorDos: Jugador = new Jugador ("Jorge" , "Gomez" , "jugador" , 9 , 73 , true);
let jugadorTres: Jugador = new Jugador ("Lucas" , "Mamani" , "jugador" , 10 , 95 , true);
let jugadorCuatro: Jugador = new Jugador ("Esteban" , "Arguello" , "jugador" , 22 , 82 , false);


let nuevaListaJugadores = [jugadorUno, jugadorDos, jugadorTres, jugadorCuatro];
let masajistaUno: Masajista = new Masajista (nuevaListaJugadores);

let entrenadorUno: Entrenador = new Entrenador ("Marcos" , "Gimenez" , "Entrenador" , nuevaListaJugadores);

masajistaUno.tratarJugador(jugadorDos);

entrenadorUno.titularizar(jugadorCuatro);

console.log (entrenadorUno);
console.log (jugadorUno);
console.log (masajistaUno);

