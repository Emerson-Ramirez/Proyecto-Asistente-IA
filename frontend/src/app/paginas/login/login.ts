import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule,FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,MatCardModule,MatInputModule,MatIconModule,MatButtonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  loginForm: FormGroup = new FormGroup({
    EmailId: new FormControl(""),
    Password: new FormControl("")
  });

  http = inject(HttpClient);
  router = inject(Router);

  onLogin(){

    const formValue = {
      email: this.loginForm.get('EmailId')?.value,
      password: this.loginForm.get('Password')?.value
    };

    this.http.post("http://localhost:3000/api/login",formValue).subscribe({
      next:(response:any)=>{

        if(response){
          alert("Inicio de sesión exitoso");
          this.router.navigateByUrl("/dashboard")
        } else {
          console.log(response);
          alert("Credenciales incorrectas");
        }
      },
      error:(error)=>{

        alert(error.statusText);
      }
    })
  }
}
