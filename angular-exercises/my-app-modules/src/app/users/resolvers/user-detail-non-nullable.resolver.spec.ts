import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { userDetailNonNullableResolver } from './user-detail-non-nullable.resolver';
import { Student } from '../models/student';

describe('userDetailNonNullableResolver', () => {
  const executeResolver: ResolveFn<Student> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => userDetailNonNullableResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
