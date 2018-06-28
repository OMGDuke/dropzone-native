import { createDrawerNavigator } from 'react-navigation';

import Home from '../scenes/Home/Home';
import About from '../scenes/About/About';

export default createDrawerNavigator({
  Home: {
    screen: Home,
  },
  About: {
    screen: About,
  },
});
