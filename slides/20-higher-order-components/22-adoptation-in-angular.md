## HOC in Angular?
Mixins?
```TS

function HighOrderComponent<T>(Base: Type<T>) { 
  return class extends Base {
    constructor(...args: any[]) {
      super(...args);
    }
  }
}
@Component({})
class MyComponent { }

export const MyMixedComponent = HighOrderComponent(MyComponent);
```
