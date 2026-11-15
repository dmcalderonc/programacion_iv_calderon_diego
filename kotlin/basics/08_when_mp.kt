fun main(){
    val modelo =2
    when(modelo){
        1->println("Modelo: Yamaha MT-03")
        2->println("Modelo: Honda CB190R")
        3->println("Modelo: Suzuki Gixxer")
        else ->println("Modelo no disponible")
    }

    print("Incluya el dia (1-7): ")
    val dia= readLine()!!.toInt()
    when(dia){
        1,2,3,4,5->println("Dia de venta")
        6,7->println("Dia de descanso")
        else -> println("Dìa invalido")
    }

    print("Ingrese el precio de la moto: ")
    val precio= readLine()!!.toInt()
    when(precio){
        in 0..39->println("Precio bajo")
        in 40..79->println("Precio medio")
        in 80..100->println("Precio alto")
        else -> println("Precio fuera del rango")
    }


    val precioMoto = 80
    val motorActivo = true
    val anticipo = 40

    when {
        precioMoto >= anticipo && motorActivo -> {
            val restante = precioMoto - anticipo
            println("Venta Autorizada")
            println("Precio restante: $restante")
        }
        precioMoto < anticipo && motorActivo -> {
            println("Precio Insuficiente")
        }
        !motorActivo -> {
            println("El motor esta apagado")
        }
    } 
}
