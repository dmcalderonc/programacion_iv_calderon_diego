// src/app/motos_mp.tsx — vista del taller de motos (ruta /motos_mp)
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { Link, router, Stack } from 'expo-router'

export type Moto_mp = {
  id: string
  marca: string
  modelo: string
  precio: string
  estado: 'disponible' | 'reservada' | 'vendida'
}

export const MOTOS_MP: Moto_mp[] = [
  { id: '1', marca: 'Yamaha',   modelo: 'MT-07',      precio: '$8.900',  estado: 'disponible' },
  { id: '2', marca: 'Honda',    modelo: 'CBR600RR',   precio: '$12.500', estado: 'disponible' },
  { id: '3', marca: 'Kawasaki', modelo: 'Ninja 400',  precio: '$6.700',  estado: 'reservada'  },
  { id: '4', marca: 'Suzuki',   modelo: 'GSX-R750',   precio: '$11.200', estado: 'vendida'    },
  { id: '5', marca: 'KTM',      modelo: 'Duke 890',   precio: '$9.300',  estado: 'disponible' },
]

export const COLOR_ESTADO_MP: Record<Moto_mp['estado'], string> = {
  disponible: '#2e7d32',
  reservada:  '#e65100',
  vendida:    '#c62828',
}

export function ListaMotosMp() {
  return (
    <View style={styles.contenedor}>
      <Stack.Screen options={{ title: 'Taller de Motos' }} />

      <FlatList
        data={MOTOS_MP}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [styles.tarjeta, pressed && styles.tarjetaPresionada]}
            onPress={() => router.push(`/motoDetalle_mp/${item.id}`)}
          >
            <View style={styles.fila}>
              <Text style={styles.nombre}>{item.marca} {item.modelo}</Text>
              <View style={[styles.badge, { backgroundColor: COLOR_ESTADO_MP[item.estado] }]}>
                <Text style={styles.badgeTexto}>{item.estado.toUpperCase()}</Text>
              </View>
            </View>
            <Text style={styles.precio}>{item.precio}</Text>
          </Pressable>
        )}
      />

      {/* Alternativa declarativa — navega al detalle de la primera moto */}
      <Link href="/motoDetalle_mp/1" style={styles.enlaceDirecto}>
        Ir directo a MT-07 (Link declarativo)
      </Link>
    </View>
  )
}

// Obligatorio: sin este export la ruta se registra pero no renderiza nada.
export default ListaMotosMp

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  lista:      { padding: 16, gap: 10, paddingBottom: 8 },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    gap: 6,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  tarjetaPresionada: { backgroundColor: '#e3f2fd' },
  fila:    { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  nombre:  { fontSize: 16, fontWeight: '600', color: '#1a1a1a' },
  precio:  { fontSize: 13, color: '#1565c0', fontFamily: 'monospace' },
  badge:   { borderRadius: 4, paddingHorizontal: 8, paddingVertical: 3 },
  badgeTexto: { color: '#fff', fontSize: 11, fontWeight: '700' },
  enlaceDirecto: {
    textAlign: 'center',
    padding: 12,
    color: '#1565c0',
    fontSize: 14,
  },
})
