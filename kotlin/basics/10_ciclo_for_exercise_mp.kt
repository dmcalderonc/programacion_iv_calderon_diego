data class Moto(val nombre: String, val precio: Int)

fun main() {
    var presupuestoTotal = 0.0
    println("Presupuesto de Ventas")

    for (venta in 1..6) {
        val costoOriginal = venta * 25
        var descuento = 0.0

        if (costoOriginal >= 100) {
            descuento = costoOriginal * 0.20
        }

        val costoFinal = costoOriginal - descuento

        println("Venta $venta")
        println("Costo Original: $costoOriginal")
        println("Descuento: $descuento")
        println("Costo Final: $costoFinal")
        println("---")

        presupuestoTotal += costoFinal
    }

    println("Presupuesto total de ventas: %.2f pesos".format(presupuestoTotal))


    val motos = arrayOf(
        Moto("Yamaha MT-03", 30),
        Moto("Honda CB190R", 65),
        Moto("Suzuki Gixxer", 95),
        Moto("Kawasaki Ninja", 130),
        Moto("Bajaj Pulsar", 45),
        Moto("Diego", 89),
        Moto("Calderon", 75)
    )

    val precioVenta = 50
    for (moto in motos) {
        println("Moto: ${moto.nombre}")
        println("Precio: ${moto.precio}")
        when {
            moto.precio < 50 -> {
                println("Estado: INACTIVA")
                println("No se puede realizar la venta")
            }
            moto.precio < 80 -> {
                println("Estado: OPERATIVA")
            }
            moto.precio < 120 -> {
                println("Estado: ESTABLE")
            }
            else -> {
                println("Estado: ALTA GAMA")
            }
        }
        if (moto.precio >= precioVenta) {
            val restante = moto.precio - precioVenta
            println("Venta autorizada")
            println("Precio restante: $restante")
        }
    }
}
