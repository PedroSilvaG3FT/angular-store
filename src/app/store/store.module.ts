import modules from './modules';
import { NgModule } from '@angular/core';
import { StoreService } from './modules/store.service';
import { LocalStorageService } from './storage/local-storage';
import { SessionStorageService } from './storage/section-storage';

@NgModule({
  providers: [
    ...modules,
    StoreService,
    LocalStorageService,
    SessionStorageService,
  ],
})
export class AppStoreModule {}
