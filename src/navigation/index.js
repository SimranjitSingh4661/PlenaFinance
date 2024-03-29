import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './tabs/bottomTabs';
import ScreenStack from './stacks/ScreenStack';
import {NavigationService} from '../services';
import {createStackNavigator} from '@react-navigation/stack';
import config from './config';

const Stack = createStackNavigator();

class AppNavigator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer ref={ref => NavigationService.setNavigatorRef(ref)}>
        <Stack.Navigator screenOptions={config}>
          <Stack.Screen name="Tabs" component={BottomTabs} />
          <Stack.Screen name="Screen" component={ScreenStack} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default AppNavigator;
