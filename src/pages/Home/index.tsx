import {useReducer, useState} from 'react';
import {View} from 'react-native';

import {Keypad} from '@components/Keypad';
import {Display} from '@components/Display';

import Calc from '@utils/calculator';
import {handleParenthesisMode, handlePressHelper} from '@utils/helpers';

import {expressionReducer} from './reducer';

export const Home = () => {
  const [calculator, setCalculator] = useState(new Calc(0));
  const [isParenthesis, setIsParenthesis] = useState(false);

  const [expression, expressionDispatch] = useReducer(expressionReducer, {
    input: '0',
    value: '0',
  });

  const changeHistory = () => {
    console.log('changeHistory');
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
      handleParenthesisMode(helperArguments);
      return;
    }
    handlePressHelper(helperArguments);
  };

  return (
    <View>
      <Display expression={expression} />
      <Keypad handlePress={handlePress} />
    </View>
  );
};
