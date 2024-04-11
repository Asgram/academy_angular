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
    this.username = this.authService.userLogged$.value ? this.authService.userLogged$.value.username : 'Anonimo';

    this.userLogged$ = this.authService.userLogged$;

    this.userLogged$.subscribe((user) => {
      console.log("Utente loggato in top-bar", user);
      this.username = user?.username ? user?.username : 'Anonimo';
    });
  }

  showCheckoutBtn: boolean = true;

  toggleCheckoutBtn(): void {
    // if (this.showCheckoutBtn) {
    //   this.showCheckoutBtn = false;
    // } else {
    //   this.showCheckoutBtn = true;
    // }

    // this.showCheckoutBtn = this.showCheckoutBtn ? false : true;

    this.showCheckoutBtn = !this.showCheckoutBtn;
  }

}
