### Decorators

---

#### Angular 8
```ts
export class BaseMenu {
  constructor(private vcr: ViewContainerRef) {}
}

@Directive({selector: '[settingsMenu]'})
export class SettingsMenu extends BaseMenu {}
```

#### Angular 9
```ts
@Directive() /* Required! */
export class BaseMenu {
  constructor(private vcr: ViewContainerRef) {}
}

@Directive({selector: '[settingsMenu]'})
export class SettingsMenu extends BaseMenu {}
```

---

#### Angular 8
```ts
@Component({
  selector: 'base-menu',
  template: '<div></div>'
})
class BaseMenu {}

export class SettingsMenu extends BaseMenu {}
```

#### Angular 9
```ts
@Component({
  selector: 'base-menu',
  template: '<div></div>'
})
class BaseMenu {}

@Component({
  selector: 'base-menu',
  template: '<div></div>'
}) /* Required! */
export class SettingsMenu extends BaseMenu {}
```

---

#### Angular 8
```ts
export class TypeCaseService {...}
```

#### Angular 9
```ts
@Injectable()
export class TypeCaseService {...}
```
