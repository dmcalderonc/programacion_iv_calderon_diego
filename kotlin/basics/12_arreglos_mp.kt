fun main(){
    val precios = arrayOf(30,50,80,100,60)
    println(precios[0])
    println(precios[2])
    println(precios[4])
    precios[4]=150
    println(precios[4])


    for(precio in precios){
        println("Precio")
        val precioDoble = precio*2
        println("Precio Doble $precioDoble")
        if (precioDoble>=150){
            val precioReducido = precioDoble-70
            println("Precio reducido: $precioReducido")
        }
    }
}
