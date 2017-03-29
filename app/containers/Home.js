import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class Home extends Component {
  render() {
    return (
      <View style={{margin: 30}}>
        <Text style={{textAlign: "center"}}>This is a Calculator</Text>
      </View>
    );
  }
}

export default connect((state) => {return {};})(Home);