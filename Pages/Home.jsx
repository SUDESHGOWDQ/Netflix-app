import { signOut } from 'firebase/auth';
import React from 'react';
import { View, Text, Pressable, Alert } from 'react-native';
import { auth } from '../setup';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({navigation}) {

    const handleLogout = async () => {
        await signOut(auth)
        await AsyncStorage.removeItem(auth)
        navigation.navigate("Login")
        Alert.alert("Logged out successfully")
    }

  return (
    <View>
      <Pressable onPress={handleLogout}>
        <Text style={{paddingVertical:5,paddingHorizontal:10}}>Logout</Text>
      </Pressable>
     </View>
  );
}
