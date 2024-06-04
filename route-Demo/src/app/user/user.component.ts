import { Component, effect, inject, input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // readonly #title = inject(Title);
  readonly #route = inject(Router);

  user_id = input<string>();

  constructor() {
    effect(() => {
      this.#title.setTitle(`User `);
    });
  }

  back() {
    this.#route.navigate(['', 'users'], { queryParams: { pet: 'Theo' } });
  }
}
