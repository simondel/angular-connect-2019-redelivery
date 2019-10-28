import { Component } from '@angular/core';

@Component({
  selector: 'app-debugging',
  templateUrl: './debugging.component.html',
  styleUrls: ['./debugging.component.scss']
})
export class DebuggingComponent {
  value = 0;
  increment(value: number): void {
    this.value += value;
  }

  decrement(value: number): void {
    this.value -= value;
  }
}
