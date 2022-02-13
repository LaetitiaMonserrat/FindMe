import * as React from 'react';
import { Button, Dimensions, Pressable, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text,View } from '../components/Themed';
import { checkLogged, login } from '../hooks/useConnexion';
import { RootTabScreenProps } from '../types';
import { useState } from 'react';
import { StyleSheet } from 'react-native';

var width = Dimensions.get("screen").width

var height = Dimensions.get("screen").height


export default function ConnectionScreen({ navigation }: RootTabScreenProps<'Connection'>) {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  let navigate = useNavigation(); 

  const routeChange = (username: string, password : string) =>{ 
    login(username,password)
    if (checkLogged()) {
      navigate.navigate("Modal");
    }
    
  }
    
  return (
    <View style={styles.vue}>
      <Text style={styles.title}>Find Me</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <Pressable onPress={() => routeChange(username, password)} >
        <Text style={styles.button}>Connection</Text>
        </Pressable>
      <View lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}


const styles = StyleSheet.create({
input:{
  padding:10,
  color:"black",
  borderColor:"black",
  borderWidth:1,
  borderStyle:"solid",
  borderRadius:10,
  height:50,
  width:width/2,
  marginLeft:width/4,
  marginTop:50,
},
title:{
  color:"black",
  marginTop:height/8,
  textAlign:"center",
  fontSize:60,
},
vue:{
backgroundColor:"white",
height: height,
width: width
},
button:{
marginTop:height/8,
height:height/20,
width:width/4,
backgroundColor:"red",
marginLeft:width/4

}
});
