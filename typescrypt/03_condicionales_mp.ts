// CONDICIONALES SIMPLES
let cilindrada: number = 150;

if (cilindrada < 250) {
    console.log("La motocicleta es apta para la ciudad y consumo económico.");
}


// CONDICIONALES DOBLES (DOS CAMINOS)
if (cilindrada >= 600) {
    console.log("La motocicleta requiere licencia especial tipo A.");
} else {
     console.log("La motocicleta puede conducirse con licencia estándar.");
}


// CONDICIONALES MÚLTIPLES (ELSE IF)
if (cilindrada >= 1000) {
    console.log("Es una motocicleta de categoría Superbike (Alta gama).");
} else if (cilindrada >= 300) {
    console.log("Es una motocicleta de categoría Deportiva/Media.");
} else {
     console.log("Es una motocicleta de categoría Urbana/Baja.");
}


// CONDICIONALES ANIDADOS
if (cilindrada >= 1000) {
    console.log("Es una motocicleta de categoría Superbike (Alta gama).");
} else {
    if (cilindrada >= 300) {
        console.log("Es una motocicleta de categoría Deportiva/Media.");
    } else {
        console.log("Es una motocicleta de categoría Urbana/Baja.");
    }
}
    
cilindrada = 250;
let precio: number = 3500;

// CONDICIONALES CON OPERADORES LÓGICOS (AND &&)
if (cilindrada >= 150 && cilindrada <= 400 && precio <= 4000) {
    console.log("Es una excelente opción de entrada para principiantes.");
} else if (cilindrada >= 600) {
    console.log("Es una moto para pilotos experimentados.");
} else {
     console.log("No cumple con los criterios de entrada ni de experto.");
}

// CONDICIONALES CON OPERADORES LÓGICOS (OR ||)
cilindrada = 125;
precio = 1500;
let enLiquidacion: boolean = true;

if (cilindrada <= 150 || enLiquidacion) {
    console.log("Aplica para el descuento especial por movilidad urbana o liquidación.");
} else if (cilindrada >= 600) {
    console.log("Aplica para financiamiento premium.");
} else {
     console.log("Se aplica el precio de lista estándar.");
}


/*
Desarrolla un programa en TypeScript que determine si un cliente puede aplicar a un crédito vehicular para una moto. 
Para ingresar, debe tener un historial crediticio (score) de al menos 700 puntos, ser mayor o igual a 18 años y no 
estar reportado por mora. Si cumple estos requisitos, verifica mediante condicionales anidados que la moto seleccionada 
tenga un precio mínimo de $4000, haya stock disponible (> 0) y sea de marca YAMAHA, HONDA o KAWASAKI. 
Finalmente, clasifica el crédito como Platinum (precio ≥ 15000, entrada ≥ 5000 y score ≥ 800), Élite/Gold 
(precio ≥ 8000 y (entrada ≥ 2500 o sueldo mensual ≥ 1500)) o Estándar/Silver (precio ≥ 4000, entrada ≥ 1000 y stock > 0). 
Utiliza if, else if, else y operadores &&, || y !, mostrando un mensaje cuando no se cumplan los requisitos.
*/

let scoreCrediticio: number = 750;
let edadCliente: number = 25;
let reportadoPorMora: boolean = false; 
let precioMoto: number = 9500;
let stockMoto: number = 2;
let marcaMoto: string = "HONDA";
let entradaDada: number = 3000;
let sueldoMensual: number = 1200;

if (scoreCrediticio >= 700 && edadCliente >= 18 && !reportadoPorMora) {
    console.log("El cliente cumple los requisitos pre-aprobados para el crédito vehicular.");
    
    if (precioMoto >= 4000 && stockMoto > 0 && (marcaMoto === "YAMAHA" || marcaMoto === "HONDA" || marcaMoto === "KAWASAKI")) {
        console.log("La motocicleta seleccionada es apta para financiamiento.");
        
        if (precioMoto >= 15000 && entradaDada >= 5000 && scoreCrediticio >= 800) {
            console.log("Clasificación del crédito: Plan Platinum");
        } else if (precioMoto >= 8000 && (entradaDada >= 2500 || sueldoMensual >= 1500)) {
            console.log("Clasificación del crédito: Plan Gold");
        } else if (precioMoto >= 4000 && entradaDada >= 1000 && stockMoto > 0) {
            console.log("Clasificación del crédito: Plan Silver");
        } else {
            console.log("El crédito procede, pero los montos no alcanzan el Plan Silver mínimo. Requiere mayor entrada.");
        }

    } else {
        console.log("Crédito denegado: La motocicleta no cumple con el precio mínimo ($4000), no hay stock o la marca no está en el convenio (Yamaha, Honda, Kawasaki).");
    }

} else {
    console.log("Crédito denegado: El cliente no cumple con el score crediticio, la edad mínima o se encuentra reportado por mora.");
}