class Boxeador {
    public nombre: string;
    public fuerza: number;
    public energia: number;
    constructor(
        public nombre: string,
        public fuerza: number,
        public energia: number,

    ) {
        this.nombre = nombre;
        this.fuerza = fuerza;
        this.energia = energia;
    }
    golpear(): void {
        this.energia-=5;
        console.log(`${this.nombre} lanza un golpe`)
    }
    entrenar(): void {
        this.fuerza += 10;
        console.log(`${this.nombre} ha entrenado`)
    }
}

const rocky = new Boxeador("Racky Balboa", 80, 100);
const apollo = new Boxeador("Apollo Creed", 90, 100);

rocky.golpear();
console.log(apollo.fuerza);
apollo.entrenar();
apollo.entrenar();
console.log(apollo.fuerza);
apollo.golpear();
console.log(apollo.energia);