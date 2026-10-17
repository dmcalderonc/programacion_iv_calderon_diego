const preciosMotos: Record<string, number> = {
    "Yamaha MT-09": 10500,
    "Honda CBR600": 12000,
    "Kawasaki Z900": 9800
};

for (const modelo in preciosMotos) {
    console.log(`Modelo: ${modelo}, Precio: $${preciosMotos[modelo]}`);
}

const kilometrajes: Record<string, number> = {
    "Ducati Panigale": 1500,
    "BMW R1250GS": 5000,
    "Suzuki V-Strom": 8200
};

for (const moto in kilometrajes){
    // Corregí un poco el texto del console.log original para que no diga "Distancia" dos veces
    console.log(`Moto Usada: ${moto}, Kilometraje actual: ${kilometrajes[moto]} km`);
}