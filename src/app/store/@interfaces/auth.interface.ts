import { IUser } from '@/modules/@core/interfaces/user.interface';

export interface IAuthInitialState {
  user: IUser;
  token: string;
}
