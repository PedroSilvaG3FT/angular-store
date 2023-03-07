import { UserType } from '../enums/user.enum';

export interface IUserRegister {
  name: string;
  email: string;
  rule: UserType;
  password: string;
}
