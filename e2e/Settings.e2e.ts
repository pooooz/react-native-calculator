import {element} from 'detox';

import {clearHistory, pressButtonArray} from './utils';

import {testIds} from '../src/constants';

describe('Settings screen functionality', () => {
  beforeAll(async () => {
    await device.launchApp();
    await clearHistory();
    await element(by.id(testIds.calculatorContainer)).swipe('left');
    await element(by.text('No')).tap();
    await device.reloadReactNative();
    await element(by.id(testIds.calculatorContainer)).swipe('left');
  });

  it('Availability of basic elements', async () => {
    await expect(element(by.id(testIds.settingsContainer))).toBeVisible();
    await expect(element(by.id(testIds.themeSwitcherContainer))).toBeVisible();
    await expect(
      element(by.id(testIds.buttonAssemblingSwitcherContainer)),
    ).toBeVisible();
    await expect(element(by.id(testIds.clearButton))).toBeVisible();
  });

  it('Clearing history', async () => {
    await element(by.id(testIds.settingsContainer)).swipe('right');

    await expect(element(by.text('History is empty!'))).toBeVisible();

    await pressButtonArray(['1', '+', '2', '=']);

    await expect(element(by.text('History is empty!'))).not.toBeVisible();
    await element(by.id(testIds.calculatorContainer)).swipe('left');
    await element(by.id(testIds.clearButton)).tap();

    await element(by.id(testIds.settingsContainer)).swipe('right');
    await expect(element(by.text('History is empty!'))).toBeVisible();
    await element(by.id(testIds.calculatorContainer)).swipe('left');
  });

  it('Changing themes', async () => {
    await element(by.text('Light theme')).tap();
    await element(by.text('Disco theme')).tap();
    await element(by.text('Dark theme')).tap();

    await element(by.id(testIds.themeSwitcherContainer)).swipe('up');

    await element(by.text('Ultraviolet theme')).tap();
  });

  it('Changing button assembling animation', async () => {
    await element(by.text('Yes')).tap();
    await device.reloadReactNative();
    await element(by.id(testIds.calculatorContainer)).swipe('left');
    await element(by.text('No')).tap();
  });
});
