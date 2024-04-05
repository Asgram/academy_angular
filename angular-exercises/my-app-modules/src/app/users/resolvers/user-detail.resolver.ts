import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { mergeMap, of, take } from 'rxjs';
import { Student } from '../models/student';

export const userDetailResolver: ResolveFn<Student | null> = (route, state) => {

  const router: Router = inject(Router);
  const usersService: UsersService = inject(UsersService);
  const id: string | null = route.queryParamMap.get('editStudentId');

  if (id) {
    return usersService.getStudentById(id).pipe(mergeMap(student => {
      if (student) {
        return of(student);
      } else {
        return of(null)
      }
    }))
  } else {
    return of(null)
  }
};
