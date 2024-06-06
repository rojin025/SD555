import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'form-Demo';

  form = inject(FormBuilder).nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', [Validators.required, this.customValidator]],
  });

  get email() {
    return this.form.controls.email;
  }

  get name() {
    return this.form.controls.name;
  }

  customValidator(control: AbstractControl) {
    return control.value.length > 6
      ? null
      : { error: 'length must be greater then 6.' };
  }
}
