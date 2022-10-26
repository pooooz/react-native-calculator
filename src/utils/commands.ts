import {OperationTypes} from './interfaces';

export class Command {
  execute: (a: number, b: number) => number;
  value: number;
  constructor(execute: (a: number, b: number) => number, value: number) {
    this.execute = execute;
    this.value = value;
  }
}

const add = (x: number, y: number) => x + y;
const sub = (x: number, y: number) => x - y;
const mul = (x: number, y: number) => x * y;
const div = (x: number, y: number) => x / y;
const remain = (x: number, y: number) => x % y;

const addCommand = (value: number) => new Command(add, value);

const subCommand = (value: number) => new Command(sub, value);

const mulCommand = (value: number) => new Command(mul, value);

const divCommand = (value: number) => new Command(div, value);

const remainCommand = (value: number) => new Command(remain, value);

export const sendCommand = ({
  operator,
  value,
}: {
  operator: OperationTypes;
  value: number;
}) => {
  switch (operator) {
    case OperationTypes.Add: {
      return addCommand(value);
    }
    case OperationTypes.Sub: {
      return subCommand(value);
    }
    case OperationTypes.Mul: {
      return mulCommand(value);
    }
    case OperationTypes.Div: {
      return divCommand(value);
    }
    case OperationTypes.Remain: {
      return remainCommand(value);
    }
    default: {
      throw new Error('The specified operation failed');
    }
  }
};
