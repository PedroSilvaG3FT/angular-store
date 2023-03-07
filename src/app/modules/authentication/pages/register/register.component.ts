import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../services/loading.service';
import { IUserRegister } from '@/modules/@core/interfaces/user.interface';

@Component({
  selector: 'register',
  templateUrl: 'register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public user: IUserRegister = {} as IUserRegister;

  constructor(private loadingService: LoadingService) {}

  ngOnInit() {}

  handleSubmit() {
    this.loadingService.show('Criando conta...');
    setTimeout(() => this.loadingService.hide(), 3000);
  }
}
