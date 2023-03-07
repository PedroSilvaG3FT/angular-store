import Iconify from '@iconify/iconify';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'angular-store';

  constructor() {
    Iconify.listIcons();
  }
}
