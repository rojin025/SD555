import { Component, inject } from '@angular/core';
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
  readonly communication = inject(CommunicationService);

  $quote = toSignal(this.communication.generateQuote, {
    initialValue: { quote: 'Loacing...' },
  });
}
