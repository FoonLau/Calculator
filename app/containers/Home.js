import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import Keyboard from '../components/Keyboard';
import Screen from '../components/Screen';

class Home extends Component {
  render() {
    return (
      <View style={{ marginTop: 20, flex: 1}}>
        <Screen content="0" />
        <Keyboard />
      </View>
    );
  }
}

export default connect((state) => {return {};})(Home);