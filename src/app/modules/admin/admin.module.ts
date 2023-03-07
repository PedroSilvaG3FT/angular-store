import services from './services';
import components from './components';
import { NgModule } from '@angular/core';
import { CoreModule } from '@/modules/@core/core.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './layout/admin-layout.component';

@NgModule({
  exports: [...components],
  providers: [...services],
  imports: [CoreModule, AdminRoutingModule],
  declarations: [...components, AdminLayoutComponent],
})
export class AdminModule {}
