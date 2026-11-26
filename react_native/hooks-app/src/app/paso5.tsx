import { Button, StyleSheet, Text, View } from 'react-native';
import { UsuarioProvider, useUsuario } from '../context/UsuarioContext';

function Perfil() {
  const { usuario, setUsuario, cargo, setCargo } = useUsuario();

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Hola, {usuario}</Text>
      <Text style={styles.subtexto}>Cargo: {cargo}</Text>

      <View style={styles.boton}>
        <Button
          title="Cambiar usuario"
          onPress={() => setUsuario('Homero Simpson')}
        />
      </View>
      <View style={styles.boton}>
        <Button
          title="Cambiar cargo"
          onPress={() => setCargo('Líder Técnico')}
        />
      </View>
    </View>
  );
}

export default function Paso5() {
  return (
    <UsuarioProvider>
      <Perfil />
    </UsuarioProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  texto: {
    fontSize: 24,
    marginBottom: 8,
  },
  subtexto: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  boton: {
    marginVertical: 6,
    width: 200,
  },
});