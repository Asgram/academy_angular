import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { take } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login(): void {
    // this.authService.isLoggedIn = true;

    this.authService.login().pipe(take(1)).subscribe(() => {
      if (this.authService.isLoggedIn) {
        this.router.navigate(['/admin']);
      }
    })
  }

}
