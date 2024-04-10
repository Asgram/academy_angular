import { NgModule } from '@angular/core';
import { ResolveFn, RouterModule, Routes } from '@angular/router';

import { authGuard } from './core/guards/auth.guard';

import { HomepageComponent } from './core/components/homepage/homepage.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const resolveTitle: ResolveFn<string> = (route) => {
  let pageTitle = 'Academy App';
  let sectionName: string = route.routeConfig?.path!;
  if (sectionName) {
    if (sectionName == '**')
      sectionName = 'Page Not Found';
    else
      sectionName = sectionName.at(0)?.toUpperCase() + sectionName.slice(1);
    pageTitle = pageTitle + ' | ' + sectionName;
  }
  return Promise.resolve(pageTitle);
};

const routes: Routes = [
  { path: '', component: HomepageComponent, title: resolveTitle },
  { path: 'login', loadComponent: () => import('./admin/components/login/login.component').then(mod => mod.LoginComponent),
    title: resolveTitle
  },
  { 
    path: 'store', 
    loadChildren: () => import('./store/store.module').then(m => m.StoreModule), 
    title: resolveTitle 
  },
  { 
    path: 'academy', 
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule), 
    title: resolveTitle
  },
  { 
    path: 'admin', 
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), 
    title: resolveTitle,
    canActivate: [authGuard]
  },
  { path: '**', component: PageNotFoundComponent, title: resolveTitle }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
