fun arrancarMoto() {
    println("Arrancando motos del concesionario")
    println("conteo regresivo")
    println("3")
    println("2")
    println("1")
    println("Diego Calderon arranco la moto")
}

fun viajar(modelo: String, viajes: Int, consumo: Int) {
    println("Viajando en $modelo")
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


fun calcularGasolinaTotal(gasolinas: Array<Int>): Int {
    var total = 0
    for (gasolina in gasolinas) {
        total += gasolina
        if (gasolina >= 100) {
            println("sobre Gasolina $gasolina")
        }
    }
    return total
}

fun main() {
    arrancarMoto()
    arrancarMoto()
    viajar("Yamaha MT-03", 5, 4)
    viajar("Honda CB190R", 4, 7)

    val descuentoCliente = calcularPrecio(123.5)
    println("El cliente Calderon tiene este descuento: $descuentoCliente")
    val listaGasolinas = arrayOf(30, 50, 80, 100, 60)

    val totalGasolina = calcularGasolinaTotal(listaGasolinas)
    println("Gasolina total: $totalGasolina")
}
