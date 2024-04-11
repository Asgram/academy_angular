import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { UsersRoutingModule } from './users-routing.module';
import { MaterialModule } from '../core/material/material.module';

import { UsersService } from './services/users.service';

import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { LessonsListComponent } from './components/lessons-list/lessons-list.component';
import { ProfessorsListComponent } from './components/professors-list/professors-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { TestInterceptor } from '../core/interceptors/test.interceptor';


@NgModule({
  declarations: [
    UserListComponent,
    UserFormComponent,
    LessonsListComponent,
    ProfessorsListComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    UsersService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TestInterceptor,
      multi: true
    }]
})
export class UsersModule { }
