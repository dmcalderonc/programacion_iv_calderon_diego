// app/_layout.tsx — versión actualizada
import { Stack } from 'expo-router'

// Ancla del Stack raíz. "(tabs)" es la única hija que queremos como base:
// los hijos directos del layout raíz son "(tabs)", "(modals)/agregar",
// "servidores/index", "servidores/[id]" y "explore" — NO "index", porque
// (tabs)/index.tsx es nieto (tiene su propio _layout dentro de (tabs)).
// Sin esto, un deep link directo a /agregar o /servidores/3 deja la pantalla
// de atrás vacía y no hay contexto para el botón "volver".
export const unstable_settings = {
  anchor: '(tabs)',
}

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle:      { backgroundColor: '#1565c0' },
        headerTintColor:  '#ffffff',
        headerTitleStyle: { fontWeight: '700' },
      }}
    >
      {/* Pantallas normales — no necesitan declaración explícita */}
      {/* Modal — debe declararse aquí con presentation: 'modal' */}
      <Stack.Screen
        name="(modals)/agregar"
        options={{
          presentation:  'modal',
          title:         'Agregar servidor',
          headerStyle:   { backgroundColor: '#263238' },
          headerTintColor: '#eceff1',
        }}
      />

      <Stack.Screen
        name="(modals)/agregar_moto_mp"
        options={{
          presentation:  'modal',
          title:         'Registrar moto',
          headerStyle:   { backgroundColor: '#263238' },
          headerTintColor: '#eceff1',
        }}
      />
    </Stack>
  )
}