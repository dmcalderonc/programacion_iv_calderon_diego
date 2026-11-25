abstract class DispositivoMoto{
    abstract fun activar()
}

class EncendidoElectronico : DispositivoMoto(){
    override fun activar(){
        println("Encendiendo la moto")
    }
}

class FrenoABS: DispositivoMoto(){
    override fun activar(){
        println("Activando freno ABS")
    }
}

fun main(){
    val encendido = EncendidoElectronico()
    encendido.activar()
    val freno= FrenoABS()
    freno.activar()
    //var dispositivo = DispositivoMoto()
}
