import createReducer from '../lib/createReducer';
import * as types from '../actions/types';
import calc from './calc';

const initialState = {
  displayValue: 0,
  operand: [],
  operator: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.KEY_PRESSED:
      return Object.assign({}, state, calc(state, action));
    default:
      return state;
  }
}