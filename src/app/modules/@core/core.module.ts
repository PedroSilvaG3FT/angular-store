import pages from './pages';
import helpers from './helpers';
import services from './services';
import components from './components';
import directives from './directives';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const SHARED_IMPORTS = [FormsModule, CommonModule];
@NgModule({
  imports: [...SHARED_IMPORTS],
  providers: [...services, ...helpers],
  declarations: [...components, ...pages, ...directives],
  exports: [...SHARED_IMPORTS, ...components, ...pages, ...directives],
})
export class CoreModule {}
