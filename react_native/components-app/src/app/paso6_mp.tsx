import { ReactNode, useState } from 'react'
import {
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'

const PASO = 6.1

export default function Index() {
  switch (PASO) {
    case 6.1:
      return <Paso6mp />
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
    <View style={[estilos6.badge, { backgroundColor: colores.fondo }]}>
      {mostrarIcono && (
        <Text style={[estilos6.iconoBadge, { color: colores.texto, fontSize: tamaño }]}>
          {ICONO_ESTADO[estado]}{' '}
        </Text>
      )}
      <Text style={[estilos6.textoBadge, { color: colores.texto, fontSize: tamaño }]}>
        {estado.toUpperCase()}
      </Text>
    </View>
  )
}

interface CardProps {
  titulo: string
  subtitulo?: string
  children: ReactNode
}

function Card({ titulo, subtitulo, children }: CardProps) {
  return (
    <View style={estilos6.card}>
      <View style={estilos6.cardCabecera}>
        <Text style={estilos6.cardTitulo}>{titulo}</Text>
        {subtitulo && (
          <Text style={estilos6.cardSubtitulo}>{subtitulo}</Text>
        )}
      </View>
      <View style={estilos6.cardCuerpo}>{children}</View>
    </View>
  )
}

function FilaInfo({ etiqueta, valor }: { etiqueta: string; valor: string }) {
  return (
    <View style={estilos6.fila}>
      <Text style={estilos6.etiqueta}>{etiqueta}</Text>
      <Text style={estilos6.valor}>{valor}</Text>
    </View>
  )
}

interface ModalConfirmProps {
  visible: boolean
  titulo: string
  mensaje: string
  etiquetaConfirmar?: string
  etiquetaCancelar?: string
  onConfirmar: () => void
  onCancelar: () => void
}

function ModalConfirm({
  visible,
  titulo,
  mensaje,
  etiquetaConfirmar = 'Confirmar',
  etiquetaCancelar = 'Cancelar',
  onConfirmar,
  onCancelar,
}: ModalConfirmProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onCancelar}
    >
      <Pressable style={estilos6.fondoModal} onPress={onCancelar}>
        <Pressable style={estilos6.dialogo} onPress={() => {}}>
          <Text style={estilos6.dialogoTitulo}>{titulo}</Text>
          <Text style={estilos6.dialogoMensaje}>{mensaje}</Text>
          <View style={estilos6.botones}>
            <Pressable
              style={[estilos6.boton, estilos6.botonCancelar]}
              onPress={onCancelar}
            >
              <Text style={estilos6.textoCancelar}>{etiquetaCancelar}</Text>
            </Pressable>
            <Pressable
              style={[estilos6.boton, estilos6.botonConfirmar]}
              onPress={onConfirmar}
            >
              <Text style={estilos6.textoConfirmar}>{etiquetaConfirmar}</Text>
            </Pressable>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  )
}

interface AccionProps {
  etiqueta: string
  color: string
  onPress: () => void
}

function BotonAccion({ etiqueta, color, onPress }: AccionProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        estilos6.botonAccion,
        { backgroundColor: color },
        pressed && { opacity: 0.75 },
      ]}
      onPress={onPress}
    >
      <Text style={estilos6.textoBotonAccion}>{etiqueta}</Text>
    </Pressable>
  )
}

