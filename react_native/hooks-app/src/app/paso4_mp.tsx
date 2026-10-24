import { useWindowDimensions, useColorScheme } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

export default function Paso4mp() {
  const { width, height, scale, fontScale } = useWindowDimensions()
  const esquema = useColorScheme()

  const colores = {
    fondo:   esquema === 'dark' ? '#0d1b2a' : '#f5f5f5',
    tarjeta: esquema === 'dark' ? '#1a2a3a' : '#ffffff',
    texto:   esquema === 'dark' ? '#e8eaed' : '#1a1a1a',
    detalle: esquema === 'dark' ? '#9aa0a6' : '#666666',
    borde:   esquema === 'dark' ? '#2d3e50' : '#e0e0e0',
  }

  const columnas = width > 500 ? 2 : 1
  const anchoTarjeta = (width - 48 - (columnas - 1) * 12) / columnas

  const motocicletas = [
    { modelo: 'MT-09',        chasis: 'VIN-1002', estado: 'disponible' },
    { modelo: 'Ninja ZX-6R',  chasis: 'VIN-2005', estado: 'disponible' },
    { modelo: 'CBR600RR',     chasis: 'VIN-3008', estado: 'taller' },
    { modelo: 'Panigale V4',  chasis: 'VIN-4011', estado: 'disponible' },
  ]

  return (
    <View style={[styles.contenedor, { backgroundColor: colores.fondo }]}>
      <Text style={[styles.titulo, { color: colores.texto }]}>
        Inventario de Motocicletas
      </Text>

      <View style={[styles.tarjeta, {
        backgroundColor: colores.tarjeta,
        borderColor: colores.borde,
        width: '100%',
      }]}>
        <Text style={[styles.etiqueta, { color: colores.detalle }]}>
          Pantalla: {Math.round(width)} × {Math.round(height)} dp
          {'  '}·{'  '}escala: {scale.toFixed(1)}
          {'  '}·{'  '}tema: {esquema ?? 'sin preferencia'}
        </Text>
      </View>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
        {motocicletas.map(moto => (
          <View
            key={moto.modelo}
            style={[styles.tarjeta, {
              backgroundColor: colores.tarjeta,
              borderColor: colores.borde,
              width: anchoTarjeta,
            }]}
          >
            <Text style={[styles.nombreServidor, { color: colores.texto }]}>
              {moto.modelo}
            </Text>
            <Text style={[styles.ipServidor, { color: colores.detalle }]}>
              {moto.chasis}
            </Text>
            <Text style={{
              fontSize: 12,
              fontWeight: '600',
              color: moto.estado === 'disponible' ? '#2e7d32' : '#c62828',
            }}>
              {moto.estado.toUpperCase()}
            </Text>
          </View>
        ))}
      </View>

      <View style={[styles.nota, { borderColor: colores.borde }]}>
        <Text style={[styles.notaTexto, { color: colores.detalle }]}>
          💡 useSafeAreaInsets() — disponible desde react-native-safe-area-context
          (ya visto en Página 2 como SafeAreaView). El hook expone los valores
          numéricos {'{'}top, bottom, left, right{'}'} para cuando necesitas
          posicionar elementos manualmente respetando el notch y la barra de inicio.
        </Text>
      </View>
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    width: '100%',
  },
  tarjeta: {
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#ffffff',
    gap: 4,
  },
  tarjetaCompleta: {
    width: '100%',
  },
  infoPantalla: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
  nombreServidor: {
    fontSize: 15,
    fontWeight: '700',
  },
  ipServidor: {
    fontSize: 13,
  },
  estadoServidor: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
  },
  nota: {
    width: '100%',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'dashed',
  },
  notaTexto: {
    fontSize: 12,
    lineHeight: 18,
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