describe('Home screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Basic calculation', async () => {
    await element(by.text('9')).tap();
    await element(by.text('*')).tap();
    await element(by.text('3')).tap();
    await element(by.text('=')).tap();
    await expect(element(by.text('27'))).toBeVisible();
  });
});
