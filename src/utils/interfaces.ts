import React from 'react';

import CalculatorCore from './calculator';

export enum OperationTypes {
  Add = '+',
  Sub = '-',
  Mul = '*',
  Div = '/',
  Remain = '%',
}

export type ActionTypes =
  | 'parenthesisMode'
  | 'clearEntry'
  | 'clear'
  | 'equals'
  | 'number'
  | 'openParenthesis'
  | 'firstValue'
  | 'changeSign'
  | 'changeOperation'
  | 'command';

export interface HelperArguments {
  buttonValue: string;
  expression: {input: string; value: string};
  expressionDispatch: React.Dispatch<{type: ActionTypes; payload: string}>;
  setIsParenthesis: React.Dispatch<React.SetStateAction<boolean>>;
  changeHistory: (expression: string, result: number) => void;
  setCalculator: React.Dispatch<React.SetStateAction<CalculatorCore>>;
  currentValue: number;
}
