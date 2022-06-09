// @import types
import * as AuthTypes from 'types/auth/auth.types';
// @end types

// @import services
import AuthService from 'services/auth/auth.service';
import UserService from 'services/user/user.service';
// @end services

export const loginAction =
  (username: string, password: string) => async (dispatch: Function) => {
    // Organizar los datos de autenticación antes de disparar la acción
    const authService = new AuthService();
    const response = await authService.login(username, password);
    if (response?.data) {
      const dataAction: AuthTypes.LoginAction = {
        user: response.data.user,
        token: response.data.token,
      };
      // @INFO Guardar token
      authService.setToken(dataAction.token);
      // Disparar la acción de login
      dispatch(login(dataAction));
    }
  };

export const loginByTokenAction =
  (data: { token: string }) => async (dispatch: Function) => {
    // Organizar los datos de autenticación antes de disparar la acción
    const authService = new AuthService();
    const response = await authService.loginByToken(data.token);
    if (response?.data) {
      const dataAction: AuthTypes.LoginAction = {
        user: response.data.user,
        token: response.data.token,
      };
      // Disparar la acción de login
      dispatch(loginByToken(dataAction));
    }
  };

/**
 * @INFO Crear una nueva cuenta
 * @param params
 * @returns
 */
export const createAccountAction =
  (params: any) => async (dispatch: Function) => {
    const userService = new UserService();
    const authService = new AuthService();
    const response: any = await userService.create(params);
    // @INFO Revisar si fue exitoso o no
    if (response?.data) {
      const dataAction: AuthTypes.LoginAction = {
        user: response.data.user,
        token: response.data.token,
      };
      // @INFO Guardar token
      authService.setToken(dataAction.token);
      // @INFO Hacer el dispatch de login
      dispatch(createAccount(dataAction));
    }
  };

const login = (data: AuthTypes.LoginAction) => ({
  type: AuthTypes.LOGIN,
  payload: data,
});

const loginByToken = (data: AuthTypes.LoginAction) => ({
  type: AuthTypes.LOGIN_BY_TOKEN,
  payload: data,
});

const createAccount = (data: AuthTypes.LoginAction) => ({
  type: AuthTypes.CREATE_ACCOUNT,
  payload: data,
});

/**
 * @INFO Hacer logout de la app
 * @returns
 */
export const logoutAction = () => {
  return (dispatch: Function) => {
    const authService = new AuthService();
    authService.deleteToken();
    dispatch(logout());
    // @INFO Revisar si es necesario
    // window.location.reload()
  };
};

const logout = () => ({
  type: AuthTypes.LOGOUT,
});
