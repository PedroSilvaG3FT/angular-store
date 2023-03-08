export interface IUser {
  uid?: string;
  email: string;
  photoURL: string;
  displayName: string;
  emailVerified: boolean;
}

export interface IUserAuthentication {
  email: string;
  password: string;
}

export interface IUserRegister extends IUser, IUserAuthentication {}
