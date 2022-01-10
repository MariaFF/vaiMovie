import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTab from './tabBottom';
import Detail from '../pages/Movies/Detail';
import SignUp from '../pages/SignUp';

const AppStack = createNativeStackNavigator()

const Routes = () => {
    return (
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#FFF', flex: 1 },
        }}>
      <AppStack.Screen name="SignUp" component={SignUp} />
      <AppStack.Screen name="Home" component={BottomTab} />
      <AppStack.Screen name="Detail" component={Detail} />

      </AppStack.Navigator>
    );
  };
  
  export default Routes;
