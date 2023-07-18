import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  //atributos
  registerForm = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.email
      ]
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        
      ]
    ]
    
  })
  constructor( private fb : FormBuilder ) {}
    
  register() {
    console.group('registerForm');
    console.info(this.registerForm.value);
    console.info(this.registerForm.valid);
    console.groupEnd();
  }
}
