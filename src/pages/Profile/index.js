import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import SignIn from '../SignIn';

import * as Animatable from 'react-native-animatable'

export default function Profile() {
  const navigation = useNavigation();
  const route = useRoute();
  const { formData } = route.params;

  return (
    <View style={styles.container}>        
      <StatusBar backgroundColor="#BEADFA" barStyle='light-content'/>
        <Animatable.View animation="fadeInLeft" delay={500} style={styles.containterTitle}>
            <Text style={styles.message}>Olá senhor(a) {formData.username},</Text>
            <Text style={styles.messageSub}>você confirmou sua presença, o convite sera enviado para o email {formData.email}, você precisará dele para entrar.</Text>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" style={styles.containerForm}>

            <Text style={styles.titleForm}>Informações de contato</Text>

            <Text style={styles.title}>Nome</Text>
            <Text style={styles.input}>{formData.username}</Text>

            <View style={styles.line}></View>

            <Text style={styles.title}>Email</Text>
            <Text style={styles.input}>{formData.email}</Text>

            <View style={styles.line}></View>

            <Text style={styles.title}>Telefone</Text>
            <Text style={styles.input}>{formData.telefone}</Text>

            <View style={styles.line}></View>

            <TouchableOpacity
                style={styles.buttonVoltar}
                onPress={()=>navigation.navigate('Welcome')}>

                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>

        </Animatable.View>

    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#BEADFA'
    },

    containterTitle:{
        marginTop: '15%',
        marginBottom: '8%',
        paddingStart: '5%',
        paddingEnd:'5%',      
    },

    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF'
    },

    messageSub:{
        marginTop:'5%',
        fontSize:18,
        color:'#f2f2f2'
    },

    containerForm: {
      backgroundColor: '#FFF',
      flex: 1,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      paddingHorizontal: '5%',
    },

    titleForm:{
        fontSize:28,
        color:'#BEADFA',
        marginTop:'8%',
        fontWeight:'bold',
    },
  
    title: {
      fontSize: 20,
      marginTop: 28,
    },
  
    input: {
        borderBottomColor: '#9d9d9d',
        marginTop:12,
        fontSize: 14,
        color:'#454545',
        textAlignVertical:'bottom'
    },

    line:{
        borderBottomWidth:1,
        borderBottomColor: '#9d9d9d',
        marginBottom: 12,
    },

    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
  
    buttonVoltar:{
      backgroundColor: '#BEADFA',
      width: '100%',
      borderRadius: 4,
      paddingVertical: 8,
      marginTop: 14,
      justifyContent: 'center',
      alignItems: 'center',
    }

})