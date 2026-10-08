// condicionales

let nivel: number = 5;
if (nivel < 5){
    console.log("El charmander puede evolucionar a Charmeleon");
}


// condicionales dobles o dos caminos
if (nivel >= 16) {
    console.log("El charmander puede evolucionar a charizard");
} else {
     console.log("El charmander no puede evolucionar a charizard");
}


if (nivel >= 20) {
    console.log("El charmander puede evolucionar a charizard");
}else if(nivel >=8) {
    console.log("El charmander puede evolucionar a charizard");
} else {
     console.log("El charmander no puede evolucionar a charizard");
}



//condicion anidado

if (nivel >= 20) {
    console.log("El charmander puede evolucionar a charizard");
}else {
        if(nivel >=8) {
    console.log("El charmander puede evolucionar a charizard");
} else {
     console.log("El charmander no puede evolucionar a charizard");
}
}
    
nivel = 15;
let poder: number =25 
//condicional if con operadores logicos

if (nivel >= 8 && nivel > 16 && poder >=20) {
    console.log("El charmander puede evolucionar a charmeleon");
}else if(nivel >=16) {
    console.log("El charmander puede evolucionar a charizard");
} else {
     console.log("El charmander no puede evolucionar a charmeleon ni a charizard");
}


nivel = 5;
poder =56;
if (nivel >= 8 ||  poder >=20) {
    console.log("El charmander puede evolucionar a charmeleon");
}else if(nivel >=16) {
    console.log("El charmander puede evolucionar a charizard");
} else {
     console.log("El charmander no puede evolucionar a charmeleon ni a charizard");
}


/*
Desarrolla un programa en TypeScript que determine si un entrenador puede participar en la Liga Pokémon. Para ingresar, 
debe tener al menos 8 medallas, ser mayor o igual a 12 años y no estar suspendido. Si cumple estos requisitos, verifica 
mediante condicionales anidados que su Pokémon tenga nivel mínimo 40, vida mayor a 0 y sea de tipo Fuego, Agua o Eléctrico. 
Finalmente, clasifica al Pokémon como Maestro (nivel ≥ 80, ataque ≥ 90 y vida ≥ 100), Élite (nivel ≥ 60 y ataque ≥ 75 o defensa ≥ 80) 
o Avanzado (nivel ≥ 40, ataque ≥ 50 y vida > 0). Utiliza if, else if, else y operadores &&, || y !, mostrando un mensaje cuando no se 
cumplan los requisitos.
*/

let medallas: number = 15;
let edad: number = 13;
let suspendido: boolean = false; 
nivel = 65;
let vida: number = 85;
let tipo: string = "Fuego";
let ataque: number = 80;
let defensa: number = 70;

if (medallas >= 8 && edad >= 12 && !suspendido) {
    console.log("El entrenador cumple los requisitos y puede participar en la Liga Pokémon.");
    if (nivel >= 40 && vida > 0 && (tipo === "Fuego" || tipo === "Agua" || tipo === "Eléctrico")) {
        console.log("El Pokémon es apto para el combate.");
        if (nivel >= 80 && ataque >= 90 && vida >= 100) {
            console.log("Clasificación del Pokémon: Maestro");
        } else if (nivel >= 60 && (ataque >= 75 || defensa >= 80)) {
            console.log("Clasificación del Pokémon: Élite");
        } else if (nivel >= 40 && ataque >= 50 && vida > 0) {
            console.log("Clasificación del Pokémon: Avanzado");
        } else {
            console.log("El Pokémon participa, pero sus estadísticas no alcanzan el rango Avanzado.");
        }

    } else {
        console.log("No puede participar: El Pokémon no cumple con el nivel mínimo (40), vida mayor a 0 o tipo permitido (Fuego, Agua o Eléctrico).");
    }

} else {
    console.log("No puede participar: El entrenador no cumple con las medallas, la edad o se encuentra suspendido.");
}