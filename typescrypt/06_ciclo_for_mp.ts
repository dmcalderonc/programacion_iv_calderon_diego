//ciclo for
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