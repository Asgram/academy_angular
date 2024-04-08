import { ResolveFn, Router } from '@angular/router';
import { Student } from '../models/student';
import { inject } from '@angular/core';
import { UsersService } from '../services/users.service';
import { EMPTY, catchError, mergeMap, of } from 'rxjs';

export const userDetailNonNullableResolver: ResolveFn<Student> = (route, state) => {
  const router: Router = inject(Router);
  const usersService: UsersService = inject(UsersService);
  const id: string | null = route.paramMap.get('id');

  if (id) {
    return usersService.getStudentById(id).pipe(
      mergeMap(student => {
        if (student) {
          return of(student);
        } else {
          router.navigate(['/users']);
          return EMPTY
        }
      }),
      catchError((error) => {
        window.alert("Student not found")
        router.navigate(['/users']);
        return EMPTY
      })
    )
  } else {
    router.navigate(['/users']);
    return EMPTY
  }
};
