import React from 'react';
import { SafeAreaView, Text } from 'react-native';

export default class About extends React.Component {
  static navigationOptions = {
    drawerLabel: 'About',
  };

  render() {
    return (
      <SafeAreaView>
        <Text>About</Text>
      </SafeAreaView>
    );
  }
}
