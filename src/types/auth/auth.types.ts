import * as UserTypes from 'types/user/user.types';

export const LOGIN = '[auth] LOGIN';
export const LOGIN_BY_TOKEN = '[auth] LOGIN_BY_TOKEN';
export const LOGOUT = '[AUTH] LOGOUT';
export const CREATE_ACCOUNT = '[auth] CREATE_ACCOUNT';

export interface AuthState {
  user?: UserTypes.User;
  token?: string;
  isLogged: boolean;
  hasData: boolean;
}

export interface LoginAction {
  user: UserTypes.User;
  token: string;
}

// export interface SingUp {
//   firstName: string;
//   lastName: string;
//   username: string;
//   email: string;
//   password: string;
//   role: string;
// }
