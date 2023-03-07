import { Component, OnInit } from '@angular/core';
import { LoadingStore } from '@/store/modules/loading/loading.store';

@Component({
  selector: 'app-loading',
  templateUrl: 'app-loading.component.html',
  styleUrls: ['./app-loading.component.scss'],
})
export class AppLoadingComponent implements OnInit {
  constructor(private loadingStore: LoadingStore) {}

  ngOnInit() {}

  get message(): string {
    return this.loadingStore.state.message;
  }

  get content(): any {
    return this.loadingStore.state.content;
  }
}
