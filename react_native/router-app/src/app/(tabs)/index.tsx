// src/app/(tabs)/index.tsx — versión final (Paso 8)
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Stack, Link, router } from 'expo-router'

interface ResumenCluster {
  activos:    number
  degradados: number
  errores:    number
  uptime:     string
}

const RESUMEN: ResumenCluster = {
  activos:    5,
  degradados: 1,
  errores:    1,
  uptime:     '99.83 %',
}

export default function TabInicio() {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'Panel de Control' }} />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.contenido}>
        {/* Tarjetas de resumen */}
        <View style={styles.grilla}>
          <TarjetaMetrica valor={String(RESUMEN.activos)}    etiqueta="Activos"    color="#2e7d32" />
          <TarjetaMetrica valor={String(RESUMEN.degradados)} etiqueta="Degradados" color="#e65100" />
          <TarjetaMetrica valor={String(RESUMEN.errores)}    etiqueta="Errores"    color="#c62828" />
          <TarjetaMetrica valor={RESUMEN.uptime}             etiqueta="Uptime"     color="#1565c0" />
        </View>

        {/* Acceso rápido a la lista */}
        <Link href="/servidores" asChild>
          <Pressable style={styles.botonLista}>
            <Text style={styles.botonListaTexto}>Ver todos los servidores →</Text>
          </Pressable>
        </Link>

        {/* Acceso a la vista del taller de motos */}
        <Link href="/motos_mp" asChild>
          <Pressable style={StyleSheet.flatten([styles.botonLista, styles.botonListaSecundario])}>
            <Text style={styles.botonListaTexto}>Taller de motos →</Text>
          </Pressable>
        </Link>
      </ScrollView>

      {/* Botón flotante — abre el modal de agregar */}
      <Pressable
        style={({ pressed }) => [styles.fab, pressed && { opacity: 0.85 }]}
        onPress={() => router.push('/agregar')}
      >
        <Text style={styles.fabTexto}>+</Text>
      </Pressable>
    </View>
  )
}

function TarjetaMetrica({
  valor,
  etiqueta,
  color,
}: {
  valor:    string
  etiqueta: string
  color:    string
}) {
  return (
    <View style={[styles.metrica, { borderTopColor: color }]}>
      <Text style={[styles.metricaValor, { color }]}>{valor}</Text>
      <Text style={styles.metricaEtiqueta}>{etiqueta}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  scroll:    { flex: 1, backgroundColor: '#f0f4f8' },
  contenido: { padding: 16, gap: 20 },
  grilla: {
    flexDirection:  'row',
    flexWrap:       'wrap',
    gap:            12,
    justifyContent: 'space-between',
  },
  metrica: {
    width:           '47%',
    backgroundColor: '#ffffff',
    borderRadius:    10,
    padding:         16,
    alignItems:      'center',
    gap:             4,
    borderTopWidth:  3,
    shadowColor:     '#000',
    shadowOpacity:   0.05,
    shadowRadius:    4,
    shadowOffset:    { width: 0, height: 2 },
    elevation:       2,
  },
  metricaValor:    { fontSize: 28, fontWeight: '700' },
  metricaEtiqueta: { fontSize: 12, color: '#78909c', fontWeight: '500' },
  botonLista: {
    backgroundColor: '#1565c0',
    borderRadius:    10,
    padding:         16,
    alignItems:      'center',
  },
  botonListaTexto: { color: '#fff', fontWeight: '700', fontSize: 15 },
  botonListaSecundario: { backgroundColor: '#0d47a1' },
  fab: {
    position:     'absolute',
    bottom:       24,
    right:        24,
    width:        56,
    height:       56,
    borderRadius: 28,
    backgroundColor: '#1565c0',
    justifyContent:  'center',
    alignItems:      'center',
    shadowColor:     '#000',
    shadowOpacity:   0.25,
    shadowRadius:    6,
    shadowOffset:    { width: 0, height: 3 },
    elevation:       6,
  },
  fabTexto: { color: '#fff', fontSize: 28, fontWeight: '300', lineHeight: 32 },
})
