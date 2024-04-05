import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { BehaviorSubject, take } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  username!: FormControl;
  password!: FormControl;

  isWrongAttempt$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.username = new FormControl(null, [Validators.required]);
    this.password = new FormControl(null, [Validators.required]);
  
    this.loginForm = this.fb.group({
      username: this.username,
      password: this.password
    });
  }

  onSubmit(): void {
    // this.authService.isLoggedIn = true;

    this.authService.login(this.loginForm.value).pipe(take(1)).subscribe(() => {
      if (this.authService.isLoggedIn)
        this.router.navigate(['/admin']);
      else
        this.isWrongAttempt$.next(true);
    })
  }

}
