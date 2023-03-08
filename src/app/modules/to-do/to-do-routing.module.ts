import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardsComponent } from './pages/boards/boards.component';
import { ToDoLayoutComponent } from './layout/to-do-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ToDoLayoutComponent,
    children: [
      {
        path: '',
        component: BoardsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToDoRoutingModule {}
