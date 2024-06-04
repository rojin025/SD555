import { Component, inject, signal } from '@angular/core';
import { CommunicationService } from './communication.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  $quoteUsingSubscribe = signal<{ quote: string }>({ quote: 'loading...' });
  #communication = inject(CommunicationService);

  $quote = toSignal(this.#communication.generateQuote, {
    initialValue: { quote: 'Loacing...' },
  });

  constructor() {
    this.#communication.generateQuote.subscribe((res) =>
      this.$quoteUsingSubscribe.set(res)
    );
  }
}
