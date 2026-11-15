fun main() {
    println("Inputs de terminal readline")
    println("Como te llamas")


    val nombre = readLine()

    println("Welcome al concesionario : $nombre")


    println("Motos en exhibicion")
    val motosExhibicion = readLine()!!.toInt()
    println("Motos en almacen")
    val motosAlmacen = readLine()!!.toInt()
    val total = motosExhibicion+motosAlmacen
    println("Total de motos: $total")


    println("Calculadora de Ventas")
    val ventasIniciales = readLine()!!.toInt()
    println("Ventas Canceladas: ")
    val ventasCanceladas = readLine()!!.toInt()
    val ventasNetas = ventasIniciales- ventasCanceladas
    println("Ventas Netas: $ventasNetas")



}
