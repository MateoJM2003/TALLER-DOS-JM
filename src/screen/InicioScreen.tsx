import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function InicioScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Aquí  implemente la lógica de inicio de sesión
    Alert.alert('Inicio de Sesión', `Email: ${email}\nContraseña: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tituloPrincipal}>Tienda deportiva</Text>
      <Text style={styles.textos}>Ingresa tu correo:</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
            <Text style={styles.textos}>Ingresa tu contraseña:</Text>

      <View style={styles.contraContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
          <Icon name={showPassword ? 'eye' : 'eye-slash'} size={20} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.registrarteButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Registro Usuario')}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#ffffbf', 
  },
  tituloPrincipal: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
    marginTop:  1,
    alignSelf: 'center',

  },

  
  textos: {
    fontSize: 16,
    color: '#000',
    marginBottom: 20,
    alignSelf: 'flex-start',
    marginTop: 25,
    paddingHorizontal: 50
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 3,
    borderRadius: 8,
    marginBottom: 1,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff', 
    marginHorizontal: 50
    
  },
  contraContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 16,
  },
  passwordInput: {
    flex: 1,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 3,
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
    marginHorizontal: 50
  },
  eyeIcon: {
    position: 'absolute',
    right: 16,
    top: 12,
  },
  buttonContainer: {
    marginTop: 30,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 50
  },
  registrarteButton: {
    backgroundColor: '#28a745',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 32,
    marginBottom: 50,
    width: '80%',
    alignItems: 'center',
    marginTop: 15
  },
  registerButton: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 32,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
