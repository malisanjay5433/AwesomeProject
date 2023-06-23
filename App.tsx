import React from 'react';
import {BottomTabNavigator} from './src/screens/BottomNavigator';
import {NavigationContainer} from '@react-navigation/native';
export const App: React.FC = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};
