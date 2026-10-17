class Motocicleta {
    acelerar(): void {
        console.log("Aceleración de prueba estándar");
    }
}

class MotoDeportiva extends Motocicleta {
    override acelerar(): void {
        console.log("La moto deportiva acelera con máxima potencia y agresividad");
    }
}

class MotoScooter extends Motocicleta {
     override acelerar(): void {
        console.log("El scooter acelera con agilidad, suavidad y eficiencia");
    }
}

const motosEnExhibicion: Motocicleta[] = [
    new MotoDeportiva(),
    new MotoScooter(),
];

console.log(motosEnExhibicion);

motosEnExhibicion.forEach(moto => moto.acelerar());