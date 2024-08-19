import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity, Platform, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function RegisterScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState(''); 
  const [lastName, setLastName] = useState(''); 
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  

  //Esta parte me permite hacer un registro
  const handleRegister = () => {
    if (password !== confirmPassword) {

    }
    // Aqui puedo mostrar los datos en la consola pero sin apis
    console.log(`Nombres: ${firstName}`);
    console.log(`Apellidos: ${lastName}`);
    console.log(`Correo: ${email}`);
    console.log(`Contraseña: ${password}`);
    
    // Registro
    Alert.alert('Registro', `Nombres: ${firstName}\nApellidos: ${lastName}\nCorreo: ${email} \nContraseña: ${password}`);
  };


  return (
   
      <View style={styles.container}>
        <Text style={styles.tituloRegis}>Crea una Cuenta</Text>
        <Text style={styles.textosCampos}>Ingresa tu Nombre:</Text>

        <TextInput
          style={styles.input}
          placeholder="Nombres"
          value={firstName}
          onChangeText={setFirstName}

        />
                <Text style={styles.textosCampos}>Ingresa tu Apellido:</Text>

        <TextInput
          style={styles.input}
          placeholder="Apellidos"
          value={lastName}
          onChangeText={setLastName}
        />
       
       <Text style={styles.textosCampos}>Ingresa tu Correo:</Text>

        <TextInput
          style={styles.input}
          placeholder="Correo"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
                <Text style={styles.textosCampos}>Ingresa tu Contraseña:</Text>

        <View style={styles.contraseñaContainer}>
          <TextInput
            style={styles.contraInput}
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          
         
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Inicio')}>
            <Text style={styles.buttonText}>Inicio</Text>
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
  tituloRegis: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
    marginTop: -2,
textAlign: 'center',
  },
 

  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 3,
    borderRadius: 8,
    marginBottom: 1,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
    margin: 35
  },
  
  
  contraseñaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 16,
  },
  contraInput: {
    flex: 1,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 3,
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
    margin: 35
  },
  eyeIcon: {
    position: 'absolute',
    right: 45,
    top: 50,
  },
  buttonContainer: {
    marginTop: -35,
    flexDirection: 'column',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#28a745',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 32,
    marginBottom: 16,
    width: '80%',
    alignItems: 'center',
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
  textosCampos:{
    fontSize: 16,
    color: '#000',
    marginBottom: 2,
    alignSelf: 'flex-start',
    marginTop: 5,
    paddingHorizontal: 35
  }
});
