import { newE2EPage } from '@stencil/core/testing';

describe('tob-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tob-container></tob-container>');

    const element = await page.find('tob-container');
    expect(element).toHaveClass('hydrated');
  });
});
