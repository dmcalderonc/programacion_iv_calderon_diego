import { StyleSheet, Text, View } from 'react-native'

const PASO = 1

export default function Index() {
  switch (PASO) {
    case 1:
      return <Paso1 />
    default:
      return (
        <View style={styles.centrado}>
          <Text>Paso {PASO}: crea el componente primero</Text>
        </View>
      )
  }
}

interface TarjetaMotoProps {
  modelo: string
  chasis: string
  motor: string
  precio: number
  marca?: string
}

function TarjetaMoto({ modelo, chasis, motor, precio, marca }: TarjetaMotoProps) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.nombreServidor}>{modelo}</Text>
      <Text style={styles.datoDireccion}>{chasis}:{precio}</Text>
      <Text style={styles.datoSistema}>{motor}</Text>
      <Text style={styles.datoSistema}>{marca ?? 'sin marca'}</Text>
    </View>
  )
}

function Paso1() {
  return (
    <View style={styles.fondo}>
      <Text style={styles.encabezado}>Inventario de motocicletas</Text>
      <TarjetaMoto
        modelo="MT-09"
        chasis="VIN-1002"
        motor="890 cc"
        precio={10500}
        marca="Yamaha"
      />
      <TarjetaMoto
        modelo="Ninja ZX-6R"
        chasis="VIN-2005"
        motor="636 cc"
        precio={11999}
        marca="Kawasaki"
      />
      <TarjetaMoto
        modelo="CBR600RR"
        chasis="VIN-3008"
        motor="599 cc"
        precio={12500}
        marca="Honda"
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
    padding: 20,
    paddingTop: 10,
  },
  encabezado: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1e3a8a',
    marginBottom: 16,
  },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  nombreServidor: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 4,
  },
  datoDireccion: {
    fontSize: 14,
    fontFamily: 'monospace',
    color: '#0284c7',
    marginBottom: 4,
  },
  datoSistema: {
    fontSize: 13,
    color: '#64748b',
  },
})