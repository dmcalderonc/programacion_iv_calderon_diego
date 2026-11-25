class MotoEncapsulada {
    private var gasolina = 100

    fun recargar(cantidad: Int) {
        if (cantidad > 0) {
            gasolina += cantidad
        } else {
            println("Cantidad no válida")
        }
    }

    fun mostrarGasolina() {
        println("Gasolina: $gasolina")
    }

    fun asignarGasolina(cantidad: Int) {
        if (cantidad >= 0) {
            gasolina = cantidad
        } else {
            println("La gasolina no puede ser negativa")
        }
    }
}

fun main() {
    val moto1 = MotoEncapsulada()
    moto1.recargar(50)
    moto1.mostrarGasolina()
    moto1.asignarGasolina(50)
    moto1.mostrarGasolina()
}
