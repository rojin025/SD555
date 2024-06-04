import { Component, inject, signal } from '@angular/core';
import { CommunicationService } from './communication.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  #communication = inject(CommunicationService);
  $quoteUsingSubscribe = signal<{ quote: string }>({ quote: 'loading...' });
  quoteUsingAsyncPipe$!: Observable<{ quote: string }>;

  constructor() {
    /** Consume the Observable with .subscribe() */
    this.#communication.generateQuote.subscribe((res) =>
      this.$quoteUsingSubscribe.set(res)
    );

    /**
     * Consume the Observable with `AsyncPipe`
     */
    this.quoteUsingAsyncPipe$ = this.#communication.generateQuote;
  }

  /**
   *Convert the Observable to a Signal with toSignal
   */
  $quote = toSignal(this.#communication.generateQuote, {
    initialValue: { quote: 'Loacing...' },
  });
}
