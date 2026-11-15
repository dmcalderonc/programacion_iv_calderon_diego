fun main(){
    println("Cotizacion de motos")
    println("¿nombre del cliente?")
    val nombre = readLine()
    println("Cantidad de motos:")
    val motos = readLine()!!.toInt()
    println("Costo por moto:")
    val costo = readLine()!!.toDouble()
    println("Presupuesto disponible:")
    val creditos = readLine()!!.toDouble()
    val costoTotal = motos * costo
    val saldo = creditos - costoTotal
    println("Reporte")
    println("Cliente: $nombre")
    println("Costo total: $costoTotal")
    println("Saldo: $saldo")
}
