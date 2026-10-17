let ahorroCliente = 1024;
let costoMoto = 2048;

while (ahorroCliente < costoMoto) {
    console.log("Ahorro actual del cliente: $", ahorroCliente);
    ahorroCliente += 256;
}

let cuota = 1;

while (cuota <= 10) {
    console.log("Pagando cuota mensual número: ", cuota);
    cuota++;
}

let intentoVenta = 0;
let ventaCerrada = 0;

while (intentoVenta < 10) {
    intentoVenta++;
    let exito = Math.random() < 0.5; 
    
    if (exito) {
        ventaCerrada++;
        console.log(`Atención al cliente ${intentoVenta}: ¡Venta cerrada!, Total de motos vendidas: ${ventaCerrada}`);
    } else {
        console.log(`Atención al cliente ${intentoVenta}: Solo estaba mirando. Total de motos vendidas: ${ventaCerrada}`);
    }
}

let exposiciones = 0;
do {
    exposiciones++;
    console.log(`Asistiendo a la exposición de motos número: ${exposiciones}`);
} while (exposiciones < 5);

interface Motocicleta {
    modelo: string;
    categoria: string;
    precio: number;
}

const inventarioEscaneado: Motocicleta[] = [
    { modelo: "Yamaha R1", categoria: "Deportiva", precio: 18000 },
    { modelo: "Kawasaki Ninja", categoria: "Deportiva", precio: 12000 },
    { modelo: "Harley-Davidson Iron", categoria: "Cruiser", precio: 9000 },
    { modelo: "Honda Navi", categoria: "Scooter", precio: 800 }
];

let indice = 0;
while (indice < inventarioEscaneado.length) {
    const moto = inventarioEscaneado[indice];
    
    // Si la moto es deportiva, la mostramos y pasamos a la siguiente iteración
    if (moto?.categoria === "Deportiva") {
        console.log(`Moto: ${moto.modelo}, Categoría: ${moto.categoria}, Precio: $${moto.precio}`);
        indice++;
        continue;
    }

    if (moto?.precio < 10000) {
        console.log(`Moto económica encontrada: ${moto.modelo}, Categoría: ${moto.categoria}, Precio: $${moto.precio}`);
        break;
    }

    console.log(`Moto: ${moto.modelo}, Categoría: ${moto.categoria}, Precio: $${moto.precio}`);
    indice++;
}