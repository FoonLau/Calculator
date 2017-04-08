import * as types from './types';

export function keyPressed(value) {
  return {
    type: types.KEY_PRESSED,
    value: value
  };
}