import { NgModule, isDevMode } from '@angular/core';
import { AppComponent } from './app.component';
import providers from './modules/@core/providers';

import { AppStoreModule } from './store/store.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './modules/@core/core.module';
import { BrowserModule } from '@angular/platform-browser';

import { ToastService, AngularToastifyModule } from 'angular-toastify';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { provideAuth, getAuth } from '@angular/fire/auth';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  providers: [ToastService, providers.fireBase],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    CoreModule,
    BrowserModule,
    AppStoreModule,
    AppRoutingModule,
    AngularToastifyModule,
    BrowserAnimationsModule,

    provideFirebaseApp(() => initializeApp(providers.fireBase.useValue)),
    provideFirestore(() => getFirestore()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
    provideAuth(() => getAuth()),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: true,
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
})
export class AppModule {}
