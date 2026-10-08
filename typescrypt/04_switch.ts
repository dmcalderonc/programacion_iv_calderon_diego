type Personaje =
  | "Luke Skywaker"
  | "Darth Vader"
  | "Laia Organa"
  | "Han Solo"
  | "Obiwan"
  | "Yoda";

let personaje: Personaje = "Luke Skywaker";
let nivelFuerza: number = 100;
let tieneSable: boolean = true;

switch (personaje) {
    case 'Luke Skywaker':
        console.log("Luke Skywaker es un jedi");
        if (nivelFuerza > 80 && tieneSable) {
            console.log("Luke es un Jedi poderoso");
        } else {
            console.log("Luke no es un Jedi poderoso");
        }
        break;
    case 'Obiwan':
        console.log("Obiwan es un maestro Jedi");
        if (nivelFuerza > 70 && tieneSable) {
            console.log("Obiwan es un Jedi poderoso");
        } else {
            console.log("Obiwan no es un Jedi poderoso");
        }
        break;
    case 'Yoda':
        console.log("Yoda es un maestro Jedi");
        if (nivelFuerza > 90 && tieneSable) {
            console.log("Yoda es un Jedi poderoso");
        } else {
            console.log("Yoda no es un Jedi poderoso");
        }
        break;
    case 'Darth Vader':
        console.log("Darth Vader es un sith");
        break;
    case 'Laia Organa':
        console.log("Laia Organa es una princesa");
        break;
    case 'Han Solo':
        console.log("Han Solo es un contrabandista");
        break;
    default:
        console.log("Personaje desconocido");
}