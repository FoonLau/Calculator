import React, { Component } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';

class Button extends Component {

  constructor(props) {
    super(props);

    if (['÷', '×', '−', '+', '='].indexOf(props.title) !== -1) {
      this.state = {
        color: '#fff',
        fontSize: 36
      };
    } else {
      this.state = {
        color: '#000',
        fontSize: 26
      };
    }
  }

  render() {
    return (
      <TouchableHighlight {...this.props}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
          <Text style={{fontSize: this.state.fontSize, color: this.state.color}}> { this.props.title } </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default Button;