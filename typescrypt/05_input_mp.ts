import PromptSync from 'prompt-sync';
const prompt = PromptSync();

let marca = prompt("Ingrese la marca de la moto (Yamaha, Honda, Kawasaki, Suzuki, BMW):");
let anioFabricacion = Number(prompt("Ingrese el año de fabricación:"));
let cilindrada = Number(prompt("Ingrese la cilindrada de la moto (cc):"));

if (marca === "Yamaha" || marca === "Honda" || marca === "Kawasaki" || marca === "Suzuki" || marca === "BMW") {
    if (anioFabricacion >= 2022 && cilindrada >= 600) {
        console.log(`La motocicleta ${marca} es un modelo reciente y de alta potencia (Ideal para viajes largos).`);
    } else if (anioFabricacion < 2022 && cilindrada >= 600) {
        console.log(`La motocicleta ${marca} es de alta potencia pero de un año anterior (Excelente opción de segunda mano).`);
    } else if (anioFabricacion >= 2022 && cilindrada < 600) {
        console.log(`La motocicleta ${marca} es un modelo reciente, ideal para la ciudad por su media/baja cilindrada.`);
    } else {
        console.log(`La motocicleta ${marca} es de un año anterior y de media/baja cilindrada (Económica y funcional).`);
    }
} else {
    console.log("Marca de motocicleta desconocida o fuera del catálogo principal de venta.");
}