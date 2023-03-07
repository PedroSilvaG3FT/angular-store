import { UserType } from '../enums/user.enum';

export interface IUserRegister {
  uid: string;
  name: string;
  email: string;
  rule: UserType;
  password: string;
}
