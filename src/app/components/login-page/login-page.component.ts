import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { materialModules, materialProviders } from '../../../materials';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login-page',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
  ],
  standalone: true,
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent implements OnInit {
  form!: FormGroup;
  errorMessage: string = "";
  constructor(private fb: FormBuilder, private router: Router, public auth: AuthService) {}

  ngOnInit(): void {
    this.form = this.buildForm();
  }

  buildForm(): FormGroup {
    return this.fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  onSubmit(): void {
    console.log('onsubmitclicked')
    this.auth
      .login(
        this.form.controls['login'].value,
        this.form.controls['password'].value
      )
      .subscribe({
        next: () => {
          console.log('next');
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          this.errorMessage = "Invalid login or password";
        }
      });
  }
}
