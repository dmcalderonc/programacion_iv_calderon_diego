data class LlantaMoto(
    val presion: Int,
    val inflada: Boolean
)
data class Mecanico(
    val nombre: String,
    val bateria: Int
)
data class Moto(
    val gasolina: Int,
    val motorActivo: Boolean,
    val autorizacion: Boolean
)



fun main() {
    val llanta = LlantaMoto(80, true)
    if (llanta.presion >= 50 && llanta.inflada) {
        println("Diego Calderon puede salir en moto")
    }

    val calificacion = arrayOf(20, 45, 85, 30, 60)

    if (calificacion[2] > 70) {
        println("Peligro! Moto con alta vibracion")
    } else {
        println("Vibracion moderada")
    }


    val pruebas = arrayOf(80, 65, 90)
    val suma = pruebas[0] + pruebas[1] + pruebas[2]
    val promedio = suma / 3.0

    if (promedio >= 70) {
        println("Moto lista para entrega")
    } else {
        println("Moto en taller")
    }


    val mecanico = Mecanico("Mecanico Ayudante", 65)
    println("Nombre del mecanico: $mecanico.nombre")
    if (mecanico.bateria>= 80){
        println("Funcionamiento optimo")
    }else if (mecanico.bateria >=50){
        println("Funcionamiento normal")
    }else if (mecanico.bateria>=20){
        println("Bateria baja")
    }else{
        println("Estado critico")
    }


    val moto = Moto(120, true, false)

    if (moto.gasolina >= 100) {
        if (moto.motorActivo) {
            if (moto.autorizacion) {
                println("Venta Autorizada")
            } else {
                println("Diego Calderon no tiene autorizacion")
            }
        } else {
            println("Motor inactivo")
        }
    } else {

        println("Gasolina insuficiente")
    }
} 
