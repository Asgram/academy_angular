import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { BehaviorSubject, take } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, NgClass, NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgClass, NgStyle, FormsModule, NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
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
    private fb: FormBuilder
  ) {}

  // showColorClass: boolean = true

  // isColorClassShown(show: boolean): boolean {
  //   console.log("Metodo NgClass")
  //   // Logica varia
  //   return show;
  // }

  // get divStyles(): Record<string, string> {
  //   return {'font-size': '30px', 'background-color': 'yellow'}
  // }

  // // HTML <div style="font-size: 30px; font-weight: 900; ...."

  // exampleItem = {
  //   value: 'Lorem ipsum'
  // }

  // setExampleItemValue(event: string) {
  //   this.exampleItem.value = event.toUpperCase();
  // }

  // isShown: boolean = true;

  // forArray: Array<{id: number, value: string, role?: 'Reader' | 'Editor' | 'Admin'}> = [
  //   {id: 1, value: 'Lorem',  role: 'Admin'},
  //   {id: 2, value: 'Ipsum', role: 'Editor'},
  //   {id: 3, value: 'Sit', role: 'Reader'},
  //   {id: 4, value: 'Dolet', role: 'Reader'},
  //   {id: 5, value: 'Amo'}
  // ];

  // trackById(index: number, element: {id: number, value: string}): number {
  //   return element.id;
  // }

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
      this.isLoginAttempt = true;
      this.authService.login(this.loginForm.value).pipe(take(1))
      .subscribe(() => {
        if (this.authService.isLoggedIn)
          this.router.navigate(['/admin']);
        else
          this.isWrongAttempt$.next(true);
      })
    } else {
      this.isLoginAttempt = false;
      this.authService.signin(this.loginForm.value).pipe(take(1))
      .subscribe((res) => {
        if (res) {
          this.authService.registerUser(this.loginForm.value).pipe(take(1))
          .subscribe((res) => {
            if (res) this.login();
            else this.isWrongAttempt$.next(true);
          });
        } else {
          this.username.setErrors({ 'usernameInUse': true });
        }
      })
    }

  }

}
