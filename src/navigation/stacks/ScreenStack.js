import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NAVIGATION} from '../../constants';
import {CartScreen, ProductDetailScreen} from '../../screens';
import config from '../config';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={config}>
      <Stack.Screen
        name={NAVIGATION.SCREENS.CART_SCREEN}
        component={CartScreen}
      />
      <Stack.Screen
        name={NAVIGATION.SCREENS.PRODUCTDETAIL_SCREEN}
        component={ProductDetailScreen}
      />
    </Stack.Navigator>
  );
};
