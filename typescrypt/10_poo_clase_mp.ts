class Motocicleta {
    public modelo: string;
    public potencia: number;
    public combustible: number;
    
    constructor(
        public modelo: string,
        public potencia: number,
        public combustible: number,

    ) {
        this.modelo = modelo;
        this.potencia = potencia;
        this.combustible = combustible;
    }
    
    pruebaDeManejo(): void {
        this.combustible -= 5;
        console.log(`El cliente realiza una prueba de manejo en la ${this.modelo}`)
    }
    
    instalarMejoras(): void {
        this.potencia += 10;
        console.log(`La ${this.modelo} ha recibido mejoras de rendimiento en el taller`)
    }
}

const yamaha = new Motocicleta("Yamaha R1", 80, 100);
const ducati = new Motocicleta("Ducati Panigale", 90, 100);

yamaha.pruebaDeManejo();
console.log(`Potencia actual de la Ducati: ${ducati.potencia}`);

ducati.instalarMejoras();
ducati.instalarMejoras();

console.log(`Potencia de la Ducati tras mejoras: ${ducati.potencia}`);

ducati.pruebaDeManejo();
console.log(`Nivel de combustible de la Ducati: ${ducati.combustible}`);