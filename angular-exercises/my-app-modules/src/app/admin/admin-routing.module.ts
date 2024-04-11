import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { adminChildrenGuard } from './guards/admin-children.guard';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { adminOnlyGuard } from './guards/admin-only.guard';

const routesAdmin: Routes = [
  { path: '', component: DashboardComponent, canActivateChild: [adminChildrenGuard],
    children: [
      { path: 'edit', component: EditUserComponent },
      { path: 'delete', component: DeleteUserComponent, canActivate: [adminOnlyGuard]}

      /*
        Vista: Lista di elementi
        Click bottone singolo elemento
        Nuova Vista: Lista di elementi + singolo elemento "modificabile"

        Componente padre: Lista
        Ciclare singoli elementi > Testo HTML || Campo di input
      */
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routesAdmin)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
