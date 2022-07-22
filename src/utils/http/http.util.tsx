import { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import * as AuthActions from 'redux/reducers/auth/auth.actions';
import { toast } from 'react-toastify';
import store from 'redux/store';
import axiosApi from 'config/axios.config';

export interface IHttpUtil extends AxiosRequestConfig {
  method: AxiosRequestConfig['method'];
  url: string;
  headers?: AxiosRequestHeaders;
}

export interface IHttpUtilOptions {
  alertOnFailed?: boolean;
  alertType?: 'toast' | 'alert';
}

class HttpUtil {
  private storeObject = store;

  /**
   * @INFO Hacer llamada al API
   * @param _params
   */
  public send = async (_params: IHttpUtil, _options?: IHttpUtilOptions) => {
    let response: any = {};
    try {
      response = await axiosApi.request(_params);
    } catch (e: any) {
      if (e.response) {
        response = e.response;
      } else {
        response = {};
      }
    }

    // @INFO Agregar el token a la request en caso de que no venga del servicio
    // const token = this.authService.getToken();
    const token = store.getState().auth?.token;
    if (
      token &&
      (!_params.headers || !_params.headers.hasOwnProperty('Authorization'))
    ) {
      if (_params.headers) {
        _params.headers = {
          ..._params.headers,
          Authorization: token,
        };
      } else {
        _params.headers = {
          Authorization: token,
        };
      }
    }

    if (response.status !== 200 && response.status !== 201) {
      // @INFO Mostrar mensaje de error
      if (_options?.alertOnFailed) {
        let errorMessage = '';

        if (response?.data?.message) {
          errorMessage = response.data.message;
        }
        toast.error(errorMessage);
      }
    }

    // @INFO Si el token no es valido hace logout
    if (response?.data?.message?.includes('Acceso no permitido')) {
      // @ts-ignore
      this.storeObject.dispatch(AuthActions.logoutAction());
      window.location.reload();
    }

    return response;
  };
}

const HTTPUtil = new HttpUtil();

export default HTTPUtil;
