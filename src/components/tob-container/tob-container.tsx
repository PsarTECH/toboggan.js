import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'tob-container',
  styleUrl: 'tob-container.css',
  shadow: true,
})
export class TobContainer {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
