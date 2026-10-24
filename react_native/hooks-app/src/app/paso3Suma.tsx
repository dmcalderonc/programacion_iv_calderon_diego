import { useEffect, useRef, useState } from 'react'
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'

export default function Paso3Suma() {
  const inputPrecioRef = useRef<TextInput>(null)
  const inputTramitesRef = useRef<TextInput>(null)

  const [precioMoto, setPrecioMoto] = useState<string>('10500')
  const [costoTramites, setCostoTramites] = useState<string>('350')

  useEffect(() => {
    inputPrecioRef.current?.focus()
  }, [])

  const cotizacionesSilenciosasRef = useRef<number>(0)
  const [ultimaCotizacion, setUltimaCotizacion] = useState<string>('—')

  function intentarCotizacion() {
    cotizacionesSilenciosasRef.current += 1
    
    setUltimaCotizacion(
      `$${precioMoto || '0'} + $${costoTramites || '0'} — cálculo #${cotizacionesSilenciosasRef.current}`
    )
  }

  const valorImput1 = Number(precioMoto) || 0
  const valorImput2 = Number(costoTramites) || 0

  function sumaValor() {
    return valorImput1 + valorImput2
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Cálculo Total de Motocicleta</Text>

      <View style={styles.formulario}>
        <Text style={styles.etiqueta}>Precio Base de la Moto (USD)</Text>
        <TextInput
          ref={inputPrecioRef}
          style={styles.input}
          value={precioMoto}
          onChangeText={setPrecioMoto}
          placeholder="10500"
          placeholderTextColor="#aaa"
          keyboardType="number-pad"
          returnKeyType="next"
          onSubmitEditing={() => inputTramitesRef.current?.focus()}
        />

        <Text style={styles.etiqueta}>Gastos de Matrícula y Trámites (USD)</Text>
        <TextInput
          ref={inputTramitesRef}
          style={styles.input}
          value={costoTramites}
          onChangeText={setCostoTramites}
          placeholder="350"
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
        <Text style={styles.textoBoton}>Calcular Total</Text>
      </Pressable>

      <Text style={styles.detalle}>Precio Total Final: ${sumaValor()}</Text>
      <Text style={styles.detalle}>Registro: {ultimaCotizacion}</Text>
      <Text style={styles.detalle}>
        (los cálculos silenciosos no causan re-renders)
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