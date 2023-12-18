import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, ImageBackground, Alert, TouchableOpacity,Image } from 'react-native';
const image1 = require('../assets/banner.jpg')
import {auth} from '../setup'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Signup({navigation}) {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handlePress = async () => {
        try{
            const userDetails = await createUserWithEmailAndPassword(auth,email,password);
            const user = userDetails.user;
            await AsyncStorage.setItem('token',user.uid);
            await AsyncStorage.setItem('user',JSON.stringify(user))
            Alert.alert("Signup successful")
            setEmail("")
            setEmail("")
            navigation.navigate("Login");
        }
        catch{
            Alert.alert("Invalid credentials");
        }
    
    }


  return (
    <ImageBackground  style={Styles.Section} source={image1}>
    <View style={Styles.Container}>
      <Image style={{height:30,width:100,margin:20}} source={{uri:"https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940"}}></Image>
     <Text style={Styles.Heading}>Signup Form</Text>
      <TextInput placeholder='Enter Your Email' style={Styles.Input} onChangeText={(e) => setEmail(e)} value={email}></TextInput>
      <TextInput secureTextEntry placeholder='Enter Your Password' style={Styles.Input} onChangeText={(e) => setPassword(e)} value={password}></TextInput>
      <TouchableOpacity style={Styles.Buttons} onPress={handlePress}>
        <Text style={{color:'white'}}>Signup</Text>
      </TouchableOpacity>
      <Text style={{color:'white'}}>Already have an account <Text onPress={()=>navigation.navigate("Login")} style={{color:'blue',textDecorationLine:'underline'}}>Login</Text></Text>
     </View>
    </ImageBackground>
  );
}


const Styles = StyleSheet.create({
  Section:{
    height:'100%',
    width:'100%',
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
    color:'white',
    width:100,
    height:50,
  }

})

