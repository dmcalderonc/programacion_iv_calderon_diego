open class Moto {
    open fun realizarViaje() {
        println("Realizando viaje general")
    }
}


class MotoCarreras : Moto() {
    override fun realizarViaje() {
        println("Corriendo en la pista y superando rivales")
    }
}


class MotoAventura : Moto() {
    override fun realizarViaje() {
        println("Recorriendo nuevos caminos de montaña")
    }
}

fun main() {
    val moto1: Moto = MotoCarreras()
    val moto2: Moto = MotoAventura()
    moto1.realizarViaje()
    moto2.realizarViaje()
}
