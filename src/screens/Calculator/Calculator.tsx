import React, {useEffect, useReducer, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';

import {Keypad} from '@components/Keypad';
import {Display} from '@components/Display';
import {History} from '@components/History';

import CalculationsCore from '@utils/calculator';
import {parenthesisModeHelper, pressHelper} from '@utils/helpers';
import {
  getCalculationsHistory,
  setCalculationsHistory,
} from '@utils/asyncStorage';

import {HistoryRecord} from 'types/index';

import {expressionReducer} from './reducer';
import {CalculatorContainer} from './styled';

export const Calculator = () => {
  const [history, setHistory] = useState<Array<HistoryRecord>>([]);

  const [calculator, setCalculator] = useState(new CalculationsCore(0));
  const [isParenthesis, setIsParenthesis] = useState(false);

  const isFocused = useIsFocused();

  const [expression, expressionDispatch] = useReducer(expressionReducer, {
    input: '0',
    value: '0',
  });

  useEffect(() => {
    getCalculationsHistory().then(data => {
      setHistory(data);
    });
  }, [isFocused]);

  const changeHistory = async (exp: string, res: number) => {
    const newHistory = [...history];
    newHistory.unshift({expression: exp, result: res});
    setCalculationsHistory(newHistory);
    setHistory(newHistory);
  };

  const handlePress = (buttonValue: string) => () => {
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
      parenthesisModeHelper(helperArguments);
      return;
    }
    pressHelper(helperArguments);
  };

  return (
    <CalculatorContainer>
      <Display expression={expression} />
      <History history={history} />
      <Keypad handlePress={handlePress} />
    </CalculatorContainer>
  );
};
