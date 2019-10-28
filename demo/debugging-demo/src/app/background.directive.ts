import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {

  @HostBinding('style.background-color')
  @Input()
  appBackground: string;
  constructor(
  ) { }

}
