import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { AppRegistry } from 'react-native';

import reducer from './app/reducers';
import AppContainer from './app/containers/AppContainer';

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(logger)
  );

  return createStore(reducer, initialState, enhancer);
}

const store = configureStore();

export default class Calculator extends Component {
  render() {
    return (
      <Provider store={ store }>
        <AppContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Calculator', () => Calculator);
