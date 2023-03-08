import services from './services';
import components from './components';
import { NgModule } from '@angular/core';
import { CoreModule } from '@/modules/@core/core.module';
import { ToDoRoutingModule } from './to-do-routing.module';
import { ToDoLayoutComponent } from './layout/to-do-layout.component';

@NgModule({
  exports: [...components],
  providers: [...services],
  imports: [CoreModule, ToDoRoutingModule],
  declarations: [...components, ToDoLayoutComponent],
})
export class ToDoModule {}
