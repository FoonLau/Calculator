import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Screen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{ this.props.content }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    paddingRight: 10,
    paddingLeft: 10
  },
  text: {
    color: '#fff',
    fontSize: 60,
    textAlign: 'right',
    fontWeight: '100'
  }
});

export default Screen;