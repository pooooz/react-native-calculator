import {element} from 'detox';

import {testIds} from '../src/constants';

const clearHistory = async () => {
  await element(by.id(testIds.calculatorContainer)).swipe('left');
  await element(by.text('Clear all history')).tap();
  await element(by.id(testIds.settingsContainer)).swipe('right');
};

const clearDisplay = async () => {
  await element(by.text('C')).tap();
};

describe('Home screen', () => {
  beforeAll(async () => {
    await device.launchApp();
    await clearHistory();
  });

  it('Empty plug should be displayed', async () => {
    await expect(element(by.text('History is empty!'))).toBeVisible();
  });

  it('Basic calculations', async () => {
    const buttonValues = ['9', '+/-', '*', '3', '='];

    for (const buttonValue of buttonValues) {
      await element(by.id(buttonValue)).tap();
    }

    await expect(element(by.id(testIds.valueInput))).toHaveText('-27');
  });

  it('C erase', async () => {
    await clearDisplay();

    await expect(element(by.id(testIds.expressionInput))).toHaveText('0');
    await expect(element(by.id(testIds.valueInput))).toHaveText('0');
  });

  it('Parentheses calculations', async () => {
    const buttonValues = [
      '(',
      '(',
      '1',
      '6',
      '-',
      '1',
      ')',
      '%',
      '(',
      '9',
      '+',
      '3',
      ')',
      ')',
    ];

    for (const buttonValue of buttonValues) {
      await element(by.id(buttonValue)).tap();
    }

    await expect(element(by.id(testIds.valueInput))).toHaveText('3');
  });

  it('CE erase', async () => {
    await element(by.id('CE')).tap();

    await expect(element(by.id(testIds.expressionInput))).not.toHaveText('0');
    await expect(element(by.id(testIds.valueInput))).toHaveText('0');
  });

  it('History should be displayed', async () => {
    await clearDisplay();
    await expect(element(by.text('-9*3 = -27'))).toBeVisible();
    await expect(element(by.text('((16-1)%(9+3)) = 3'))).toBeVisible();
  });
});
