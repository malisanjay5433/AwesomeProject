import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Home } from './Home.screen';
import { Contract } from './Contract.screen';
import { Profile } from './Profile.screen';
import { Offers } from './Offer.screen';
const BottomTabs = createBottomTabNavigator();

export const BottomTabNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Home" component={Home} />
      <BottomTabs.Screen name="Offers" component={Offers} />
      <BottomTabs.Screen name="Contract" component={Contract} />
      <BottomTabs.Screen name="Profile" component={Profile} />
    </BottomTabs.Navigator>
  );
};
