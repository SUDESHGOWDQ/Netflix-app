import React, { useState } from 'react';
import { View, TextInput,Image, StyleSheet, Text, ImageBackground, Alert, TouchableOpacity} from 'react-native';
import {auth} from '../setup'
const image1 = require('../assets/banner.jpg')
import { signInWithEmailAndPassword } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Signup({navigation}) {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handlePress = async () => {
        try{
            const userDetails = await signInWithEmailAndPassword(auth,email,password);
            const user = userDetails.user;
            await AsyncStorage.setItem('token',user.uid);
            await AsyncStorage.setItem('user',JSON.stringify(user))
            Alert.alert("Login successful")
            setEmail("")
            setPassword("")
            navigation.navigate("Home");
        }
        catch{
            Alert.alert("Invalid credentials");
        }
    
    }


  return (
    <ImageBackground style={Styles.Section} source={image1}>
    <View style={Styles.Container}>
    <Image style={{height:20,width:100,margin:20}} source={{uri:"https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940"}}></Image>
     <Text style={Styles.Heading}>Login Form</Text>
      <TextInput placeholder='Enter Your Email' style={Styles.Input} onChangeText={(e) => setEmail(e)} value={email}></TextInput>
      <TextInput secureTextEntry placeholder='Enter Your Password' style={Styles.Input} onChangeText={(e) => setPassword(e)} value={password}></TextInput>
      <TouchableOpacity style={Styles.Buttons} onPress={handlePress}>
        <Text style={{color:'white'}}>Login</Text>
      </TouchableOpacity>
      <Text style={{color:'white'}}>Don't have an account <Text onPress={()=>navigation.navigate("Signup")} style={{color:'blue',textDecorationLine:'underline'}}>Signup</Text></Text>
     </View>
    </ImageBackground>
  );
}


const Styles = StyleSheet.create({
  Section:{
    height:'100%',
    width:'100%',
    backgroundColor:'black',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flex:1,
  },
  Heading:{
    fontWeight:900,
    color:'white',
    fontSize:20,
    textShadowColor:'black',
    textShadowOffset :{width:2, height:2},
  }
  ,
  Container:{
    height:300,
    width:300,
    backgroundColor:'rgba(0,0,0,0.6)',
    color:'white',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    shadowColor:'black',
    shadowOffset:{width:2,height:4},
    shadowOpacity:0.6,
    textAlign:'auto',
    padding:10,
  },
  Input:{
    borderColor:'black',
    backgroundColor:'gray',
    padding:10,
    borderWidth:1,
    height:50,
    width:250,
    marginHorizontal:20,
    borderRadius:10,
    color:'white',
    textAlign:'center',
    marginVertical:20,
  },

  Buttons:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#D50D16',
    width:100,
    height:50,
  }

})

