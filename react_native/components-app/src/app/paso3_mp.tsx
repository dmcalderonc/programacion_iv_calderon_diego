import { StyleSheet, Text, View } from 'react-native'

const PASO = 3.1

export default function Index() {
  switch (PASO) {
    case 3.1:
      return <Paso3mp />
    default:
      return (
        <View style={styles.centrado}>
          <Text>Paso {PASO}: crea el componente primero</Text>
        </View>
      )
  }
}

type EstadoMoto = 'disponible' | 'reservada' | 'vendida' | 'taller' | 'mantenimiento'

interface BadgeEstadoProps {
  estado: EstadoMoto
  tamaño?: number
  mostrarIcono?: boolean
}

const COLOR_ESTADO: Record<EstadoMoto, { fondo: string; texto: string }> = {
  disponible:    { fondo: '#e8f5e9', texto: '#2e7d32' },
  reservada:     { fondo: '#fff8e1', texto: '#f57f17' },
  vendida:       { fondo: '#f5f5f5', texto: '#616161' },
  taller:        { fondo: '#fce4ec', texto: '#c62828' },
  mantenimiento: { fondo: '#fce4ec', texto: '#4f60d1' },
}

const ICONO_ESTADO: Record<EstadoMoto, string> = {
  disponible:    '●',
  reservada:     '◐',
  vendida:       '○',
  taller:        '✕',
  mantenimiento: '◐'
}

function BadgeEstado({
  estado,
  tamaño = 12,
  mostrarIcono = false,
}: BadgeEstadoProps) {
  const colores = COLOR_ESTADO[estado]
  return (
    <View style={[estilos3.badge, { backgroundColor: colores.fondo }]}>
      {mostrarIcono && (
        <Text style={[estilos3.icono, { color: colores.texto, fontSize: tamaño }]}>
          {ICONO_ESTADO[estado]}{' '}
        </Text>
      )}
      <Text style={[estilos3.textoBadge, { color: colores.texto, fontSize: tamaño }]}>
        {estado.toUpperCase()}
      </Text>
    </View>
  )
}

interface FilaMotoProps {
  modelo: string
  chasis: string
  estado: EstadoMoto
  kilometraje?: number
}

function FilaMoto({ modelo, chasis, estado, kilometraje }: FilaMotoProps) {
  return (
    <View style={estilos3.fila}>
      <View style={estilos3.infoIzq}>
        <Text style={estilos3.nombreServidor}>{modelo}</Text>
        <Text style={estilos3.ipTexto}>{chasis}</Text>
      </View>
      <View style={estilos3.infoDer}>
        {kilometraje !== undefined && (
          <Text style={estilos3.latencia}>{kilometraje} km</Text>
        )}
        <BadgeEstado estado={estado} mostrarIcono tamaño={11} />
      </View>
    </View>
  )
}

export function Paso3mp() {
  return (
    <View style={estilos3.fondo}>
      <Text style={estilos3.titulo}>Disponibilidad de motocicletas</Text>
      <FilaMoto modelo="Yamaha MT-09"    chasis="VIN-1002" estado="disponible"    kilometraje={0}    />
      <FilaMoto modelo="Kawasaki Ninja"  chasis="VIN-2005" estado="disponible"    kilometraje={120}  />
      <FilaMoto modelo="Honda CBR600"    chasis="VIN-3008" estado="reservada"     kilometraje={450}  />
      <FilaMoto modelo="Ducati Panigale" chasis="VIN-4011" estado="taller"                           />
      <FilaMoto modelo="BMW R1250GS"     chasis="VIN-5020" estado="vendida"                          />
    </View>
  )
}

const estilos3 = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
    paddingTop: 60,
    gap: 8,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a237e',
    marginBottom: 8,
  },
  fila: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
  },
  infoIzq: { gap: 2 },
  infoDer: { alignItems: 'flex-end', gap: 4 },
  nombreServidor: { fontSize: 14, fontWeight: '600', color: '#1a1a1a' },
  ipTexto: { fontSize: 12, color: '#90a4ae', fontFamily: 'monospace' },
  latencia: { fontSize: 11, color: '#546e7a' },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  icono: { fontWeight: '700' },
  textoBadge: { fontWeight: '600' },
})
