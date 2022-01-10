import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Movies from '../pages/Movies/List';
import Favorite from '../pages/Favorite';

const TabBottom = createBottomTabNavigator();

const Tabs = () => {
  return (
    <TabBottom.Navigator
      barStyle={{ backgroundColor: '#fff' }}
      inactiveColor="#718096"
      activeColor="#007EF2">
      <TabBottom.Screen
        name="Movies"
        component={Movies}
        options={{
          tabBarLabel: 'Movies',
          tabBarIcon: ({ color }) => <Icon name="info" color={color} size={22} />,
        }}
      />
      <TabBottom.Screen
        component={Favorite}
        name="Favorite"
        options={{
          tabBarLabel: 'Favorite',
          tabBarIcon: ({ color }) => <Icon name="home" color={color} size={22} />,
        }}
      />
    </TabBottom.Navigator>
  );
};

export default Tabs;
