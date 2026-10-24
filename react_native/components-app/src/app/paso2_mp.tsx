import { ReactNode } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const PASO = 2.1

export default function Index() {
  switch (PASO) {
    case 2.1:
      return <Paso2mp />
    default:
      return (
        <View style={styles.centrado}>
          <Text>Paso {PASO}: crea el componente primero</Text>
        </View>
      )
  }
}

interface CardProps {
  titulo: string
  subtitulo?: string
  children: ReactNode
}

function Card({ titulo, subtitulo, children }: CardProps) {
  return (
    <View style={estilos2.card}>
      <View style={estilos2.cardCabecera}>
        <Text style={estilos2.cardTitulo}>{titulo}</Text>
        {subtitulo && (
          <Text style={estilos2.cardSubtitulo}>{subtitulo}</Text>
        )}
      </View>
      <View style={estilos2.cardCuerpo}>{children}</View>
    </View>
  )
}

function FilaInfo({ etiqueta, valor }: { etiqueta: string; valor: string }) {
  return (
    <View style={estilos2.fila}>
      <Text style={estilos2.etiqueta}>{etiqueta}</Text>
      <Text style={estilos2.valor}>{valor}</Text>
    </View>
  )
}

export function Paso2mp() {
  return (
    <View style={estilos2.fondo}>
      <Text style={estilos2.titulo}>Ficha técnica de motocicleta</Text>

      <Card titulo="Yamaha MT-09" subtitulo="Motocicleta deportiva naked">
        <FilaInfo etiqueta="Chasis" valor="VIN-1002" />
        <FilaInfo etiqueta="Motor" valor="890 cc (DOHC)" />
        <FilaInfo etiqueta="Potencia" valor="119 CV · 10,000 RPM" />
        <FilaInfo etiqueta="Consumo" valor="5.0 L/100 km · 68%" />
        <FilaInfo etiqueta="Tanque" valor="14 L · 4.2 L usados" />
      </Card>

      <Card titulo="Estado de entrega y venta">
        <FilaInfo etiqueta="Precio" valor="$10,500 USD" />
        <FilaInfo etiqueta="Garantía" valor="3 años de fábrica" />
        <FilaInfo etiqueta="Último test drive" valor="hace 3 minutos" />
      </Card>
    </View>
  )
}

const estilos2 = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
    paddingTop: 60,
    gap: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a237e',
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
})
