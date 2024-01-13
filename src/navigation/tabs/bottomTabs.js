import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from './CustomTabBar';
import {HomeScreen, CartScreen, ProductDetailScreen} from '../../screens';
import config from '../config';

const BottomTabs = createBottomTabNavigator();

export default () => {
  return (
    <BottomTabs.Navigator
      screenOptions={config}
      tabBar={props => {
        return <CustomTabBar {...props} />;
      }}>
      <BottomTabs.Screen name="Tab" component={HomeScreen} />
      <BottomTabs.Screen name="Tab1" component={CartScreen} />
      <BottomTabs.Screen name="Tab2" component={ProductDetailScreen} />
    </BottomTabs.Navigator>
  );
};
