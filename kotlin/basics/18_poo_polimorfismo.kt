open class Robot {
    open fun ejecutarMision() {
        println("Ejecutando mision general")
    }
}


class RobotCombate : Robot() {
    override fun ejecutarMision() {
        println("Defendiendo la base y atacando objetivos")
    }
}


class RobotExplorador : Robot() {
    override fun ejecutarMision() {
        println("Explorando nuevos planetas")
    }
}

fun main() {
    val robot1: Robot = RobotCombate()
    val robot2: Robot = RobotExplorador()
    robot1.ejecutarMision()
    robot2.ejecutarMision()
}