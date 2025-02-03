import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Screens/Home';
import Login from './src/Screens/Login';
import Signup from './src/Screens/Signup';
import HomeScreen from './src/Screens/Signup';
import LoginScreen from './src/Screens/Login';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
            {/* <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="LOGIN" component={LoginScreen} /> */}

            {/* <Stack.Screen name="SIGNUP" component={Signup} /> */}
            
        </Stack.Navigator>
        



    </NavigationContainer>
     
  )
}

export default App

const styles = StyleSheet.create({})