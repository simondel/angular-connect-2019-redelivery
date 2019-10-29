### Optimizations

---

#### Avoid
```css
letter-spacing: $non-zero-value;
```

#### Prefer
```css
letter-spacing: 0;
```

#### Why?
Causes post processing in Chrome

---

#### Avoid
```css
opacity: 0;
```

#### Prefer
```css
visibility: hidden;
```

#### Why?
Browser won't have to render anything!

---

#### Avoid
```ts
@Directive({
    selector: 'tooltip',
    host: { 'mouseover': 'show()' }
})
export class Tooltip {}
```

#### Prefer
```ts
@Injectable({providedIn: 'root'})
export class Tooltip {
    constructor() {
        document.addEventListener('mouseOver')
    }
}
```

#### Why?
One listener per app insead of one per element

---

#### Avoid
```html
<div *ngFor="let item of items">
  <ng-container *ngTemplateOutlet="itemTemplate" />
  <ng-template #itemTemplate>Hello {{item}}!</ng-template>
</div>
```

#### Prefer
```html
<div *ngFor="let item of items">
  <ng-container *ngTemplateOutlet="itemTemplate; context: {item: item}" />
</div>

<ng-template #itemTemplate let-item="item">
    Hello {{item}}!
</ng-template>
```

#### Why?
One ng-template per component!

---

#### Avoid
```html
<div [ngStyle]="{color: 'red'}">
  Div content
</div>
```

#### Prefer
```html
<div [style.color]="'red'">
  Div content
</div>
```

#### Why?
More efficient change detection (property vs object)

---

#### Avoid
```ts
ChangeDetectorRef.detectChanges();
```

#### Prefer
```ts
ChangeDetectorRef.markForCheck();
```

#### Why?
`detectChanges` is sync and blocks rendering  
`markForCheck` is async and the calls are batched