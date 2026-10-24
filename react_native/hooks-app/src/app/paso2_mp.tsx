import { useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

type EstadoTelemetria = 'conectando' | 'ok' | 'sin_señal' | 'inactivo'

export default function Paso2mp() {
  const [rpm, setRpm] = useState<number | null>(null)
  const [estado, setEstado] = useState<EstadoTelemetria>('inactivo')
  const [activo, setActivo] = useState<boolean>(false)
  const [lecturas, setLecturas] = useState<number>(0)
  const [lecturasFallidas, setLecturasFallidas] = useState<number>(0)

  useEffect(() => {
    if (!activo) return

    const intervalo = setInterval(() => {
      setEstado('conectando')

      setTimeout(() => {
        const falla = Math.random() < 0.15
        if (falla) {
          setRpm(null)
          setEstado('sin_señal')
          setLecturasFallidas(p => p + 1)
        } else {
          const valorRpm = Math.floor(Math.random() * 190) + 10
          setRpm(valorRpm)
          setEstado('ok')
        }
        setLecturas(c => c + 1)
      }, 400)
    }, 500)

    return () => clearInterval(intervalo)
  }, [activo])

  const colorEstado: Record<EstadoTelemetria, string> = {
    conectando: '#1565c0',
    ok:         '#2e7d32',
    sin_señal:  '#c62828',
    inactivo:   '#757575',
  }

  const porcentajeFalla =
    lecturas > 0 ? (lecturasFallidas / lecturas * 100).toFixed(1) + '%' : '0.0%'

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Telemetría en Vivo — Yamaha MT-09</Text>

      <View style={styles.tarjeta}>
        <Text style={[styles.etiqueta, { color: colorEstado[estado] }]}>
          {estado.toUpperCase()}
        </Text>
        <Text style={styles.latencia}>
          {rpm !== null ? `${rpm} km/h` : '— km/h'}
        </Text>
        <Text style={styles.ciclos}>Muestras registradas: {lecturas}</Text>
        <Text style={styles.ciclos}>Fallos de sensor: {lecturasFallidas} ({porcentajeFalla})</Text>
        <Text style={styles.detalle}>VIN-1002 · Motor 890 cc · ECU Puerto OBD-II</Text>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.boton,
          activo ? styles.botonDetener : styles.botonIniciar,
          pressed && { opacity: 0.75 },
        ]}
        onPress={() => setActivo(a => !a)}
      >
        <Text style={styles.textoBoton}>
          {activo ? 'Detener escaneo' : 'Iniciar escaneo'}
        </Text>
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
  latencia: {
    color: '#18c015',
    fontSize: 15,
    fontWeight: '600',
  },
  botonIniciar: {
    backgroundColor: '#2e7d32',
  },
  botonDetener: {
    backgroundColor: '#c62828',
  },
  ciclos: {
    color: '#cc8f0d',
    fontSize: 15,
    fontWeight: '600',
  },
  etiqueta: {
    color: '#7b5214',
    fontSize: 15,
    fontWeight: '600',
  },
})
