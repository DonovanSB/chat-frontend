import store from 'redux/store';
import HTTPUtil from 'utils/http/http.util';
// import socketUtil from 'utils/socket/socket.util';
import * as UserTypes from 'types/user/user.types';
import socketUtil from 'utils/socket/socket.util';

class UserService {
  private storeObject = store;
  private tokenName: string = 'token';

  public create = async (data: UserTypes.CreateUser) => {
    const response = await HTTPUtil.send(
      {
        url: '/users',
        method: 'POST',
        data,
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
}

export default UserService;
