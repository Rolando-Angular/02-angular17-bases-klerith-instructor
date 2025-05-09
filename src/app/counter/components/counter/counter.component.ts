import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{counter}}</h3>

    <button type="button" (click)="increaseBy(1)">+1</button>
    <button type="button" (click)="increaseBy(-1)">-1</button>
    <button type="button" (click)="resetCounter()">Reset</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;

  public increaseBy(value: number): void {
    this.counter += value;
  }

  public resetCounter(): void {
    this.counter = 10;
  }

}
