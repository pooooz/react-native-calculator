import {useEffect, useReducer, useState} from 'react';
import {Vibration} from 'react-native';

import {Keypad} from '@components/Keypad';
import {Display} from '@components/Display';
import {History} from '@components/History';

import Calc from '@utils/calculator';
import {handleParenthesisMode, handlePressHelper} from '@utils/helpers';
import {
  getCalculationsHistory,
  setCalculationsHistory,
} from '@utils/asyncStorage';

import {expressionReducer} from './reducer';
import {HistoryRecord} from './interfaces';
import {CalculatorContainer} from './styled';

export const Calculator = () => {
  const [history, setHistory] = useState<Array<HistoryRecord>>([]);

  const [calculator, setCalculator] = useState(new Calc(0));
  const [isParenthesis, setIsParenthesis] = useState(false);

  const [expression, expressionDispatch] = useReducer(expressionReducer, {
    input: '0',
    value: '0',
  });

  useEffect(() => {
    getCalculationsHistory().then(data => {
      setHistory(data);
    });
  }, []);

  const changeHistory = async (exp: string, res: number) => {
    const newHistory = [...(history as Array<HistoryRecord>)];
    newHistory.unshift({expression: exp, result: res});
    await setCalculationsHistory(newHistory);
    setHistory(newHistory);
  };

  const handlePress = (buttonValue: string) => () => {
    switch (buttonValue) {
      case '=':
        Vibration.vibrate(100);
        break;
      default:
        Vibration.vibrate(1);
    }
    const helperArguments = {
      buttonValue,
      expression,
      expressionDispatch,
      setIsParenthesis,
      changeHistory,
      setCalculator,
      currentValue: calculator.getCurrentValue(),
    } as const;

    if (isParenthesis) {
      if (buttonValue === '+/-' || buttonValue === '=') {
        return;
      }
      handleParenthesisMode(helperArguments);
      return;
    }
    handlePressHelper(helperArguments);
  };

  return (
    <CalculatorContainer>
      <Display expression={expression} />
      <History history={history} />
      <Keypad handlePress={handlePress} />
    </CalculatorContainer>
  );
};
