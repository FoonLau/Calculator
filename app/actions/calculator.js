import types from './types';

export function keyPressed(value) {
  return {
    type: types.KEY_PRESSED,
    value: value
  };
}

export function updateDisplay(content) {
  return {
    type: types.UPDATE_DISPLAY,
    content: content
  };
}