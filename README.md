# ng2-mock-component

A very simple Angular 2 module for mocking components in unit tests.

```
npm install --save-dev ng2-mock-component
```

## Usage

Just specify the `selector` of the component you wish to mock (along with whatever other
[metadata properties](https://angular.io/docs/ts/latest/api/core/index/Component-decorator.html)
you like), and `MockComponent` will supply that component with an empty template (unless you provide
a template string, in which case, it'll use that instead).

```
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MyComponent } from './src/my.component';
import { MockComponent } from 'ng2-mock-component';

describe('MyComponent', () => {
  let fixture, element;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MyComponent,
        MockComponent({ selector: 'my-subcomponent' })
      ]
    });

    fixture = TestBed.createComponent(MyComponent);
    element = fixture.debugElement;
  });

  it('works', () => {
    fixture.detectChanges();
    expect(element.query(By.css('my-subcomponent'))).not.toBeNull();
  });
});
```

## Author

Christian Nunciato (chris@nunciato.org)
