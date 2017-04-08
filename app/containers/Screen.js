import React, { Component } from 'react';
import { connect } from 'react-redux';
import Screen from '../components/Screen';

const mapStateToProps = (state) => {
  return {
    content: state.displayValue
  };
};

export default connect(mapStateToProps)(Screen);