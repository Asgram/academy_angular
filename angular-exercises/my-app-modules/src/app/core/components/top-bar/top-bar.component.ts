import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { BehaviorSubject } from 'rxjs';
import { Credentials } from '../../../admin/models/cred';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  userLogged$: BehaviorSubject<Credentials | null> = new BehaviorSubject<Credentials | null>(null);
  username!: string;

  constructor(private authService: AuthService) {
    this.userLogged$ = this.authService.userLogged$;
  }

}
