function sumarVentas(venta1: number, venta2: number): number {
    return venta1 + venta2;
}

const totalVentas: number = sumarVentas(15000, 8500);
console.log(`Total de ventas del día: $${totalVentas}`);

function mostrarConcesionaria(nombre: string): void {
    console.log(`Concesionaria activa: ${nombre}`);
    const motosDisponibles: string[] = ["Yamaha R1", "Kawasaki Ninja 400", "Ducati Panigale V4"];
    for (const moto of motosDisponibles) {
        console.log(`Moto en exhibición: ${moto}`);
    }
}

mostrarConcesionaria("Motos Calde Premium");

function registrarMecanico(nombre: string, añosExperiencia?: number): void {
    if (añosExperiencia) {
        console.log(`El mecánico ${nombre} está trabajando con ${añosExperiencia} años de experiencia.`);
    } else {
        console.log(`El mecánico ${nombre} ha comenzado su turno.`);
        añosExperiencia = 1;
        console.log(`Experiencia asignada por defecto: ${añosExperiencia} año(s)`);
    }
}

registrarMecanico("Carlos", 5);
registrarMecanico("Luis");

function registrarMecanico2(nombre: string, añosExperiencia: number = 1): void {
    console.log(`El mecánico ${nombre} está trabajando con ${añosExperiencia} año(s) de experiencia.`);
}

registrarMecanico2("Ana", 5);
registrarMecanico2("Roberto");

function potenciarMotor(caballosDeFuerza: number): number {
    return caballosDeFuerza * 2;
}

const potenciarMotorFlecha = (caballosDeFuerza: number): number => caballosDeFuerza * 2;

const potenciaOriginal: number = 50;
const potenciaModificada: number = potenciarMotor(potenciaOriginal);
console.log(`Potencia de fábrica: ${potenciaOriginal} CV, Potencia con turbo: ${potenciaModificada} CV`);

const potenciaModificadaFlecha: number = potenciarMotorFlecha(potenciaOriginal);
console.log(`Potencia de fábrica: ${potenciaOriginal} CV, Potencia con turbo (Flecha): ${potenciaModificadaFlecha} CV`);


function formatearDatoMoto(valor: number): string;
function formatearDatoMoto(valor: string): string;
function formatearDatoMoto(valor: boolean): string;

function formatearDatoMoto(valor: number | string | boolean): string {
    if (typeof valor === "number") {
        return "$" + valor.toLocaleString("es-MX", { minimumFractionDigits: 2 });
    }
    if (typeof valor === "boolean") {
        return valor ? "Sí" : "No";
    }
    return `"${valor}"`;
}

console.log(`Precio: ${formatearDatoMoto(125000.50)}`);
console.log(`¿Tiene frenos ABS?: ${formatearDatoMoto(true)}`);
console.log(`Estado: ${formatearDatoMoto("Disponible en tienda")}`);


function crearContadorInventario(inicio: number = 0) {
    let stock = inicio;
    return {
        ingresarMoto: () => ++stock,
        venderMoto: () => --stock,
        stockActual: () => stock,
        auditoriaReset: () => { stock = inicio; },
    };
}

const inventarioYamaha = crearContadorInventario();
const inventarioHonda = crearContadorInventario(10);

inventarioYamaha.ingresarMoto(); 
inventarioYamaha.venderMoto();   
inventarioYamaha.ingresarMoto(); 

console.log(`Stock actual Yamaha: ${inventarioYamaha.stockActual()}`);
console.log(`Stock actual Honda: ${inventarioHonda.stockActual()}`);

inventarioYamaha.auditoriaReset();
console.log(`Stock Yamaha tras auditoría: ${inventarioYamaha.stockActual()}`);