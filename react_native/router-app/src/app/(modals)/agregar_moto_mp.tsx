// src/app/(modals)/agregar_moto_mp.tsx — modal de alta (ruta /agregar_moto_mp)
import { useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { router } from 'expo-router'

/**
 * Validación a nivel de módulo para poder exportarla.
 * Devuelve el mensaje de error, o undefined si todo está bien.
 */
export function validarMoto_mp(
  marca: string,
  modelo: string,
  precio: string,
): string | undefined {
  if (!marca.trim() && !modelo.trim() && !precio.trim()) {
    return 'Completa al menos la marca, el modelo y el precio.'
  }
  if (!marca.trim())   return 'La marca es obligatoria.'
  if (!modelo.trim())  return 'El modelo es obligatorio.'
  if (!precio.trim())  return 'El precio es obligatorio.'
  return undefined
}

export function ModalAgregarMotoMp() {
  const [marca,   setMarca]   = useState('')
  const [modelo,  setModelo]  = useState('')
  const [precio,  setPrecio]  = useState('')
  const [error,   setError]   = useState<string | undefined>(undefined)

  function guardar() {
    const mensajeError = validarMoto_mp(marca, modelo, precio)

    if (mensajeError) {
      setError(mensajeError)   // se muestra en pantalla, no falla en silencio
      return
    }

    console.log('Nueva moto:', { marca, modelo, precio })
    router.back()              // cierra el modal
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.instruccion}>
        Ingresa los datos de la motocicleta a registrar en el taller.
      </Text>

      <View style={styles.grupo}>
        <Text style={styles.etiqueta}>Marca</Text>
        <TextInput
          style={styles.input}
          value={marca}
          onChangeText={(t) => { setMarca(t); setError(undefined) }}
          placeholder="ej. Yamaha"
          placeholderTextColor="#90a4ae"
        />
      </View>

      <View style={styles.grupo}>
        <Text style={styles.etiqueta}>Modelo</Text>
        <TextInput
          style={styles.input}
          value={modelo}
          onChangeText={(t) => { setModelo(t); setError(undefined) }}
          placeholder="ej. MT-07"
          placeholderTextColor="#90a4ae"
        />
      </View>

      <View style={styles.grupo}>
        <Text style={styles.etiqueta}>Precio</Text>
        <TextInput
          style={styles.input}
          value={precio}
          onChangeText={(t) => { setPrecio(t); setError(undefined) }}
          placeholder="ej. $8.900"
          placeholderTextColor="#90a4ae"
          keyboardType="decimal-pad"
        />
      </View>

      {/* Mensaje de validación: aparece sólo si hay error */}
      {error && (
        <View style={styles.errorCaja}>
          <Text style={styles.errorTexto}>{error}</Text>
        </View>
      )}

      <Pressable
        style={({ pressed }) => [styles.boton, pressed && styles.botonPresionado]}
        onPress={guardar}
      >
        <Text style={styles.botonTexto}>Registrar moto</Text>
      </Pressable>

      <Pressable onPress={() => router.back()}>
        <Text style={styles.cancelar}>Cancelar</Text>
      </Pressable>
    </View>
  )
}

// Obligatorio: sin este export la ruta se registra pero no renderiza nada.
export default ModalAgregarMotoMp

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#263238',
    padding: 24,
    gap: 20,
  },
  instruccion: { fontSize: 14, color: '#90a4ae', lineHeight: 20 },
  grupo:       { gap: 6 },
  etiqueta:    { fontSize: 13, color: '#b0bec5', fontWeight: '500' },

  input: {
    backgroundColor: '#37474f',
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
    color: '#eceff1',
    fontFamily: 'monospace',
    borderWidth: 1,
    borderColor: '#546e7a',
  },

  errorCaja: {
    backgroundColor: '#4a1c1c',
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: '#c62828',
  },
  errorTexto: { color: '#ff8a80', fontSize: 13, lineHeight: 18 },

  boton: {
    backgroundColor: '#1565c0',
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
    marginTop: 4,
  },
  botonPresionado: { backgroundColor: '#0d47a1' },
  botonTexto:      { color: '#fff', fontWeight: '700', fontSize: 16 },
  cancelar:        { textAlign: 'center', color: '#78909c', fontSize: 14, padding: 8 },
})
