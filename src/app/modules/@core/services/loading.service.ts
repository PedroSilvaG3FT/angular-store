import { Injectable } from '@angular/core';
import { LoadingStore } from '@/store/modules/loading/loading.store';

@Injectable()
export class LoadingService {
  constructor(private loadingStore: LoadingStore) {}

  public show(message?: string, content?: any) {
    if (message) this.setMessage(message);
    if (content) this.loadingStore.setContent(content);

    this.loadingStore.setShow(true);
  }

  public hide() {
    this.setMessage('');
    this.loadingStore.setContent(null);
    this.loadingStore.setShow(false);
  }

  public setMessage(message: string) {
    this.loadingStore.setMessage(message);
  }
}
