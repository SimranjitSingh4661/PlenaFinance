import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from './CustomTabBar';
import {NAVIGATION} from '../../constants';
import {HomeScreen, CategoriesScreen, FavouriteScreen} from '../../screens';
import config from '../config';

const BottomTabs = createBottomTabNavigator();

export default () => {
  return (
    <BottomTabs.Navigator
      screenOptions={config}
      
      tabBar={props => {
        return <CustomTabBar {...props} />;
      }}>
      <BottomTabs.Screen
        name={NAVIGATION.SCREENS.HOME_SCREEN}
        component={HomeScreen}
      />
      <BottomTabs.Screen
        name={NAVIGATION.SCREENS.CATEGORIES_SCREEN}
        component={CategoriesScreen}
      />
      <BottomTabs.Screen
        name={NAVIGATION.SCREENS.FAVOURITE_SCREEN}
        component={FavouriteScreen}
      />
    </BottomTabs.Navigator>
  );
};
