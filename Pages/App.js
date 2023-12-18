import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Signup from './Email_Authentication/Pages/Signup.jsx'
import Login from './Email_Authentication/Pages/Login.jsx'
import Home from './Email_Authentication/Pages/Home.jsx'



export default function App() {

    const Stack = createNativeStackNavigator();

    const screenStyle ={
        headerStyle:{
            backgroundColor:'orange'
        },
        headerTintColor:'white',
        headerTitleStyle:{
            fontSize:'20px',
        }
    }

  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Signup' screenOptions={screenStyle}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Signup' component={Signup} options={{headerShown:false}}/>
        <Stack.Screen name='Login' component={Login}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}
