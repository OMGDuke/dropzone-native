import React from 'react';
import { createStackNavigator } from 'react-navigation';

import DrawerNavigator from './DrawerNavigator';
import Header from '../components/Header/Header';

export default createStackNavigator(
  {
    Home: {
      screen: DrawerNavigator,
    },
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routes, index } = navigation.state;
      console.log();
      const title = routes[index].routeName;
      return {
        header: <Header navigation={navigation} title={title} />,
      };
    },
  }
);
