import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.scss',
})
export class GreetingComponent {
  greetingMessage = signal('greeting works!');
  inputFromGreeting = input('Hello this string from greeting.ts');
}
