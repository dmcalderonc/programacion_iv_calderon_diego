fun main() {
    val motos = mutableListOf("Yamaha MT-03", "Honda CB190R", "Suzuki Gixxer")
    var option: Int

    do {
        println("\nTaller de Calderon Diego")
        println("1. Agregar Moto")
        println("2. Mostrar Motos")
        println("3. Modificar Moto")
        println("4. Eliminar Moto")
        println("5. Exit")
        print("Seleccione una opcion: ")


        option = readLine()!!.toInt()

        when (option) {
            1 -> {
                print("Nombre de la nueva moto: ")
                val nombre = readLine()!!
                motos.add(nombre)
                println("Moto incluida")
            }
            2 -> {
                println("Motos:")
                for ((i, moto) in motos.withIndex()) {
                    println("[$i] Moto: $moto")
                }
            }
            3 -> {
                println("Actualizar")
                print("Indice a modificar: ")
                val indice = readLine()!!.toInt()
                if (indice in motos.indices) {
                    print("Nuevo nombre: ")
                    val nuevoNombre = readLine()!!
                    motos[indice] = nuevoNombre
                    println("Moto actualizada")
                } else {
                    println("Indice no valido")
                }
            }
            4 -> {
                println("Eliminar")
                print("Indice a eliminar: ")
                val indice = readLine()!!.toInt()
                if (indice in motos.indices) {
                    motos.removeAt(indice)
                    println("Moto eliminada")
                } else {
                    println("Indice no valido")
                }
            }
            5 -> println("Saliendo del taller...")
            else -> println("Opcion no valida")
        }
    } while (option != 5)
}
