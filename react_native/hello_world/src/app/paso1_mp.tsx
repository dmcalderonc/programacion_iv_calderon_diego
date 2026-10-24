import { StyleSheet, Text, View } from 'react-native'

export default function Paso1mp() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Catálogo de Ventas</Text>
      <Text style={styles.subtitulo}>Yamaha MT-09</Text>
      <Text style={styles.detalle}>VIN-1002 · Cilindraje 890 cc</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    gap: 8,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  subtitulo: {
    fontSize: 16,
    color: '#333',
  },
  detalle: {
    fontSize: 13,
    color: '#777',
  },
})