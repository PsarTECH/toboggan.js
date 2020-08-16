import { newSpecPage } from '@stencil/core/testing';
import { TobContainer } from '../tob-container';

describe('tob-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TobContainer],
      html: `<tob-container></tob-container>`,
    });
    expect(page.root).toEqualHtml(`
      <tob-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tob-container>
    `);
  });
});
