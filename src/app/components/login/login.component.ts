import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // Atributos de la clase
  loginForm:FormGroup = this.fb.group({ 
    email: [
      '',     // valor predeterminado del campo
      [     // validaciones
        Validators.required,
        Validators.email
      ]
    ],
    password: [ 
      '',     // valor predeterminado del campo
      [       // validaciones
        Validators.required,
        Validators.minLength( 8 )
      ]
    ]
    
  });
  /** Inyeccion de dependencias */
  constructor( private fb : FormBuilder ) {}

  /**Metodo: login */
login(){
    console.group('loginForm');
    console.log(this.loginForm.value);
    console.log(this.loginForm.value);
    console.groupEnd();
  }
}
