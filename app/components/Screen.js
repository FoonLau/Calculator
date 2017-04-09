import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Screen extends Component {
  render() {
    let overrideStyle;
    let fontSize = 60;

    if (this.props.content.length > 9) {
      fontSize = 50;
      if (this.props.content.length > 15) {
        fontSize = 40;
        if (this.props.content.length > 20) {
          fontSize = 30;
          if (this.props.content.length > 25) {
            fontSize = 26;
            if (this.props.content.length > 30) {
              fontSize = 20;
            }
          }
        }
      }
    }
    overrideStyle = StyleSheet.create({
      text: {
        fontSize: fontSize
      }
    });
    return (
      <View style={styles.container}>
        <Text style={[styles.text, overrideStyle.text]}>{ this.props.content }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    paddingRight: 10,
    paddingLeft: 10,
    height: 70
  },
  text: {
    color: '#fff',
    fontSize: 60,
    textAlign: 'right',
    fontWeight: '100',
    lineHeight: 70
  }
});

export default Screen;