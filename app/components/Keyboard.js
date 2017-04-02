import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './Button';

class Keyboard extends Component {
  onButtonPress() {
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.row }>
          <Button style={ styles.button } onPress={ this.onButtonPress } title="C"/>
          <Button style={ styles.button } onPress={ this.onButtonPress } title="+/-"/>
          <Button style={ styles.button } onPress={ this.onButtonPress } title="%"/>
          <Button style={ [styles.button, styles.noRightBorder, styles.operator] } onPress={ this.onButtonPress } {...operatorFont} title="÷"/>
        </View>
        <View style={ styles.row }>
          <Button style={ styles.button } onPress={ this.onButtonPress } title="7"/>
          <Button style={ styles.button } onPress={ this.onButtonPress } title="8"/>
          <Button style={ styles.button } onPress={ this.onButtonPress } title="9"/>
          <Button style={ [styles.button, styles.noRightBorder, styles.operator] } onPress={ this.onButtonPress } {...operatorFont} title="×"/>
        </View>
        <View style={ styles.row }>
          <Button style={ styles.button } onPress={ this.onButtonPress } title="4"/>
          <Button style={ styles.button } onPress={ this.onButtonPress } title="5"/>
          <Button style={ styles.button } onPress={ this.onButtonPress } title="6"/>
          <Button style={ [styles.button, styles.noRightBorder, styles.operator] } onPress={ this.onButtonPress } {...operatorFont} title="−"/>
        </View>
        <View style={ styles.row }>
          <Button style={ styles.button } onPress={ this.onButtonPress } title="1"/>
          <Button style={ styles.button } onPress={ this.onButtonPress } title="2"/>
          <Button style={ styles.button } onPress={ this.onButtonPress } title="3"/>
          <Button style={ [styles.button, styles.noRightBorder, styles.operator] } onPress={ this.onButtonPress } {...operatorFont} title="+"/>
        </View>
        <View style={ styles.row }>
          <Button style={ [styles.button, styles.zero, styles.noBottomBorder] }  onPress={ this.onButtonPress } title="0"/>
          <Button style={ [styles.button, styles.noBottomBorder] } onPress={ this.onButtonPress } title="."/>
          <Button style={ [styles.button, styles.noRightBorder, styles.noBottomBorder, styles.operator] } onPress={ this.onButtonPress } {...operatorFont} title="="/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, flexDirection: 'column'},
  row: {flex: 1, flexDirection: 'row'},
  button: {
    flex: 1,
    borderColor: '#8C8C8C',
    backgroundColor: '#E0E0E0',
    borderBottomWidth: 1,
    borderRightWidth: 1
  },
  zero: {
    flex: 2,
    paddingRight: 1
  },
  noRightBorder: {
    borderRightWidth: 0
  },
  noBottomBorder: {
    borderBottomWidth: 0
  },
  operator: {
    backgroundColor: '#EF8F3D'
  }
});

const operatorFont = {
  color: '#fff',
  fontSize: 26
};

export default Keyboard;