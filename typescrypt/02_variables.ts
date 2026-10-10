//constantes
const PI: number=3.141516;
const IVA: number=15;
const SERVICIO_API:string="apiService";
const ACTIVE: boolean = true;
console.log("PI: ", PI);
console.log("IVA: ", IVA);
console.log("SERVICIO_API: ", SERVICIO_API);
console.log("ACTIVE: ", ACTIVE);

//VARIABLES
//TEXT
let contador: number=0;
console.log(contador);
contador=5;
console.log(contador);
contador++;
console.log(contador);
contador+=5;
console.log(contador);
contador=contador+3;
console.log(contador);
let alumno: string="Pedro Perez";
let caducado: boolean=false;
console.log(alumno);
console.log(caducado);


let equipo : string[] = ["PIKACHU", "CHARMANDER", "BULBASAUR"];
console.log(equipo);

let pokemonCapturado: string | null = null;
let pokemonInicial: string | undefined;

let experienciaAcumulada: bigint = 9872398737392n;

// tipo simbolo
let pokemon1: symbol = Symbol("Pikachu");
console.log(pokemon1.description);
let pokemon2: symbol = Symbol("Pikachu");
console.log(pokemon2.description);
console.log(pokemon1 === pokemon2);


let pikachu:{
    nombre:string,
    nivel: number,
    vida: number,
    esLegendario: boolean;
}={
    nombre:"PIKACHU",
    nivel: 5,
    vida: 35,
    esLegendario: false,
};
console.log(pikachu);