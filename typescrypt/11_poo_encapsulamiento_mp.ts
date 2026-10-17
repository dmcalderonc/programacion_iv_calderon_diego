class MotoElectrica {
    private bateria: number = 100; 

    pruebaDeManejo(desgaste: number): void {
        if (desgaste > 0) {
            this.bateria = Math.max(0, this.bateria - desgaste);
        }
    }

    consultarBateria(): number {
        return this.bateria;
    }
}

const liveWire = new MotoElectrica();

liveWire.pruebaDeManejo(50);
console.log(`Batería restante: ${liveWire.consultarBateria()}%`);

liveWire.pruebaDeManejo(25);
console.log(`Batería restante: ${liveWire.consultarBateria()}%`);