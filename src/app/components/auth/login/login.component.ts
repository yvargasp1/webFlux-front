import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule
import { AuthService } from '../../../services/auth.service';
import { Login } from '../../../models/auth/login.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputTextModule, ButtonModule, ReactiveFormsModule],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService , private router:Router) {}

  onLoginForm() {
    const loginUser = new Login();
    loginUser.username = this.loginForm.get('username')?.value!;
    loginUser.password = this.loginForm.get('password')?.value!;
    console.log(this.loginForm,loginUser);
    this.authService.login(loginUser).subscribe({
      next: (value) => {
        console.log(value);
        localStorage.setItem('token',value.token)
        this.router.navigate(['/home'])
      },
      error: (err) => {
        console.log(err);
      },
    });
    
  }
}
