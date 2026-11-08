const val MAX_STOCK = 50

fun main() {
    var motosEnExhibicion = 15
    println(motosEnExhibicion)
    println("Autor: Diego Calderón")
    
    motosEnExhibicion = 12
    println("Motos en exhibición")
    println(motosEnExhibicion)
    
    println("Tipos de variables en kotlin")
    var cilindraje: Int = 250
    var unidadesVendidas: Int = 4
    println("cilindraje : $cilindraje cc")
    println("unidadesVendidas: $unidadesVendidas")
    
    println("Tipo Integer o Entero")
    var numeroChasis: Long = 987654321000L
    println("numeroChasis: $numeroChasis")
    
    println("Tipo Float")
    var capacidadTanqueGalones: Float = 3.8f
    println("Capacidad Tanque : $capacidadTanqueGalones gal")
    
    println("Tipo Double")
    var precioVenta: Double = 3450.75
    println("precioVenta: $precioVenta")
    
    println("Tipo String")
    var modeloMoto: String = "Yamaha MT-03"
    var concesionario: String = "Motos Calderón"
    println("Modelo: $modeloMoto , concesionario: $concesionario")
    
    println("Tipo Boolean")
    var disponibleEntregaInmediata: Boolean = true
    println("disponibleEntregaInmediata: $disponibleEntregaInmediata")

    println("VAL CONST VAR")
    val asesorVentas = "Carlos Mendoza"
    val motosDisponiblesAlmacen = 8
    println("Nombre del asesor : $asesorVentas")
    println("motos Disponibles Almacen: $motosDisponiblesAlmacen")
    println("Constante Limite: $MAX_STOCK")
}