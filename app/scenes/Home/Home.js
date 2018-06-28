import React from 'react';
import { SafeAreaView, Text } from 'react-native';

export default class Home extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  };

  render() {
    return (
      <SafeAreaView>
        <Text>Home</Text>
      </SafeAreaView>
    );
  }
}
