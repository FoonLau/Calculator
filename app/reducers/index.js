import { combineReducers } from 'redux';
import * as calculatorReducer from './calculator';

export default combineReducers(Object.assign(calculatorReducer));