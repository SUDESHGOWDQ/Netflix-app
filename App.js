import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './MovieWebsite/components/Home';
import MovieDetails from './MovieWebsite/components/MovieDeatils';
import Signup from './Pages/Signup'
import Login from './Pages/Login'


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Signup'>
      <Stack.Screen name='Signup' component={Signup} options={{headerShown:false}}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name='MovieDetails' component={MovieDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;