import { Component, OnInit } from '@angular/core';
import { IAuthentication } from '../../interface/authentication.interface';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public authentication: IAuthentication = {} as IAuthentication;

  constructor(private loadingService: LoadingService) {}

  ngOnInit() {}

  handleSubmit() {
    this.loadingService.show('Login');

    setTimeout(() => this.loadingService.hide(), 3000);
  }
}
