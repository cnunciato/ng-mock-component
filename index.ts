import { Component, EventEmitter } from '@angular/core';

/**
 * Examples:
 * MockComponent({ selector: 'some-component' });
 * MockComponent({ selector: 'some-component', inputs: ['some-input', 'some-other-input'] });
 *
 * See https://angular.io/docs/ts/latest/api/core/index/Component-decorator.html for a list
 * of supported properties.
 */

export function MockComponent(options: Component): Component {
  const metadata = {...options};
  metadata.template = metadata.template || '';
  metadata.outputs = metadata.outputs || [];
  metadata.exportAs = metadata.exportAs || '';

  class Mock {}

  metadata.outputs.forEach(method => {
    Mock.prototype[method] = new EventEmitter<any>();
  });

  return Component(metadata)(Mock as any);
}
