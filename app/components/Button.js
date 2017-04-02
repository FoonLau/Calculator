import React, { Component } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';

class Button extends Component {
  static defaultProps = {
    color: '#000',
    fontSize: 20
  };

  render() {
    return (
      <TouchableHighlight {...this.props}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
          <Text style={{fontSize: this.props.fontSize, color: this.props.color}}> { this.props.title } </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default Button;