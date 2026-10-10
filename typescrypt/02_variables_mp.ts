// CONSTANTES
const DESCUENTO_MAXIMO: number = 0.10; 
const IVA: number = 15; 
const SERVICIO_API: string = "apiInventarioMotos";
const LOCAL_ABIERTO: boolean = true; 
console.log("DESCUENTO_MAXIMO: ", DESCUENTO_MAXIMO);
console.log("IVA: ", IVA);
console.log("SERVICIO_API: ", SERVICIO_API);
console.log("LOCAL_ABIERTO: ", LOCAL_ABIERTO);

// VARIABLES
// Números y operaciones
let motosVendidas: number = 0; 
console.log(motosVendidas);
motosVendidas = 5;
console.log(motosVendidas);
motosVendidas++;
console.log(motosVendidas);
motosVendidas += 5;
console.log(motosVendidas);
motosVendidas = motosVendidas + 3;
console.log(motosVendidas);

// Cadenas y Booleanos
let cliente: string = "Carlos Mendoza"; 
let garantiaExpirada: boolean = false; 
console.log(cliente);
console.log(garantiaExpirada);


let marcasDisponibles: string[] = ["YAMAHA", "HONDA", "KAWASAKI"]; 
console.log(marcasDisponibles);


let motoSeleccionada: string | null = null; 
let motoEnReserva: string | undefined; 


let ingresosHistoricosTotales: bigint = 9872398737392n; 
let chasis1: symbol = Symbol("YAMAHA-MT09");
console.log(chasis1.description);
let chasis2: symbol = Symbol("YAMAHA-MT09");
console.log(chasis2.description);
console.log(chasis1 === chasis2); 

let motocicleta: {
    marca: string,
    cilindrada: number,
    precio: number,
    tieneABS: boolean;
} = {
    marca: "YAMAHA MT-09",
    cilindrada: 890,
    precio: 12500,
    tieneABS: true,
};
console.log(motocicleta);