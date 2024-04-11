import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of, tap } from 'rxjs';

import { Credentials } from '../../admin/models/cred';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string = "http://localhost:3000";

  isLoggedIn: boolean = false;
  userLogged$: BehaviorSubject<Credentials | null> = new BehaviorSubject<Credentials | null>(null);

  redirectNoAuthUrl: string = '/login';

  constructor(
    private http: HttpClient
  ) { }

  login(cred: Credentials): Observable<boolean> {
    return this.checkCredentials(cred).pipe(
      map((res => {
        if (res) {
          this.isLoggedIn = true;
          this.userLogged$.next(res);
          return true
        } else {
          this.isLoggedIn = false;
          this.userLogged$.next(null);
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
    this.userLogged$.next(null);
  }

  checkCredentials(cred: Credentials, isLogin: boolean = true): Observable<Credentials> {
    const options = { 
      params: new HttpParams().set('username', cred.username)
    };

    if (isLogin)
      options.params = options.params.set('password', cred.password)

    return this.http.get<Array<Credentials>>(`${this.apiUrl}/registeredUsers`, options).pipe(
      // Ritorno solamente il primo (ed unico) elemento dell'array, perché l'attuale API restituisce sempre una lista
      map((res) => res[0])
    )
  }

  signin(cred: Credentials): Observable<boolean> {
    return this.checkCredentials(cred, false).pipe(
      map((res => {
        if (res) {
          return false
        } else {
          return true
        }
      }))
    )
  }

  registerUser(cred: Credentials): Observable<Credentials> {
    const newUser = new Credentials(cred);
    return this.http.post<Credentials>(`${this.apiUrl}/registeredUsers`, newUser)
      .pipe(map((user) => {
        return user
      }));
  }
}