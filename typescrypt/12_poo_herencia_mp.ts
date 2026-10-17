class MotocicletaEstandar {
    arrancarMotor(): void {
        console.log("El motor arranca con un sonido estándar");
    }
}

class MotoDeportiva extends MotocicletaEstandar {
    activarModoCarrera(): void {
        console.log("La deportiva ajusta la suspensión y el motor ruge a altas RPM");
    }
}

class MotoScooter extends MotocicletaEstandar {
    abrirBaulCarga(): void {
        console.log("El scooter abre su baúl automático para guardar el casco");
    }
}

const yamahaR1 = new MotoDeportiva();
yamahaR1.arrancarMotor();
yamahaR1.activarModoCarrera();

const hondaNavi = new MotoScooter();
hondaNavi.arrancarMotor();
hondaNavi.abrirBaulCarga();


class AsesorDeVentas {
    atenderCliente(): void {
        console.log("El asesor realiza una presentación básica del catálogo de motos")
    }
}

class AsesorPremium extends AsesorDeVentas {
    ofrecerPruebaManejoVIP(): void {
        console.log("El asesor premium ofrece una prueba de manejo en pista con equipo de carreras")
    }
}

class AsesorFinanciero extends AsesorDeVentas {
    aprobarCreditoDirecto(): void {
        console.log("El asesor financiero aprueba un crédito a 60 meses con 0% de entrada")
    }
}

const vendedorPremium = new AsesorPremium();
vendedorPremium.atenderCliente();
vendedorPremium.ofrecerPruebaManejoVIP();

const vendedorCredito = new AsesorFinanciero();
vendedorCredito.atenderCliente();
vendedorCredito.aprobarCreditoDirecto();