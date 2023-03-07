import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './modules/@core/guards/admin.guard';
import { CustomerGuard } from './modules/@core/guards/customer.guard';
import { AuthenticationGuard } from './modules/@core/guards/authentication.guard';
import { NotFoundComponent } from './modules/@core/pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/authentication/login' },
  { path: 'not-found', component: NotFoundComponent },
  {
    path: 'authentication',
    // canActivateChild: [AuthenticationGuard],
    loadChildren: () =>
      import('./modules/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: 'admin',
    // canActivateChild: [AdminGuard],
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'customer',
    // canActivateChild: [CustomerGuard],
    loadChildren: () =>
      import('./modules/customer/customer.module').then(
        (m) => m.CustomerModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
