// app/index.tsx
import { StyleSheet, Text, View } from 'react-native'

const PASO = 1.1

function Index() {
  switch (PASO) {
    case 1.1:
      return <Paso1Simpson />
    default:
      return (
        <View style={styles.centrado}>
          <Text>Paso {PASO}: crea el componente primero</Text>
        </View>
      )
  }
}

// ─── Paso 1 — Props tipadas ──────────────────────────────────────────

interface TarjetaPersonajeProps {
  nombre: string
  edad: number | string // Acepta tanto número como texto
  ocupacion: string
  frase?: string // Opcional para que tenga sentido el 'sin frase'
}

function TarjetaPersonaje({ nombre, edad, ocupacion, frase }: TarjetaPersonajeProps) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.nombrePersonaje}>{nombre}</Text>
      <Text style={styles.datoEdad}>Edad: {edad} años</Text>
      <Text style={styles.datoOcupacion}>Ocupación: {ocupacion}</Text>
      <Text style={styles.datoFrase}>"{frase ?? 'sin frase'}"</Text>
    </View>
  )
}

export default function Paso1Simpson() {
  return (
    <View style={styles.fondo}>
      <Text style={styles.encabezado}>Inventario de Personajes</Text>
      <TarjetaPersonaje
        nombre="Homero Simpson"
        edad={39}
        ocupacion="Inspector de seguridad"
        frase="¡D'oh!"
      />
      <TarjetaPersonaje
        nombre="Marge Simpson"
        edad={36}
        ocupacion="Ama de casa"
        frase="Mmm... homie"
      />
      <TarjetaPersonaje
        nombre="Bart Simpson"
        edad={10}
        ocupacion="Estudiante"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  centrado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fondo: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  encabezado: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 16,
    textAlign: 'center',
  },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
    elevation: 2, // sombra en Android
    shadowColor: '#000', // sombra en iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  nombrePersonaje: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  datoEdad: {
    fontSize: 14,
    color: '#475569',
    marginTop: 4,
  },
  datoOcupacion: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 2,
  },
  datoFrase: {
    fontSize: 13,
    fontStyle: 'italic',
    color: '#0284c7',
    marginTop: 6,
  },
})