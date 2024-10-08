import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  authService = inject(AuthService);
  router = inject(Router);
  toast = inject(HotToastService);

  handleSubmit() {
    console.log(this.registerForm.value);
    this.authService.register(this.registerForm.value).subscribe({
      next: (data) => {
        console.log(data);
        this.toast.success('Dang ky thanh cong');
        this.router.navigate(['/login']);
      },
      error: (e) => {
        console.log(e);
        this.toast.error(e.error.message);
      },
    })
  }
}
