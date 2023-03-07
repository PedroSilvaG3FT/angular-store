import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppStoreModule } from './store/store.module';
import { environment } from 'environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './modules/@core/core.module';
import { BrowserModule } from '@angular/platform-browser';

import { ToastService, AngularToastifyModule } from 'angular-toastify';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

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
    BrowserAnimationsModule,

    provideStorage(() => getStorage()),
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp(environment.firebase_config)),
  ],
})
export class AppModule {}
