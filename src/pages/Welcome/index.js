import React, { useEffect, useState } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
  const navigation = useNavigation();
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setIsRendered(false);
      setTimeout(() => {
        setIsRendered(true);
      }, 100);
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container} key={isRendered}>
    <StatusBar backgroundColor="#BEADFA" barStyle='light-content'/>
      <View style={styles.containerLogo}>
        <Animatable.Image
          delay={600}
          animation="flipInY"
          source={require('../../assets/LogoCortada.png')}
          style={{ width: '100%' }}
          resizeMode="contain"
        />
      </View>

      <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Astral Eventos</Text>
        <Text style={styles.text}>Faça seu cadastro para começar</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={()=>navigation.navigate('SignIn')}
        >
          <Text style={styles.buttonText}>Acessar</Text>
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

  containerLogo:{
    flex:2,
    justifyContent:'center',
    alignItems:'center',
  },

  containerForm:{
    flex:1,
    backgroundColor:'#FFF',
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    paddingStart:'5%',
    paddingEnd:'5%',
  },

  title:{
    fontSize:24,
    fontWeight:'bold',
    marginTop:28,
    marginBottom:12,
    color:'#BEADFA',
  },

  text:{
    color:'#a1a1a1',
  },

  button:{
    position:'absolute',
    backgroundColor:'#BEADFA',
    borderRadius:50,
    paddingVertical:8,
    width:'60%',
    alignSelf:'center',
    bottom:'15%',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:'8%',
  },

  buttonText:{
    fontSize:18,
    color:'#FFF',
    fontWeight:'bold',
  },
});
