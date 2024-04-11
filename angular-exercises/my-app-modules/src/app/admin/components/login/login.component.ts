import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { BehaviorSubject, take } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, NgClass, NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { MaterialModule } from '../../../core/material/material.module';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  isLoginAttempt: boolean = true;

  loginForm!: FormGroup;
  username!: FormControl;
  password!: FormControl;

  isWrongAttempt$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.username = new FormControl(null, [Validators.required]);
    this.password = new FormControl(null, [Validators.required]);
  
    this.loginForm = this.fb.group({
      username: this.username,
      password: this.password
    });
  }

  login(isLogin: boolean = true): void {
    
    if (isLogin) {
      this.authService.login(this.loginForm.value).pipe(take(1))
      .subscribe(() => {
        if (this.authService.isLoggedIn)
          this.router.navigate(['/admin']);
        else
          this._snackBar.open('Failed Log In', 'Close');
      })
    } else {
      this.authService.signin(this.loginForm.value).pipe(take(1))
      .subscribe((res) => {
        if (res) {
          this.authService.registerUser(this.loginForm.value).pipe(take(1))
          .subscribe((res) => {
            if (res) this.login();
            else this._snackBar.open('Sign in invalid', 'Close');
          });
        } else {
          this.username.setErrors({ 'usernameInUse': true });
        }
      })
    }

  }

}
