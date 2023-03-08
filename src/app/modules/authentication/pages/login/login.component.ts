import { Component, OnInit } from '@angular/core';
import { LoginService } from '@/modules/@core/services/login.service';
import { LoadingService } from '../../../@core/services/loading.service';
import { IUserAuthentication } from '@/modules/@core/interfaces/user.interface';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public authentication: IUserAuthentication = {
    email: 'rikeg3ft@gmail.com',
    password: 'Teste01234',
  } as IUserAuthentication;

  constructor(
    private loginService: LoginService,
    private loadingService: LoadingService
  ) {}

  ngOnInit() {}

  async handleSubmit() {
    this.loadingService.show('Login');

    try {
      await this.loginService.login(this.authentication);
    } catch (error) {
      console.log(error);
    } finally {
      this.loadingService.hide();
    }
  }
}
