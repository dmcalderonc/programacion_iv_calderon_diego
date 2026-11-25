open class Vehiculo(val nombre: String) {
    fun mostrarNombre() {
        println("Vehiculo: $nombre")
    }
}

class Motocicleta(nombre: String, val cilindraje: Int) : Vehiculo(nombre) {
    fun mostrarCilindraje() {
        println("Cilindraje: $cilindraje")
    }
}

fun main() {
    val moto = Motocicleta("Moto Calderon", 150)
    moto.mostrarNombre()
    moto.mostrarCilindraje()
}
