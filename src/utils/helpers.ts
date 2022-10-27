import Calc from './calculator';
import {sendCommand} from './commands';
import {HelperArguments, OperationTypes} from './interfaces';

export const handleParenthesisMode = ({
  buttonValue,
  expression,
  expressionDispatch,
  setIsParenthesis,
  changeHistory,
  setCalculator,
  currentValue,
}: HelperArguments) => {
  const {value, input} = expression;
  const openedParenthesisCount = (input.match(/\(/g) || []).length;
  const closedParenthesisCount = (input.match(/\)/g) || []).length;
  if (/\d/.test(buttonValue)) {
    expressionDispatch({type: 'parenthesisMode', payload: buttonValue});
  } else {
    switch (buttonValue) {
      case 'CE': {
        expressionDispatch({type: 'clearEntry', payload: ''});
        setIsParenthesis(false);
        break;
      }
      case 'C': {
        expressionDispatch({type: 'clear', payload: ''});
        setIsParenthesis(false);
        break;
      }
      case ')': {
        if (openedParenthesisCount === closedParenthesisCount + 1) {
          expressionDispatch({
            type: 'parenthesisMode',
            payload: buttonValue,
          });
          setIsParenthesis(false);
          const result = Math.round(eval(`${input})`) * 1e3) / 1e3;
          if (value === '0' || value.indexOf('=') >= 0) {
            const newCalc = new Calc(result);
            expressionDispatch({
              type: 'equals',
              payload: result.toString(),
            });
            changeHistory(`${input})`, result);
            setCalculator(newCalc);
            return;
          }

          const newCalc = new Calc(currentValue);
          newCalc.execute(
            sendCommand({
              operator: value[value.length - 1] as OperationTypes,
              value: result,
            }),
          );
          expressionDispatch({
            type: 'equals',
            payload: newCalc.getCurrentValue().toString(),
          });
          changeHistory(`${value}${input})`, newCalc.getCurrentValue());
          setCalculator(newCalc);
        } else {
          expressionDispatch({
            type: 'parenthesisMode',
            payload: buttonValue,
          });
        }
        break;
      }

      default: {
        expressionDispatch({type: 'parenthesisMode', payload: buttonValue});
      }
    }
  }
};

export const handlePressHelper = ({
  buttonValue,
  expression,
  expressionDispatch,
  setIsParenthesis,
  changeHistory,
  setCalculator,
  currentValue,
}: HelperArguments) => {
  const {value, input} = expression;
  if (/\d/.test(buttonValue) || buttonValue === '.') {
    expressionDispatch({type: 'number', payload: buttonValue});
  } else if (
    ((!value || value === '0') &&
      buttonValue !== '+/-' &&
      buttonValue !== 'C' &&
      buttonValue !== 'CE') ||
    (buttonValue === '=' && value.indexOf('=') >= 0)
  ) {
    if (value && buttonValue === '=') {
      if (value.indexOf('=') >= 0) {
        changeHistory(value.slice(0, value.indexOf('=')), currentValue);
      } else {
        changeHistory(input, Number(input));
      }
    } else if (buttonValue === '(') {
      expressionDispatch({type: 'openParenthesis', payload: ''});
      setIsParenthesis(true);
    } else {
      const newCalc = new Calc(0);
      newCalc.execute(
        sendCommand({
          operator: OperationTypes.Add,
          value: Number(input),
        }),
      );
      expressionDispatch({type: 'firstValue', payload: buttonValue});
      setCalculator(newCalc);
    }
  } else {
    const historyExpression = `${value}${input}`;
    switch (buttonValue) {
      case 'CE': {
        expressionDispatch({type: 'clearEntry', payload: ''});
        break;
      }
      case 'C': {
        expressionDispatch({type: 'clear', payload: ''});
        break;
      }
      case '+/-': {
        expressionDispatch({type: 'changeSign', payload: ''});
        break;
      }
      case '(': {
        expressionDispatch({type: 'openParenthesis', payload: ''});
        setIsParenthesis(true);
        break;
      }
      case '=': {
        const newCalc = new Calc(currentValue);
        newCalc.execute(
          sendCommand({
            operator: value[value.length - 1] as OperationTypes,
            value: Number(input),
          }),
        );
        expressionDispatch({
          type: 'equals',
          payload: newCalc.getCurrentValue().toString(),
        });
        changeHistory(historyExpression, newCalc.getCurrentValue());
        setCalculator(newCalc);
        break;
      }
      default: {
        if (value.indexOf('=') >= 0) {
          const newCalc = new Calc(0);
          newCalc.execute(
            sendCommand({
              operator: OperationTypes.Add,
              value: Number(input),
            }),
          );
          expressionDispatch({type: 'firstValue', payload: buttonValue});
          setCalculator(newCalc);
          break;
        }

        if (input === '0') {
          expressionDispatch({
            type: 'changeOperation',
            payload: buttonValue,
          });
          break;
        }

        const newCalc = new Calc(currentValue);
        newCalc.execute(
          sendCommand({
            operator: value[value.length - 1] as OperationTypes,
            value: Number(input),
          }),
        );
        expressionDispatch({
          type: 'command',
          payload: newCalc.getCurrentValue() + buttonValue,
        });
        changeHistory(historyExpression, newCalc.getCurrentValue());
        setCalculator(newCalc);
        break;
      }
    }
  }
};

export const capitalize = (str: string) =>
  `${str[0].toUpperCase()}${str.slice(1)}`;
