import { Injectable } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';

import { Credentials } from '../../admin/models/cred';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string = "http://localhost:3000";

  isLoggedIn: boolean = false;
  userLogged: Credentials | null = null;

  redirectNoAuthUrl: string = '/login';

  constructor(
    private http: HttpClient
  ) { }

  login(cred: Credentials): Observable<boolean> {
    return this.checkCredentials(cred).pipe(
      map((res => {
        if (res) {
          this.isLoggedIn = true;
          this.userLogged = res;
          return true
        } else {
          this.isLoggedIn = false;
          this.userLogged = null;
          return false 
        }
      }))
    )
    // return of(true).pipe(
    //   tap(() => this.isLoggedIn = true)
    // );
  }

  logout(): void {
    this.isLoggedIn = false;
    this.userLogged = null;
  }

  checkCredentials(cred: Credentials): Observable<Credentials> {
    const options = { 
      params: new HttpParams()
        .set('username', cred.username)
        .set('password', cred.password)
    };
    return this.http.get<Array<Credentials>>(`${this.apiUrl}/adminUsers`, options).pipe(
      // Ritorno solamente il primo (ed unico) elemento dell'array, perché l'attuale API restituisce sempre una lista
      map((res) => res[0])
    )
  }
}