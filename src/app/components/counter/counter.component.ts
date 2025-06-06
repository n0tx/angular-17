import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  counterMessage = signal('counter works!');

  counterValue = signal(0);

  increment() {
    this.counterValue.update((val) => val + 1);
  }
  decrement() {
    this.counterValue.update((val) => val - 1);
  }
  reset() {
    this.counterValue.set(0);
  }
}
