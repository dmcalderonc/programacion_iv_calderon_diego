import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export default function Paso1mp() {
  const [intentos, setIntentos] = useState<number>(0)
  const [verificado, setVerificado] = useState<boolean>(false)
  const [mensajeError, setmensajeError] = useState<string>('')

  function manejarReintento() {
    if (verificado) return
    const nuevoIntento = intentos + 1
    setIntentos(nuevoIntento)
    if (nuevoIntento >= 3) {
      setVerificado(true)
    }
  }

  function reiniciar() {
    setIntentos(0)
    setVerificado(false)
  }

  const estadoTexto = verificado
    ? '✓ Chasis VIN-1002 validado'
    : `Intento ${intentos} de 3 fallido`

  const colorEstado = verificado ? '#2e7d32' : '#c62828'

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Validación de Chasis e Inventario</Text>

      <View style={[styles.tarjeta, { borderColor: colorEstado }]}>
        <Text style={[styles.estado, { color: colorEstado }]}>
          {estadoTexto}
        </Text>
        <Text style={styles.detalle}>Yamaha MT-09 · VIN-1002:890cc</Text>
      </View>
      <Text style={[styles.detalle, { color: colorEstado }]}>
        {intentos > 0 && !verificado ? 'Error en Validación' : null}
      </Text>
      <Pressable
        style={({ pressed }) => [
          styles.boton,
          verificado ? styles.botonDeshabilitado : styles.botonActivo,
          pressed && !verificado && { opacity: 0.75 },
        ]}
        onPress={manejarReintento}
        disabled={verificado}
      >
        <Text style={styles.textoBoton}>
          {verificado ? 'Validado' : 'Reintentar validación'}
        </Text>
      </Pressable>

      <Pressable style={styles.botonSecundario} onPress={reiniciar}>
        <Text style={styles.textoSecundario}>Reiniciar simulación</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f5f5f5',
    gap: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  tarjeta: {
    width: '100%',
    padding: 16,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: '#fff',
    gap: 6,
  },
  estado: {
    fontSize: 15,
    fontWeight: '600',
  },
  detalle: {
    fontSize: 13,
    color: '#666',
  },
  boton: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  botonActivo: {
    backgroundColor: '#1565c0',
  },
  botonDeshabilitado: {
    backgroundColor: '#a5d6a7',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
  botonSecundario: {
    paddingVertical: 10,
  },
  textoSecundario: {
    color: '#1565c0',
    fontSize: 14,
  },
})