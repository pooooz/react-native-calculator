import {element} from 'detox';

import {testIds} from '../../src/constants';

export const clearHistory = async () => {
  await element(by.id(testIds.calculatorContainer)).swipe('left');
  await element(by.text('Clear all history')).tap();
  await element(by.id(testIds.settingsContainer)).swipe('right');
};

export const clearDisplay = async () => {
  await element(by.id('C')).tap();
};

export const pressButtonArray = async (buttonValues: Array<string>) => {
  for (const buttonValue of buttonValues) {
    await element(by.id(buttonValue)).tap();
  }
};
