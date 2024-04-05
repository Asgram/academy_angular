import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routesAdmin: Routes = [
  { path: '', component: DashboardComponent,
    children: [   // CanActivateChild > Role 2, 3
      // Child 1 > Only Role 2              CanActivate
      // Child 2 > Only Role 2 + Role 3     CanActivate
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routesAdmin)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
