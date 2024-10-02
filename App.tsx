import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import SignInScreen from './screens/SignInScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }} // Hide header for splash screen
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ headerShown: false }} // Hide header for sign-in screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
