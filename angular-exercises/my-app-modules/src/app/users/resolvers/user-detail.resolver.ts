import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { mergeMap, of, take } from 'rxjs';
import { Student } from '../models/student';

export const userDetailResolver: ResolveFn<Student | null> = (route, state) => {

  const router: Router = inject(Router);
  const usersService: UsersService = inject(UsersService);
  const id: string | null = route.queryParamMap.get('editStudentId');
  
  // Resolve di ipotetico dettaglio con path ":studentId"
  // const id: string = route.paramMap.get('studentId');

  if (id) {
    return usersService.getStudentById(id).pipe(mergeMap(student => {
      if (student) {
        // ResolveFn return tipo atteso => Navigazione prosegue
        return of(student);
      } else {
        // Se voglio bloccare la navigazione o fare redirect
        // Eseguo redirect: this.router.navigate(['....'])
        // return EMPTY => tipo di ritorno inatteso => blocca navigazione

        return of(null)
      }
    }))
  } else {
    return of(null)
  }
};
