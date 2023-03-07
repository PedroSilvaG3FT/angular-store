import { Injectable } from '@angular/core';

import { LoadingStore } from './loading/loading.store';

@Injectable()
export class StoreService {
  constructor(private loadingStore: LoadingStore) {}

  reset() {
    this.loadingStore.reset();
  }
}
