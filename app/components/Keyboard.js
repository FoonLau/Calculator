import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './Button';

class Keyboard extends Component {

  constructor() {
    super();
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress(value) {
    this.props.keyPressed(value)
  }

  render() {
    const rows = renderData.map((row, index) => {
      const items = row.items.map((btn) => {
        return <Button title={btn.title} style={btn.style} key={btn.title} onPress={() => {this.onButtonPress(btn.title)}} />
      });

      return <View style={row.style} key={index}>
               {items}
             </View>
    });

    return (
      <View style={ styles.container }>
        {rows}
      </View>
    )
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

const renderData = [
  {style: styles.row, items: [
    {title: 'C', style: styles.button},
    {title: '+/-', style: styles.button},
    {title: '%', style: styles.button},
    {title: '÷', style: [styles.button, styles.noRightBorder, styles.operator]}
  ]},
  {style: styles.row, items: [
    {title: '7', style: styles.button},
    {title: '8', style: styles.button},
    {title: '9', style: styles.button},
    {title: '×', style: [styles.button, styles.noRightBorder, styles.operator]}
  ]},
  {style: styles.row, items: [
    {title: '4', style: styles.button},
    {title: '5', style: styles.button},
    {title: '6', style: styles.button},
    {title: '−', style: [styles.button, styles.noRightBorder, styles.operator]}
  ]},
  {style: styles.row, items: [
    {title: '1', style: styles.button},
    {title: '2', style: styles.button},
    {title: '3', style: styles.button},
    {title: '+', style: [styles.button, styles.noRightBorder, styles.operator]}
  ]},
  {style: styles.row, items: [
    {title: '0', style: [styles.button, styles.zero, styles.noBottomBorder]},
    {title: '.', style: [styles.button, styles.noBottomBorder]},
    {title: '=', style: [styles.button, styles.noRightBorder, styles.noBottomBorder, styles.operator]}
  ]}
];



export default Keyboard;