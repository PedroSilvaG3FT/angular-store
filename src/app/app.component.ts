import Iconify from '@iconify/iconify';
import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
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
    private swUpdate: SwUpdate,
    private seoService: SEOService,
    private loadingStore: LoadingStore
  ) {
    Iconify.listIcons();
    this.seoService.init();
    this.loadingStore.onIsShowChange().subscribe((value) => {
      setTimeout(() => (this.isLoading = value));
    });
  }

  ngOnInit() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (
          confirm(
            "You're using an old version of the control panel. Want to update?"
          )
        ) {
          window.location.reload();
        }
      });
    }
  }
}
