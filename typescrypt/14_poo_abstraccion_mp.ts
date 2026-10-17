abstract class VehiculoDosRuedas {
    abstract realizarPrueba(): void; 
}

class MotoPista extends VehiculoDosRuedas {
    realizarPrueba(): void {
        console.log("La moto de pista acelera de 0 a 100 km/h en 3 segundos en la pista de pruebas");
    }
}

class MotoUrbana extends VehiculoDosRuedas {
    realizarPrueba(): void {
        console.log("La moto urbana sortea los obstáculos simulados de tráfico con gran agilidad");
    }
}

const inventarioPruebas: VehiculoDosRuedas[] = [
    new MotoPista(),
    new MotoUrbana()
];

console.log(inventarioPruebas);
inventarioPruebas.forEach(moto => moto.realizarPrueba());

abstract class TipoFinanciamiento {
    abstract procesarAprobacion(): void;
}

class FinanciamientoDirecto extends TipoFinanciamiento {
    procesarAprobacion(): void {
        console.log("Crédito directo con la concesionaria aprobado a 24 meses sin intereses");
    }
}

class FinanciamientoBancario extends TipoFinanciamiento {
    procesarAprobacion(): void {
        console.log("Crédito bancario aprobado y fondeado con tasa preferencial del 10%");
    }
}

const tramitesPendientes: TipoFinanciamiento[] = [
    new FinanciamientoDirecto(),
    new FinanciamientoBancario()
];

console.log(tramitesPendientes);
tramitesPendientes.forEach(tramite => tramite.procesarAprobacion());