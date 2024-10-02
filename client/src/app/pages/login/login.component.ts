import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  authService = inject(AuthService);
  router = inject(Router);
  toast = inject(HotToastService);

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  handleSubmit() {
    console.log(this.loginForm.value);
    this.authService
      .login(this.loginForm.value)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/']);
          localStorage.setItem('token', data.token);
        },
        error: (e) => {
          console.log(e);
          this.toast.error(e.error.message);
        },
      });
  }
}