import { useEffect, useRef, useState } from 'react'
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'

export default function Paso3mp() {
  const inputModeloRef = useRef<TextInput>(null)
  const inputPrecioRef = useRef<TextInput>(null)

  const [modelo, setModelo] = useState<string>('')
  const [precio, setPrecio] = useState<string>('10500')

  useEffect(() => {
    inputModeloRef.current?.focus()
  }, [])

  const consultasSilenciosasRef = useRef<number>(0)
  const [ultimaCotizacion, setUltimaCotizacion] = useState<string>('—')

  function intentarCotizacion() {
    consultasSilenciosasRef.current += 1

    setUltimaCotizacion(
      `${modelo || 'motocicleta'}:$${precio} — cotización #${consultasSilenciosasRef.current}`
    )
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Configurar Cotización de Moto</Text>

      <View style={styles.formulario}>
        <Text style={styles.etiqueta}>Modelo o Chasis VIN</Text>
        <TextInput
          ref={inputModeloRef}
          style={styles.input}
          value={modelo}
          onChangeText={setModelo}
          placeholder="Yamaha MT-09"
          placeholderTextColor="#aaa"
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() => inputPrecioRef.current?.focus()}
        />

        <Text style={styles.etiqueta}>Precio Base (USD)</Text>
        <TextInput
          ref={inputPrecioRef}
          style={styles.input}
          value={precio}
          onChangeText={setPrecio}
          placeholder="10500"
          placeholderTextColor="#aaa"
          keyboardType="number-pad"
          returnKeyType="done"
        />
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.boton,
          styles.botonActivo,
          pressed && { opacity: 0.75 },
        ]}
        onPress={intentarCotizacion}
      >
        <Text style={styles.textoBoton}>Cotizar</Text>
      </Pressable>

      <Text style={styles.detalle}>Última consulta: {ultimaCotizacion}</Text>
      <Text style={styles.detalle}>
        (las cotizaciones silenciosas no causan re-renders)
      </Text>
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
  formulario: {
    width: '100%',
    gap: 8,
  },
  etiqueta: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginTop: 4,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: '#1a1a1a',
  },
  detalle: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
  },
  boton: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  botonActivo: {
    backgroundColor: '#1565c0',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
})