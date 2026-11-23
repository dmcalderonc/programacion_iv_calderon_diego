abstract class Dispositivo{
    abstract fun activar()
}

class PortalInterdimencional : Dispositivo(){
    override fun activar(){
        println("Abriendo portal interdimencional")
    }
}

class Escudo: Dispositivo(){
    override fun activar(){
        println("Activando escudo protector")
    }
}

fun main(){
    val portal = PortalInterdimencional()
    portal.activar()
    val escudo= Escudo()
    escudo.activar()
    //var dispositivo = Dispositivo()
}