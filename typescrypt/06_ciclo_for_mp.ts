for (let i = 2; i < 50; i += 5) {
    console.log(`Prueba de manejo en curso. Kilometraje actual: ${i} km`);
}

for (let i = 40; i > 0; i -= 5) {
    console.log(`Promoción activa: Nos quedan ${i} motos en exhibición.`);
}

for (let i = 40; i > 0; i -= 5) {
    if (i === 20) {
        console.log("Se alcanzó el stock mínimo de seguridad (20 unidades). Se detienen las ventas masivas por hoy.");
        break;
    }

    if (i === 30) {
        console.log("El lote restante de 30 motos ya se encuentra reservado. Saltando revisión de este grupo.");
        continue;
    }

    console.log(`Unidades disponibles para venta directa al público: ${i}`);
}

const marcasMotos: string[] = ["Yamaha", "Honda", "Kawasaki", "Suzuki"];
for (let i = 0; i < marcasMotos.length; i++) {
    console.log(`Marca disponible: ${marcasMotos[i]}`);
}

for (const marca of marcasMotos) {
    console.log(`Moto de la marca: ${marca}`);
}

const letreroVenta: string = "Venta de Motos Calde";
for (const letra of letreroVenta) {
    console.log(`Letra: ${letra}`); 
}

interface Moto {
    nombre: string; 
    potencia: number;
    esGamaAlta: boolean;
}

const inventarioMotos: Moto[] = [ 
    {nombre: "Yamaha MT-09", potencia: 119, esGamaAlta: true},
    {nombre: "Honda CB500F", potencia: 47, esGamaAlta: false},
    {nombre: "Kawasaki Ninja H2", potencia: 228, esGamaAlta: true},
    {nombre: "Suzuki Gixxer 150", potencia: 14, esGamaAlta: false},
];

for (const moto of inventarioMotos) {
    console.log(`Modelo: ${moto.nombre}, Nivel de potencia (CV): ${moto.potencia}, ¿Es Gama alta?: ${moto.esGamaAlta}`);
}

interface MotoDeportiva {
    modelo: string;
    cilindraje: number; 
    tieneABS: boolean;
}

const motosDeportivas: MotoDeportiva[] = [ 
    {modelo: "Ducati Panigale V4", cilindraje: 1103, tieneABS: true},
    {modelo: "BMW S1000RR", cilindraje: 999, tieneABS: true},
    {modelo: "KTM Duke 390", cilindraje: 373, tieneABS: true},
    {modelo: "Italika RT250", cilindraje: 250, tieneABS: false},
    {modelo: "Aprilia RS 660", cilindraje: 659, tieneABS: true}, 
];

for (const moto of motosDeportivas) {
    console.log(`Moto Deportiva: ${moto.modelo}, Cilindraje: ${moto.cilindraje}cc, Tiene Frenos ABS: ${moto.tieneABS}`);
}

const accesoriosMoto: string[] = ["Casco Integral", "Guantes con Protección", "Chaqueta de Cuero", "Botas Impermeables", "Intercomunicador Bluetooth"];

accesoriosMoto.forEach((accesorio, index) => {
    console.log(`Accesorio en vitrina ${index + 1}: ${accesorio}`);
});

accesoriosMoto.map((accesorio, index) => {
    console.log(`Accesorio en promoción ${index + 1}: ${accesorio}`);
});