export function Paso6mp() {
  const [modalVisible, setModalVisible] = useState(false)
  const [accionPendiente, setAccionPendiente] = useState<string>('')
  const [registroEventos, setRegistroEventos] = useState<string[]>([])

  function pedirConfirmacion(accion: string) {
    setAccionPendiente(accion)
    setModalVisible(true)
  }

  function ejecutarAccion() {
    const entrada = `[${new Date().toLocaleTimeString()}] ${accionPendiente} procesado para Yamaha MT-09`
    setRegistroEventos((prev) => [entrada, ...prev])
    setModalVisible(false)
  }

  return (
    <SafeAreaView style={estilos6.safeArea}>
      <View style={estilos6.cabecera}>
        <View>
          <Text style={estilos6.cabNombre}>Yamaha MT-09</Text>
          <Text style={estilos6.cabIp}>VIN-1002 · Cilindraje 890 cc</Text>
        </View>
        <BadgeEstado estado="disponible" mostrarIcono tamaño={12} />
      </View>

      <ScrollView
        contentContainerStyle={estilos6.scrollContenido}
        showsVerticalScrollIndicator={false}
      >
        <Card titulo="Rendimiento y telemetría" subtitulo="Última inspección: hace 30 s">
          <FilaInfo etiqueta="Batería" valor="98% · 12.8 V" />
          <FilaInfo etiqueta="Combustible" valor="12.5 / 14 L (89%)" />
          <FilaInfo etiqueta="Neumáticos" valor="32 / 36 PSI (90%)" />
          <FilaInfo etiqueta="Consumo prom." valor="5.1 L/100 km · 110 km/h" />
          <FilaInfo etiqueta="Garantía" valor="2 años, 6 meses" />
        </Card>

        <Card titulo="Ficha de la motocicleta">
          <FilaInfo etiqueta="Placa/Matrícula" valor="MT-09-EXP" />
          <FilaInfo etiqueta="Motor" valor="Tricilíndrico · Refrigeración líquida" />
          <FilaInfo etiqueta="Frenos" valor="ABS doble canal · Disco 298 mm" />
          <FilaInfo etiqueta="Concesionaria" valor="Sede Central - Quito" />
          <FilaInfo etiqueta="Distribuidor" valor="Importadora Motos del Sur" />
        </Card>

        <Card titulo="Gestión comercial">
          <View style={estilos6.gridAcciones}>
            <BotonAccion
              etiqueta="Reservar"
              color="#1565c0"
              onPress={() => pedirConfirmacion('Reserva comercial')}
            />
            <BotonAccion
              etiqueta="Facturar"
              color="#b71c1c"
              onPress={() => pedirConfirmacion('Facturación y venta')}
            />
            <BotonAccion
              etiqueta="Test Drive"
              color="#2e7d32"
              onPress={() => pedirConfirmacion('Prueba de manejo')}
            />
            <BotonAccion
              etiqueta="Historial"
              color="#6a1b9a"
              onPress={() => pedirConfirmacion('Consulta de historial')}
            />
          </View>
        </Card>

        {registroEventos.length > 0 && (
          <Card titulo="Movimientos recientes">
            {registroEventos.map((entrada, i) => (
              <Text key={i} style={estilos6.entradaLog}>{entrada}</Text>
            ))}
          </Card>
        )}
      </ScrollView>

      <ModalConfirm
        visible={modalVisible}
        titulo={`Confirmar: ${accionPendiente}`}
        mensaje={`¿Confirmas ejecutar "${accionPendiente}" en Yamaha MT-09?\nEl estado comercial cambiará en el inventario.`}
        etiquetaConfirmar="Confirmar"
        onConfirmar={ejecutarAccion}
        onCancelar={() => setModalVisible(false)}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  centrado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const estilos6 = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  cabecera: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e7ef',
  },
  cabNombre: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a237e',
  },
  cabIp: {
    fontSize: 12,
    color: '#78909c',
    fontFamily: 'monospace',
    marginTop: 2,
  },
  scrollContenido: {
    padding: 16,
    gap: 14,
    paddingBottom: 40,
  },
  gridAcciones: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  botonAccion: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    minWidth: '45%',
    alignItems: 'center',
  },
  textoBotonAccion: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
  entradaLog: {
    fontSize: 11,
    color: '#2e7d32',
    fontFamily: 'monospace',
    lineHeight: 18,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  iconoBadge: {
    fontWeight: '700',
  },
  textoBadge: {
    fontWeight: '600',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  cardCabecera: {
    backgroundColor: '#1565c0',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 2,
  },
  cardTitulo: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },
  cardSubtitulo: {
    fontSize: 12,
    color: '#bbdefb',
  },
  cardCuerpo: {
    padding: 12,
    gap: 8,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  etiqueta: {
    fontSize: 13,
    color: '#546e7a',
    fontWeight: '500',
  },
  valor: {
    fontSize: 13,
    color: '#1a1a1a',
    fontFamily: 'monospace',
  },
  fondoModal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialogo: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    width: '85%',
    gap: 12,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 10,
  },
  dialogoTitulo: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  dialogoMensaje: {
    fontSize: 14,
    color: '#546e7a',
    lineHeight: 20,
  },
  botones: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 4,
  },
  boton: {
    flex: 1,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  botonCancelar: {
    backgroundColor: '#f5f5f5',
  },
  botonConfirmar: {
    backgroundColor: '#b71c1c',
  },
  textoCancelar: {
    color: '#424242',
    fontWeight: '600',
    fontSize: 14,
  },
  textoConfirmar: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 14,
  },
})