import React, { useState } from 'react';
import { View, TextInput, Button, Text, Modal, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/app/settings/navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch } from 'react-redux'; // Importamos el hook para usar acciones de Redux
import { login } from '../app/settings/config/authslice'; // Importamos la acción login


type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'LoginScreen'>;

const LoginScreen = () => {
  //Condicionales de estado aqui ! :)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false); // Controla el modal
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const dispatch = useDispatch(); // Para despachar acciones de Redux

  const loginFunction = () => {
    axios({
      url: "https://fakestoreapi.com/auth/login",
      method: "POST",
      data: {
        username: username,
        password: password,
      },
    })
      .then(async (res) => {
        console.log(res.data.token);

        // Guardar el token en AsyncStorage
        if (res.data.token) {
          await AsyncStorage.setItem('userToken', res.data.token);
          const token = res.data.token
          if (token) {
            await AsyncStorage.setItem('userToken', token)
            // Con Dispatch almacenamos el token en el estado de redux (Opcional y solo con fines demostrativos, no es necesario en esta 
            // implementación ya que para un volúmen tan pequeño no es necesario utilizar Redux)
            dispatch(login({ token }));
            navigation.navigate('ProductList')
          
          // No es necesario, pero al
        } else {
          setModalVisible(true); // Muestra el modal en caso de error
        }
      }
      })
      .catch((err) => {
        console.error('Error capturado:', err);
        setModalVisible(true); // Muestra el modal en caso de error
      });
  }

  return (
    <ImageBackground
    source={{ uri: 'https://vectorified.com/image/japanese-clouds-vector-2.jpg' }}
    resizeMode="cover"
    style={styles.backgroundImage}
  >
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={loginFunction} />

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Credenciales Incorrectas</Text>
            <Text style={styles.modalMessage}>
              El nombre de usuario o contraseña no son válidos. Por favor, inténtalo de nuevo.
            </Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    opacity:0.8
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    backgroundColor: 'black',
    color:'white'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  }
});

export default LoginScreen;
