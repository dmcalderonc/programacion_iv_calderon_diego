// src/app/motoDetalle_mp/[id].tsx — detalle dinámico (ruta /motoDetalle_mp/:id)
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { router, Stack, useLocalSearchParams } from 'expo-router'

export type DetalleMoto_mp = {
  marca: string
  modelo: string
  anio: string
  km: string
  motor: string
  precio: string
  papeles: string
  ultimoMantenimiento: string
}

export const DB_MOTOS_MP: Record<string, DetalleMoto_mp> = {
  '1': {
    marca: 'Yamaha', modelo: 'MT-07', anio: '2023', km: '4.200 km',
    motor: '689 cc · 74 hp', precio: '$8.900',
    papeles: 'Al corriente', ultimoMantenimiento: 'hace 500 km',
  },
  '2': {
    marca: 'Honda', modelo: 'CBR600RR', anio: '2022', km: '12.800 km',
    motor: '599 cc · 118 hp', precio: '$12.500',
    papeles: 'Al corriente', ultimoMantenimiento: 'hace 3.200 km',
  },
  '3': {
    marca: 'Kawasaki', modelo: 'Ninja 400', anio: '2024', km: '1.100 km',
    motor: '399 cc · 49 hp', precio: '$6.700',
    papeles: 'Trámite pendiente', ultimoMantenimiento: 'hace 1.100 km',
  },
  '4': {
    marca: 'Suzuki', modelo: 'GSX-R750', anio: '2019', km: '38.500 km',
    motor: '750 cc · 148 hp', precio: '$11.200',
    papeles: 'Al corriente', ultimoMantenimiento: 'hace 9.000 km',
  },
  '5': {
    marca: 'KTM', modelo: 'Duke 890', anio: '2023', km: '7.900 km',
    motor: '889 cc · 115 hp', precio: '$9.300',
    papeles: 'Al corriente', ultimoMantenimiento: 'hace 2.400 km',
  },
}

export function FilaDetalleMp({ etiqueta, valor }: { etiqueta: string; valor: string }) {
  return (
    <View style={styles.fila}>
      <Text style={styles.etiqueta}>{etiqueta}</Text>
      <Text style={styles.valor}>{valor}</Text>
    </View>
  )
}

export function DetalleMotoMp() {
  // useLocalSearchParams lee el segmento capturado por [id].tsx
  const { id } = useLocalSearchParams<{ id: string }>()
  const moto = DB_MOTOS_MP[id ?? '']

  if (!moto) {
    return (
      <View style={styles.centrado}>
        <Stack.Screen options={{ title: 'No encontrado' }} />
        <Text style={styles.error}>Moto "{id}" no encontrada</Text>
        <Text style={styles.enlace} onPress={() => router.back()}>
          ← Volver a la lista
        </Text>
      </View>
    )
  }

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.contenido}>
      <Stack.Screen options={{ title: `${moto.marca} ${moto.modelo}` }} />

      <View style={styles.encabezado}>
        <Text style={styles.nombreMoto}>{moto.marca} {moto.modelo}</Text>
        <Text style={styles.anioMoto}>{moto.anio} · {moto.km}</Text>
        <Text style={styles.precioMoto}>{moto.precio}</Text>
      </View>

      <View style={styles.seccion}>
        <Text style={styles.tituloSeccion}>FICHA TÉCNICA</Text>
        <FilaDetalleMp etiqueta="Motor" valor={moto.motor} />
        <FilaDetalleMp etiqueta="Año"   valor={moto.anio} />
        <FilaDetalleMp etiqueta="Km"    valor={moto.km} />
      </View>

      <View style={styles.seccion}>
        <Text style={styles.tituloSeccion}>HISTORIAL</Text>
        <FilaDetalleMp etiqueta="Papeles"              valor={moto.papeles} />
        <FilaDetalleMp etiqueta="Último mantenimiento" valor={moto.ultimoMantenimiento} />
      </View>

      <View style={styles.botonera}>
        {/* push: apila otra pantalla encima */}
        <Pressable
          style={styles.botonAccion}
          onPress={() => router.push('/motoDetalle_mp/2')}
        >
          <Text style={styles.botonAccionTexto}>Ver CBR600RR (push)</Text>
        </Pressable>

        {/* replace: reemplaza sin apilar */}
        <Pressable
          style={[styles.botonAccion, { backgroundColor: '#37474f' }]}
          onPress={() => router.replace('/motoDetalle_mp/2')}
        >
          <Text style={styles.botonAccionTexto}>Ir a CBR600RR (replace)</Text>
        </Pressable>

        {/* back: vuelve al paso anterior */}
        <Pressable
          style={[styles.botonAccion, { backgroundColor: '#c62828' }]}
          onPress={() => router.back()}
        >
          <Text style={styles.botonAccionTexto}>Volver (back)</Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}

// Obligatorio: sin este export la ruta se registra pero no renderiza nada.
export default DetalleMotoMp

const styles = StyleSheet.create({
  scroll:    { flex: 1, backgroundColor: '#f0f4f8' },
  contenido: { padding: 16, gap: 16 },
  centrado:  { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 12 },
  error:     { fontSize: 16, color: '#c62828' },
  enlace:    { fontSize: 14, color: '#1565c0' },

  encabezado: {
    backgroundColor: '#1565c0',
    borderRadius: 12,
    padding: 20,
    gap: 4,
  },
  nombreMoto: { fontSize: 22, fontWeight: '700', color: '#fff' },
  anioMoto:   { fontSize: 14, color: '#bbdefb' },
  precioMoto: { fontSize: 16, fontWeight: '700', color: '#90caf9' },

  seccion: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    gap: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  tituloSeccion: {
    fontSize: 11,
    fontWeight: '700',
    color: '#78909c',
    letterSpacing: 1.2,
    marginBottom: 2,
  },
  fila:     { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  etiqueta: { fontSize: 13, color: '#546e7a', fontWeight: '500' },
  valor:    {
    fontSize: 13,
    color: '#1a1a1a',
    fontFamily: 'monospace',
    flexShrink: 1,
    textAlign: 'right',
  },

  botonera:       { gap: 10, marginTop: 8, marginBottom: 32 },
  botonAccion: {
    backgroundColor: '#1565c0',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  botonAccionTexto: { color: '#fff', fontWeight: '600', fontSize: 14 },
})
