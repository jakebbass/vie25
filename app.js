import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from './components/SplashScreen';
import SignUpSignInScreen from './components/SignUpSignInScreen';
import HomeScreen from './components/HomeScreen';
import AccountScreen from './components/AccountScreen';
import PaymentsRecordsScreen from './components/PaymentsRecordsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SplashScreen />
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
        <Tab.Screen name="Payments & Records" component={PaymentsRecordsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
