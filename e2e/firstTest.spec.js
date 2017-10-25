describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  
  it('should have welcome screen', async () => {
    await expect(element(by.text('Welcome to React Native!'))).toBeVisible();
  });
  
  it('should show hello screen after tap', async () => {
    await expect(element(by.text('To get started, edit App.js'))).toBeVisible();
  });
})
