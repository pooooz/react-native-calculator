import {element} from 'detox';

import {clearDisplay, clearHistory, pressButtonArray} from './utils';

import {testIds} from '../src/constants';

describe('Home screen basic calculations', () => {
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

    await pressButtonArray(buttonValues);

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

describe('Exceptions', () => {
  beforeAll(async () => {
    await device.launchApp();
    await clearHistory();
  });

  beforeEach(async () => {
    await clearDisplay();
  });

  it('Floating point numbers', async () => {
    const buttonValues = ['.', '3', '*', '.', '8', '='];

    await pressButtonArray(buttonValues);

    await expect(element(by.id(testIds.valueInput))).toHaveText('0.24');
  });

  it('Uncertainty 1 / 0', async () => {
    const buttonValues = ['1', '/', '0', '='];

    await pressButtonArray(buttonValues);

    await expect(element(by.id(testIds.valueInput))).toHaveText('Infinity');
  });

  it('Uncertainty 0 / 0', async () => {
    const buttonValues = ['0', '/', '0', '='];

    await pressButtonArray(buttonValues);

    await expect(element(by.id(testIds.valueInput))).toHaveText('NaN');
  });

  it('Incorrect parenthesis opening', async () => {
    const buttonValues = ['7', '('];

    await pressButtonArray(buttonValues);

    await expect(element(by.id(testIds.valueInput))).toHaveText('(7');
  });

  it('Incorrect parenthesis closing', async () => {
    const buttonValues = ['7', ')'];

    await pressButtonArray(buttonValues);

    await expect(element(by.id(testIds.valueInput))).not.toHaveText('7)');
    await expect(element(by.id(testIds.expressionInput))).not.toHaveText('7)');
  });

  it('Bad parenthesis form', async () => {
    const buttonValues = [
      '(',
      '(',
      '6',
      '-',
      '1',
      ')',
      '(',
      '9',
      '+',
      '3',
      ')',
    ];

    await pressButtonArray(buttonValues);

    await expect(element(by.id(testIds.valueInput))).toHaveText('8');
  });
});
