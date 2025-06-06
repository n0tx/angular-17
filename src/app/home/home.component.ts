import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  homeMessage = signal('home works!');
  dataFromHome = signal('Hello this string from home.ts');

  keyUpHandler(event: KeyboardEvent) {
    console.log(`user sedang mengetik key: ${event.key}`);
  }
}
