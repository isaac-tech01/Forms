import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  userForm: FormGroup;

  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: [null, [Validators.required, Validators.min(18)]],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.formSubmit.emit(this.userForm.value);
    }
  }
}
