fun activarPortal() {
    println("Activando portales interdimensionales")
    println("conteo regresivo")
    println("3")
    println("2")
    println("1")
    println("Diego Calderon activo el portal")
}

fun viajar(dimension: String, viajes: Int, consumo: Int) {
    println("Viajando a $dimension")
    val total = viajes * consumo
    println("consumo total: $total")
}

fun calcularPrecio(precio: Double): Double {
    var descuento: Double = 0.0
    if (precio >= 100) {
        descuento = precio * 0.15
    }
    return descuento
}


fun calcularEnergiaTotal(energias: Array<Int>): Int {
    var total = 0
    for (energia in energias) {
        total += energia
        if (energia >= 100) {
            println("sobre Energia $energia")
        }
    }
    return total
}

fun main() {
    activarPortal()
    activarPortal()
    viajar("Tierra", 5, 4)
    viajar("Marte", 4, 7)
    
    val descuentoCliente = calcularPrecio(123.5)
    println("El cliente Calderon tiene este descuento: $descuentoCliente")
    val listaEnergias = arrayOf(30, 50, 80, 100, 60)

    val totalEnergia = calcularEnergiaTotal(listaEnergias)
    println("Energia total: $totalEnergia")
}