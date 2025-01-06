import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import AccountScreen from './AccountScreen';
import PaymentsRecordsScreen from './PaymentsRecordsScreen';
import ComingSoonScreen from './ComingSoonScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const NavBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Account') {
              iconName = 'person-outline';
            } else if (route.name === 'Payments & Records') {
              iconName = 'wallet-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#006246',
          tabBarInactiveTintColor: '#C4C4C4',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
        <Tab.Screen
          name="Payments & Records"
          component={PaymentsRecordsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavBar;
