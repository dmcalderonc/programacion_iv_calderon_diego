fun calcularTotal(costos: List<Int>): Int {
    var total = 0
    for (costo in costos) {
        total += costo
        if (costo > 150) {
            println("Refaccion costosa")
        }
    }
    return total
}

fun main() {
    val modelos = listOf("Yamaha MT-03", "Honda CB190R", "Suzuki Gixxer")
    var interacion = 1

    for (modelo in modelos) {
        println("Modelo $interacion : $modelo")
        interacion++
    }

    val costos = listOf(100, 150, 200, 80, 120)
    val total = calcularTotal(costos)
    println("Costo total de refacciones de Diego Calderon : $total")
}
