import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UsersRoutingModule } from './users-routing.module';
import { UsersService } from './services/users.service';

import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { LessonsListComponent } from './components/lessons-list/lessons-list.component';
import { ProfessorsListComponent } from './components/professors-list/professors-list.component';


@NgModule({
  declarations: [
    UserListComponent,
    UserFormComponent,
    LessonsListComponent,
    ProfessorsListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UsersService]
})
export class UsersModule { }
