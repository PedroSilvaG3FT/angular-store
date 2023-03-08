import { Component, OnInit } from '@angular/core';
import { UserType } from '@/modules/@core/enums/user.enum';
import { UserService } from '@/modules/@core/services/user.service';
import { LoadingService } from '../../../@core/services/loading.service';
import { IUserRegister } from '@/modules/@core/interfaces/user.interface';
import { LoginService } from '@/modules/@core/services/login.service';

@Component({
  selector: 'register',
  templateUrl: 'register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public user: IUserRegister = {} as IUserRegister;

  constructor(
    private userService: UserService,
    private loginService: LoginService,
    private loadingService: LoadingService
  ) {}

  ngOnInit() {}

  async handleSubmit() {
    this.loadingService.show('Criando conta...');
    try {
      this.user.photoURL = '';
      const response = await this.userService.create(this.user);
      this.loginService;
      console.log('DEU BOM', response);
    } catch (error) {
      console.log('ERROR', error);
    } finally {
      this.loadingService.hide();
    }
  }
}
