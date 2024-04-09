import { NgModule } from '@angular/core';
import { ResolveFn, RouterModule, Routes } from '@angular/router';

import { authGuard } from './core/guards/auth.guard';

import { HomepageComponent } from './core/components/homepage/homepage.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const resolveTitle: ResolveFn<string> = () => Promise.resolve('Store');

const routes: Routes = [
  /*
  { path: '', component: Componente avente top-bar + router-outlet.
    children:
      Moduli dove mostrare top-bar
  },
  { path: 'xxx', component: Componente senza top-bar,
    children:
      Moduli senza top-bar
  }
   */
  { path: '', component: HomepageComponent },
  { path: 'login', loadComponent: () => import('./admin/components/login/login.component').then(mod => mod.LoginComponent)},
  { 
    path: 'store', 
    loadChildren: () => import('./store/store.module').then(m => m.StoreModule), 
    title: resolveTitle 
  },
  { 
    path: 'users', 
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule), 
    title: 'Users'
  },
  { 
    path: 'admin', 
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), 
    title: 'Admin',
    canActivate: [authGuard]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
