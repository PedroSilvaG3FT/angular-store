import services from './services';
import components from './components';
import { NgModule } from '@angular/core';
import { CoreModule } from '@/modules/@core/core.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationLayoutComponent } from './layout/authentication-layout.component';

@NgModule({
  exports: [...components],
  providers: [...services],
  imports: [CoreModule, AuthenticationRoutingModule],
  declarations: [...components, AuthenticationLayoutComponent],
})
export class AuthenticationModule {}
