import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login-routing.module').then(m => m.LoginRoutingModule)
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'users',
        loadChildren: () => import('./modules/user/user-routing.module').then(m => m.UserRoutingModule)
      },
    ]
  },
  // {
  //   path: '',
  //   redirectTo: '/users',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
