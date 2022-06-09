// @import types
import * as AuthTypes from 'types/auth/auth.types';
// @end types

const initialState: AuthTypes.AuthState = {
  user: undefined,
  token: undefined,
  isLogged: false,
  hasData: false,
};

const authReducer = (
  state: AuthTypes.AuthState = initialState,
  action: any
): AuthTypes.AuthState => {
  switch (action.type) {
    case AuthTypes.LOGIN:
    case AuthTypes.LOGIN_BY_TOKEN:
    case AuthTypes.CREATE_ACCOUNT:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        isLogged: true,
        hasData: true,
      };
    case AuthTypes.LOGOUT:
      return {
        ...state,
        isLogged: false,
        hasData: false,
        token: undefined,
        user: undefined,
      };
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
