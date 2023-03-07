import pages from './pages';
import helpers from './helpers';
import services from './services';
import components from './components';
import directives from './directives';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [FormsModule, CommonModule],
  providers: [...services, ...helpers],
  exports: [...components, ...pages, ...directives],
  declarations: [...components, ...pages, ...directives],
})
export class CoreModule {}
