import {useEffect, useReducer, useRef, useState} from 'react';
import {StyleSheet, Vibration, View} from 'react-native';

import {Keypad} from '@components/Keypad';
import {Display} from '@components/Display';

import Calc from '@utils/calculator';
import {handleParenthesisMode, handlePressHelper} from '@utils/helpers';
import {
  getCalculationsHistory,
  setCalculationsHistory,
} from '@utils/asyncStorage';

import {expressionReducer} from './reducer';

import {HistoryRecord} from './interfaces';

export const Home = () => {
  const history = useRef<Array<HistoryRecord> | null>(null);
  const [calculator, setCalculator] = useState(new Calc(0));
  const [isParenthesis, setIsParenthesis] = useState(false);

  const [expression, expressionDispatch] = useReducer(expressionReducer, {
    input: '0',
    value: '0',
  });

  useEffect(() => {
    getCalculationsHistory().then(data => {
      history.current = data;
    });
  }, []);

  const changeHistory = async (exp: string, res: number) => {
    const newHistory = [...(history.current as Array<HistoryRecord>)];
    newHistory.unshift({expression: exp, result: res});
    history.current = newHistory;
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
    <View style={styles.homeContainer}>
      <Display expression={expression} />
      <Keypad handlePress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#000000',
  },
});
