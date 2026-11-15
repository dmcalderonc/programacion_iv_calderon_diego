fun main(){
    println("Condicional If")

    println("Condicional simple o un camino")
    var gasolina = 80
    if (gasolina >= 50){
        println("Gasolina suficiente")
    }

    println("Condicional if else 2 caminos")
    gasolina = 70
    if (gasolina >= 50){
        println("Gasolina suficiente")
    } else {
        println("Gasolina insuficiente")
    }

    println("Condicional multiple")
    gasolina = 70
    if (gasolina >= 100){
        println("Gasolina Maxima")
    } else if (gasolina >= 50){
        println("puede arrancar")
    } else {
        println("Gasolina insuficiente")
    }

    println("Condicional anidado (Nested)")
    gasolina = 70
    var motorActivo = true
    if (gasolina >= 100){
        println("Gasolina suficiente")
        if (motorActivo){
            println("puede arrancar")
        }
    } else if (gasolina >= 50){
        println("Gasolina media")
        if (motorActivo){
            println("puede arrancar")
        }
    } else {
        println("Gasolina insuficiente")
    }
}
