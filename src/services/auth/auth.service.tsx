import store from 'redux/store';
import HTTPUtil from 'utils/http/http.util';
import socketUtil from 'utils/socket/socket.util';
// import socketUtil from 'utils/socket/socket.util';

class AuthService {
  private storeObject = store;
  private tokenName: string = 'token';

  public login = async (username: string, password: string) => {
    const response = await HTTPUtil.send(
      {
        url: '/auth/login',
        method: 'POST',
        data: {
          username,
          password,
        },
      },
      {
        alertOnFailed: true,
      }
    );

    if (response?.status === 201) {
      socketUtil.connectIO();
      return response;
    } else {
      return undefined;
    }
  };

  public loginByToken = async (token: string) => {
    const response = await HTTPUtil.send(
      {
        url: '/auth/loginByToken',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      {
        alertOnFailed: true,
      }
    );

    if (response?.status === 201) {
      socketUtil.connectIO();
      return response;
    } else {
      return undefined;
    }
  };

  /**
   * @INFO Guardar token
   * @param token
   */
  public setToken = (token: string) => {
    localStorage.setItem(this.tokenName, token);
  };

  /**
   * @INFO Obtener token
   */
  public getToken = () => {
    let token: string | undefined = this.storeObject.getState().auth.token;
    if (!token) {
      // @ts-ignore
      token = localStorage.getItem(this.tokenName);
    }
    return token;
  };

  /**
   * @INFO Eliminar el token del local storage
   */
  public deleteToken = () => {
    localStorage.removeItem(this.tokenName);
  };

  /**
   * @INFO Verificar si hay un usuario con sesión activa en la app
   */
  public isLogin = () => {
    const isLogin = this.storeObject.getState().auth.isLogged;
    if (isLogin) {
      return true;
    } else {
      return false;
    }
  };

  /**
   * @INFO Revisar si la data del usuario ya ha cargado
   */
  public hasData = () => {
    const hasData = this.storeObject.getState().auth.hasData;
    if (hasData) {
      return true;
    } else {
      return false;
    }
  };
}

export default AuthService;
