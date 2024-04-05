import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';
import { userDetailResolver } from './user-detail.resolver';
import { Student } from '../models/student';

describe('userDetailResolver', () => {
  const executeResolver: ResolveFn<Student | null> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => userDetailResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
