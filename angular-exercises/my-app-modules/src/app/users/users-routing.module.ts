import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { LessonsListComponent } from './components/lessons-list/lessons-list.component';
import { ProfessorsListComponent } from './components/professors-list/professors-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { userDetailResolver } from './resolvers/user-detail.resolver';

const routesUsers: Routes = [
  { path: 'list', component: UserListComponent, 
    children: [
      { path: 'lessons', component: LessonsListComponent },
      { path: 'professors', component: ProfessorsListComponent },
    ]
  },
  // { path: ':id', component: UserDetailsComponent, resolve: { studentId: userDetailNonNullableResolve } },
  { 
    path: 'form', 
    component: UserFormComponent, 
    resolve: { editStudent: userDetailResolver }
  },
  // Percorso invoca resolve
  // ResolveData { chiave: ResolveFunction<tipoRitorno> }
  // Se ritorno della ResolveFunction !== tipoRitorno => non eseguo navigazione
  // Se ritorno della ResolveFunction === tipoRitorno => eseguo navigazione
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routesUsers)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
