const getInputType = (input) => {
  const number = [0,1,2,3,4,5,6,7,8,9];
  const unary = ['C', '+/-', '%'];
  const operator = ['÷', '×', '−', '+', '='];
  const dot = '.';

  if (number.indexOf(Number(input)) !== -1) {
    return 'NUMBER'
  } else if (unary.indexOf(input) !== -1) {
    return 'UNARY';
  }  else if (operator.indexOf(input) !== -1) {
    return 'OPERATOR';
  } else if (dot === input) {
    return 'DOT';
  } else {
    return 'Invalid Input';
  }
};

const processCalc = (operand, operator) => {
  switch(operator) {
    case '+':
      return Number(operand[0]) + Number(operand[1]);
    case '−':
      return Number(operand[0]) - Number(operand[1]);
    case '×':
      return Number(operand[0]) * Number(operand[1]);
    case '÷':
      return Number(operand[0]) / Number(operand[1]);
  }
};

const handleNumberInput = (currentValue, displayValue, operand) => {
  let value;

  operand = operand.slice();

  if (operand.length > 0) {
    value = currentValue;
    operand.push(value);
  } else {
    if (Number(displayValue) === 0 && String(displayValue).indexOf('.') === -1) {
      value = currentValue;
    } else {
      value = displayValue + currentValue;
    }
  }

  return {
    displayValue: value,
    operand: operand
  };
};

const handleUnaryInput = (currentValue, displayValue) => {
  switch(currentValue) {
    case 'C':
      return {
        displayValue: 0,
        operator: null,
        operand: []
      };
    case '+/-':
      return {
        displayValue: -Number(displayValue)
      };
    case '%':
      return {
        displayValue: Number(displayValue) * 0.01
      };
    default:
      return {};
  }
};

const handleOperatorInput = (currentValue, displayValue, operator, operand) => {
  switch(currentValue) {
    case '+':
    case '−':
    case '×':
    case '÷':
      if (operand.length > 0) {
        if (operand.length === 1) {
          return {
            operator: currentValue
          };
        } else {
          let value = processCalc(operand, operator);
          return {
            displayValue: value,
            operator: currentValue,
            operand: [value]
          };
        }
      } else {
        return {
          operator: currentValue,
          operand: [displayValue]
        };
      }
    case '=':
      if (operand.length > 0) {
        let op = operand;
        let value;

        if (operand.length === 1) {
          op = [operand[0], operand[0]];
        }
        value = processCalc(op, operator);

        return {
          displayValue: value,
          operand: [value]
        };
      } else {
        return {};
      }
    default:
      return {};
  }
};

const handleDotInput = (currentValue, displayValue) => {
  if (String(displayValue).indexOf('.') === -1) {
    return {
      displayValue: displayValue + '.'
    };
  } else {
    return {}
  }
};

export default function (state, action) {
  const currentValue = action.value;
  const inputType = getInputType(currentValue);
  const displayValue = state.displayValue;
  const operator = state.operator;
  const operand = state.operand;

  switch(inputType) {
    case 'NUMBER':
      return handleNumberInput(currentValue, displayValue, operand);
    case 'UNARY':
      return handleUnaryInput(currentValue, displayValue);
    case 'OPERATOR':
      return handleOperatorInput(currentValue, displayValue, operator, operand);
    case 'DOT':
      return handleDotInput(currentValue, displayValue);
    default:
      return {
        displayValue: 0,
        operator: null
      };
  }
}