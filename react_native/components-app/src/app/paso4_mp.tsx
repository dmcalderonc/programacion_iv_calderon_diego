import { StyleSheet, SafeAreaView, ScrollView, View, Text } from 'react-native';

const PASO = 4.1

export default function Index() {
  switch (PASO) {
    case 4.1:
      return <Paso4mp />
    default:
      return (
        <View style={styles.centrado}>
          <Text>Paso {PASO}: crea el componente primero</Text>
        </View>
      )
  }
}

const MOTOS_DEMO = [
  { id: '1',  modelo: 'MT-09',        chasis: 'VIN-1002', marca: 'Yamaha',   descuento: 48, reserva: 62 },
  { id: '2',  modelo: 'MT-07',        chasis: 'VIN-1003', marca: 'Yamaha',   descuento: 51, reserva: 58 },
  { id: '3',  modelo: 'Ninja ZX-6R',  chasis: 'VIN-2005', marca: 'Kawasaki', descuento: 12, reserva: 74 },
  { id: '4',  modelo: 'Ninja 400',    chasis: 'VIN-2006', marca: 'Kawasaki', descuento: 8,  reserva: 71 },
  { id: '5',  modelo: 'Duke 390',     chasis: 'VIN-3001', marca: 'KTM',      descuento: 4,  reserva: 18 },
  { id: '6',  modelo: 'CBR600RR',     chasis: 'VIN-4010', marca: 'Honda',    descuento: 89, reserva: 45 },
  { id: '7',  modelo: 'CBR1000RR-R',  chasis: 'VIN-4011', marca: 'Honda',    descuento: 92, reserva: 47 },
  { id: '8',  modelo: 'CB500F',       chasis: 'VIN-4012', marca: 'Honda',    descuento: 3,  reserva: 12 },
  { id: '9',  modelo: 'Panigale V4',  chasis: 'VIN-5001', marca: 'Ducati',   descuento: 6,  reserva: 9  },
  { id: '10', modelo: 'GSX-R750',     chasis: 'VIN-6020', marca: 'Suzuki',   descuento: 22, reserva: 38 },
  { id: '11', modelo: 'R1250GS',      chasis: 'VIN-7050', marca: 'BMW',      descuento: 2,  reserva: 21 },
  { id: '12', modelo: 'S1000RR',      chasis: 'VIN-7070', marca: 'BMW',      descuento: 15, reserva: 33 },
]

interface BarraNivelProps {
  porcentaje: number
  etiqueta: string
}

function BarraNivel({ porcentaje, etiqueta }: BarraNivelProps) {
  const color = porcentaje > 85 ? '#c62828'
              : porcentaje > 60 ? '#f57f17'
              : '#2e7d32'
  return (
    <View style={estilos4.barraFila}>
      <Text style={estilos4.barraEtiqueta}>{etiqueta}</Text>
      <View style={estilos4.barraFondo}>
        <View style={[estilos4.barraRelleno, { width: `${porcentaje}%` as any, backgroundColor: color }]} />
      </View>
      <Text style={[estilos4.barraPct, { color }]}>{porcentaje}%</Text>
    </View>
  )
}

function TarjetaInventario({ modelo, chasis, marca, descuento, reserva }: typeof MOTOS_DEMO[0]) {
  return (
    <View style={estilos4.nodo}>
      <View style={estilos4.nodoEncabezado}>
        <Text style={estilos4.nodoNombre}>{modelo}</Text>
        <Text style={estilos4.nodoIp}>{chasis}</Text>
      </View>
      <Text style={estilos4.nodoOs}>{marca}</Text>
      <BarraNivel porcentaje={descuento} etiqueta="DESC" />
      <BarraNivel porcentaje={reserva} etiqueta="RES" />
    </View>
  )
}

export function Paso4mp() {
  return (
    <SafeAreaView style={estilos4.safeArea}>
      <View style={estilos4.header}>
        <Text style={estilos4.headerTitulo}>Flota en exhibición</Text>
        <Text style={estilos4.headerSub}>{MOTOS_DEMO.length} motocicletas</Text>
      </View>
      <ScrollView
        style={estilos4.scroll}
        contentContainerStyle={estilos4.scrollContenido}
        showsVerticalScrollIndicator={false}
      >
        {MOTOS_DEMO.map((moto) => (
          <TarjetaInventario key={moto.id} {...moto} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const estilos4 = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0d1b2a',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#1c2e40',
  },
  headerTitulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#e3f2fd',
  },
  headerSub: {
    fontSize: 12,
    color: '#78909c',
    marginTop: 2,
  },
  scroll: { flex: 1 },
  scrollContenido: {
    padding: 16,
    gap: 10,
    paddingBottom: 40,
  },
  nodo: {
    backgroundColor: '#132232',
    borderRadius: 10,
    padding: 14,
    gap: 8,
    borderWidth: 1,
    borderColor: '#1c3548',
  },
  nodoEncabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  nodoNombre: {
    fontSize: 14,
    fontWeight: '700',
    color: '#e3f2fd',
  },
  nodoIp: {
    fontSize: 12,
    color: '#4fc3f7',
    fontFamily: 'monospace',
  },
  nodoOs: {
    fontSize: 11,
    color: '#546e7a',
    marginBottom: 2,
  },
  barraFila: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  barraEtiqueta: {
    fontSize: 11,
    color: '#78909c',
    width: 28,
  },
  barraFondo: {
    flex: 1,
    height: 4,
    backgroundColor: '#1c3548',
    borderRadius: 2,
    overflow: 'hidden',
  },
  barraRelleno: {
    height: '100%',
    borderRadius: 2,
  },
  barraPct: {
    fontSize: 11,
    fontWeight: '600',
    width: 34,
    textAlign: 'right',
  },
})
