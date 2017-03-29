import createReducer from '../lib/createReducer';
import * as types from '../actions/types'

export const add =  createReducer({}, {
  [types.ADD](state, action) {}
});