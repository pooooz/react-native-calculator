import {Command} from './commands';

export default class Calculator {
  current = 0;

  constructor(current?: number) {
    this.current = current || 0;
  }

  execute(command: Command) {
    this.current =
      Math.round(command.execute(this.current, command.value) * 1e3) / 1e3;
  }

  getCurrentValue() {
    return this.current;
  }
}
