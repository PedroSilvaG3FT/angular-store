import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppStoreModule } from './store/store.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './modules/@core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { ToastService, AngularToastifyModule } from 'angular-toastify';

@NgModule({
  providers: [ToastService],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    CoreModule,
    BrowserModule,
    AppStoreModule,
    AppRoutingModule,
    AngularToastifyModule,
  ],
})
export class AppModule {}
