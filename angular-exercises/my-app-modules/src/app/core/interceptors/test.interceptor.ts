import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class TestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("Request", request);  
    // const token = 'MY_TOKEN';
    // const tokenRequest = request.clone({
    //   setHeaders: { 
    //     Authorization: token
    //   }
    // });
    // return next.handle(tokenRequest);
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error', error);
        return throwError(() => new Error(`${ error.message }`));
        return throwError(error);
      })
    );
  }
}
