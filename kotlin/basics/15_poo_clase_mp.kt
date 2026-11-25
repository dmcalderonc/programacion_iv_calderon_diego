class Moto {
    var modelo = ""
    var gasolina = 0
}

class Llanta(
    var tipo: String,
    var rotaciones: Int = 0
) {
    fun girar() {
        println("Girando para avanzar en la carretera")
    }

    fun CalderonPuedeArrancar(gasolina: Int = 0) {
        val potencia: Int = gasolina * rotaciones
        if (potencia >= 0) {
            println("Llanta $tipo tiene potencia para arrancar")
        } else {
            println("Llanta $tipo no tiene potencia para arrancar")
        }
    }
}

fun main() {
    val moto1 = Moto()
    moto1.modelo = "Moto de Yamaha"
    moto1.gasolina = 100

    val moto2 = Moto()
    moto2.modelo = "Moto de Honda"
    moto2.gasolina = 60

    println("${moto1.modelo}: ${moto1.gasolina}")
    println("${moto2.modelo}: ${moto2.gasolina}")

    val llanta1 = Llanta("Delantera", 5)
    val llanta2 = Llanta("Trasera", 15)

    llanta1.girar()
    llanta2.girar()

    println(llanta1.tipo)
    println(llanta2.tipo)

    llanta1.CalderonPuedeArrancar(4)
    llanta1.CalderonPuedeArrancar(-5)
}
