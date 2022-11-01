export const expressionReducer = (
  expression: {value: string; input: string},
  action: {type: string; payload: string},
) => {
  const {value, input} = expression;
  switch (action.type) {
    case 'number': {
      if (input === '0') {
        return {...expression, input: action.payload};
      }
      if (action.payload === '.' && /\./gi.test(input)) {
        return {...expression};
      }
      return {...expression, input: input + action.payload};
    }
    case 'firstValue': {
      return {input: '0', value: input + action.payload};
    }
    case 'command': {
      return {input: '0', value: action.payload};
    }
    case 'equals': {
      if (value !== '0' && value.indexOf('=') < 0) {
        return {
          input: action.payload,
          value: `${value + input}=${action.payload}`,
        };
      }
      return {
        input: action.payload,
        value: `${input}=${action.payload}`,
      };
    }
    case 'clearEntry': {
      return {
        input: '0',
        value: value,
      };
    }
    case 'clear': {
      return {
        input: '0',
        value: '0',
      };
    }
    case 'changeSign': {
      return {
        input:
          input.toString()[0] === '-' ? input.toString().slice(1) : `-${input}`,
        value: value,
      };
    }
    case 'changeOperation': {
      return {
        input: '0',
        value: value.slice(0, value.length - 1) + action.payload,
      };
    }
    case 'openParenthesis': {
      if (input === '0') {
        return {
          input: '(',
          value: value,
        };
      }
      if (!Number.isNaN(input)) {
        return {
          input: `(${input}`,
          value: value,
        };
      }
      return {
        input: `${input}(`,
        value: value,
      };
    }
    case 'parenthesisMode': {
      if (action.payload === '(' && /\d/.test(input[input.length - 1])) {
        return {
          input: input,
          value: value,
        };
      }
      if (/\d/.test(action.payload) && input[input.length - 1] === ')') {
        return {
          input: input,
          value: value,
        };
      }
      if (
        !/\d/.test(action.payload) &&
        input[input.length - 1] === '(' &&
        action.payload !== '('
      ) {
        return {
          input: input,
          value: value,
        };
      }
      if (/\d/.test(action.payload) || action.payload === '.') {
        return {
          input: input + action.payload,
          value: value,
        };
      }
      if (
        action.payload !== '(' &&
        (/\d/.test(input[input.length - 1]) ||
          input[input.length - 1] === ')' ||
          input[input.length - 1] === '(')
      ) {
        return {
          input: input + action.payload,
          value: value,
        };
      }
      if (action.payload === '(' && !/\d/.test(input[input.length - 1])) {
        return {
          input: input + action.payload,
          value: value,
        };
      }
      return {
        input: input.slice(0, input.length - 1) + action.payload,
        value: value,
      };
    }
    default:
      return expression;
  }
};
