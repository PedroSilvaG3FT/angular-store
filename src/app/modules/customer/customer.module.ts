import services from './services';
import components from './components';
import { NgModule } from '@angular/core';
import { CoreModule } from '@/modules/@core/core.module';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerLayoutComponent } from './layout/customer-layout.component';

@NgModule({
  exports: [...components],
  providers: [...services],
  imports: [CoreModule, CustomerRoutingModule],
  declarations: [...components, CustomerLayoutComponent],
})
export class CustomerModule {}
