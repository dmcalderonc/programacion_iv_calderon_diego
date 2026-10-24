import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native'

export default function Paso2mp() {
  return (
    <View style={styles.contenedor}>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.logo}
      />
      <Text style={styles.titulo}>Cotizar motocicleta</Text>

      <Pressable
        style={({ pressed }) => [
          styles.boton,
          styles.botonPresionado && pressed,
        ]}
        onPress={() => Alert.alert('Cotización', 'Calculando plan de financiamiento...')}
      >
        <Text style={styles.textoBoton}>Solicitar cotización</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  logo: {
    width: 80,
    height: 80,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '600',
  },
  boton: {
    backgroundColor: '#1565c0',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  botonPresionado: {
    backgroundColor: '#0d47a1',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
})