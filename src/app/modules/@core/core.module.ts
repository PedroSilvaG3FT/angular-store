import helpers from './helpers';
import services from './services';
import components from './components';
import { NgModule } from '@angular/core';
import pages from './pages';

@NgModule({
  imports: [],
  exports: [...components, ...pages],
  providers: [...services, ...helpers],
  declarations: [...components, ...pages],
})
export class CoreModule {}
