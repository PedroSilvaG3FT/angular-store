import Iconify from '@iconify/iconify';
import { Component } from '@angular/core';
import { LoadingStore } from './store/modules/loading/loading.store';
import { SEOService } from './modules/@core/services/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'angular-store';
  public isLoading = false;

  constructor(
    private loadingStore: LoadingStore,
    private seoService: SEOService
  ) {
    Iconify.listIcons();
    this.seoService.init();
    this.loadingStore.onIsShowChange().subscribe((value) => {
      setTimeout(() => (this.isLoading = value));
    });
  }
}
