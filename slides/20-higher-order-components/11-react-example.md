## Voorbeeld uit react

```TS
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

```TS
export class WrappedComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() { }
}
```

```TS
function highOrderComponent(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }
  }

  render() {
    return <WrappedComponent {...this.props} />
  }
}

```