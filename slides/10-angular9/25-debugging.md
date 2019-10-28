### Debugging

Nieuwe debugging tools globaal beschikbaar in development omgeving:
```TS
interface Ng {
  getComponent(element: HTMLElement): Component;
  getContext(element: HTMLElement): AngularContext;
  getDirectives(element: HTMLElement): Array<TDirective>;
  getInjector(element: HTMLElement): Injector;
  getListeners(element: HTMLElement): Array<Listener>;
  // and more!
}
```