import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  readonly #http = inject(HttpClient);

  generateQuote = this.#http.get<{ quote: string }>('https://api.kanye.rest/');
}
