import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'auth', loadChildren: () => import('./views/auth/auth.module').then(m => m.AuthModule) }, { path: 'hr', loadChildren: () => import('./views/hr/hr.module').then(m => m.HrModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
