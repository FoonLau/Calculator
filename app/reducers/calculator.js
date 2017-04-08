import createReducer from '../lib/createReducer';
import * as types from '../actions/types'

const initialState = {
  displayValue: 0
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.KEY_PRESSED:
      return Object.assign({}, state, {displayValue: action.value});
    default:
      return state;
  }
}