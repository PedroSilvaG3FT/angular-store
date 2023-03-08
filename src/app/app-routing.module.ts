import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGuard } from './modules/@core/guards/app.guard';
import { AuthenticationGuard } from './modules/@core/guards/authentication.guard';
import { NotFoundComponent } from './modules/@core/pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/authentication/login' },
  { path: 'not-found', component: NotFoundComponent },
  {
    path: 'authentication',
    canActivateChild: [AuthenticationGuard],
    loadChildren: () =>
      import('./modules/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: 'to-do',
    canActivateChild: [AppGuard],
    loadChildren: () =>
      import('./modules/to-do/to-do.module').then((m) => m.ToDoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
