import React from 'react';
import { SafeAreaView, TouchableOpacity, Image, Text, View } from 'react-native';
import styled from 'styled-components';

import hamburger from '../../assets/hamburger.png';

export default class About extends React.Component {
  constructor() {
    super();
    this.state = {
      drawerOpen: false,
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  getBurger() {
    const { drawerOpen } = this.state;
    if (drawerOpen) {
      return null;
    }
    return hamburger;
  }

  toggleDrawer() {
    const { drawerOpen } = this.state;
    const { navigation } = this.props;
    if (drawerOpen) {
      navigation.closeDrawer();
    } else {
      navigation.openDrawer();
    }
    this.setState({ drawerOpen: !drawerOpen });
  }

  render() {
    const { navigation, title } = this.props;
    return (
      <Header navigation={navigation}>
        <TouchableOpacity onPress={this.toggleDrawer}>
          <BurgerMenu source={this.getBurger()} />
        </TouchableOpacity>
        <Heading>{title}</Heading>
        <Spacer />
      </Header>
    );
  }
}

const Header = styled(SafeAreaView)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #00d1b2;
  height: 100;
`;

const BurgerMenu = styled(Image)`
  width: 24;
  height: 24;
  margin-left: 15;
`;

const Spacer = styled(View)`
  width: 24;
  height: 24;
  margin-right: 15;
`;

const Heading = styled(Text)`
  color: white;
`;
