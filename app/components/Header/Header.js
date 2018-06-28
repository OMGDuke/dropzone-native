import React from 'react';
import { SafeAreaView, TouchableOpacity, Image, Text } from 'react-native';

import hamburger from '../../assets/hamburger.png';

export default ({ navigation, title }) => (
  <SafeAreaView
    style={{ height: 100, width: '100%', backgroundColor: 'white' }}
    navigation={navigation}
  >
    <Text>{title}</Text>
    <TouchableOpacity onPress={navigation.toggleDrawer}>
      <Image source={hamburger} style={{ width: 24, height: 24 }} />
    </TouchableOpacity>
  </SafeAreaView>
);
