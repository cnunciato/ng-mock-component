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

  let metadata: Component = {
    selector: options.selector,
    template: options.template || '',
    inputs: options.inputs,
    outputs: options.outputs || []
  };

  class Mock {}

  metadata.outputs.forEach((method) => {
    Mock.prototype[method] = new EventEmitter<any>();
  });

  return Component(metadata)(Mock);
}
