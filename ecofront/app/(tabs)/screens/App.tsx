import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './WelcomeScreen'; // Adjust the path as necessary
import LoginScreen from './LoginScreen';     // Adjust the path as necessary
import SignUpScreen from './SignUpScreen';   // Adjust the path as necessary
import HomeScreen from '../index'
import { registerRootComponent } from 'expo';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name = "Home" component = {HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

registerRootComponent(App);
export default App;
// App routing system