import React, { useEffect, useState } from 'react';
import { 
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  StatusBar
} from 'react-native';

import Profile from '../Profile';

import * as Animatable from 'react-native-animatable'

import { useForm, Controller } from 'react-hook-form'

import { useNavigation } from '@react-navigation/native';

import { TextInputMask } from 'react-native-masked-text';

export default function SignIn() {
  const navigation = useNavigation();
  
  const { control, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      username: '',
      email: '',
      telefone: '',
    },
  })

  function handleSignIn(data) {
    if (!data.email && !data.telefone && !data.username) {
      Alert.alert('Campos obrigatórios', 'Preencha todos os campos!');
      return;
    }
  
    if (!data.email) {
      Alert.alert('Campo obrigatório', 'Preencha o campo de e-mail!');
      return;
    }
  
    if (!data.telefone) {
      Alert.alert('Campo obrigatório', 'Preencha o campo de telefone!');
      return;
    }
  
    if (!data.username) {
      Alert.alert('Campo obrigatório', 'Preencha o campo de nome de usuário!');
      return;
    }
  
    reset();
  
    navigation.navigate('Profile', { formData: data });
  
    console.log(data);
  }  

  return (
    <View style={styles.container}>      
      <StatusBar backgroundColor="#BEADFA" barStyle='light-content'/>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Bem-vindo(a)</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>

        <Text style={styles.title}>Nome</Text>
        <Controller
          control={control}
          name='username'
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={styles.input}
              placeholder='Digite seu Nome'
            />
          )}
        />
        {errors.username && <Text>Insira seu nome</Text>}

        <Text style={styles.title}>Email</Text>
        <Controller
          control={control}
          name='email'
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={styles.input}
              placeholder='Digite seu Email'
            />
          )}
        />

        <Text style={styles.title}>Telefone</Text>
        <Controller
          control={control}
          name='telefone'
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInputMask
              type={'cel-phone'}
              options={{
                maskType: 'BRL',
                withDDD: true,
                dddMask: '(99) '
              }}
              value={value}
              onChangeText={onChange}
              style={styles.input}
              placeholder='Digite seu telefone'
            />
          )}
        />

        <TouchableOpacity onPress={handleSubmit(handleSignIn)} style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonVoltar}
          onPress={()=>navigation.navigate('Welcome')}
          >

          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>

      </Animatable.View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#BEADFA'
  },

  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },

  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF'
  },

  containerForm: {
    backgroundColor: '#FFF',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: '5%',
  },

  title: {
    fontSize: 20,
    marginTop: 28,
  },

  input: {
    borderBottomWidth: 1,
    borderColor: '#9d9d9d',
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#BEADFA',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  buttonRegister: {
    marginTop: 14,
    alignSelf: 'center',
  },

  registerText: {
    color: '#a1a1a1'
  },

  buttonVoltar:{
    backgroundColor: '#A7EDE7',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  }

});