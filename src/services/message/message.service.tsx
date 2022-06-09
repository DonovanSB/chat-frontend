import store from 'redux/store';
import HTTPUtil from 'utils/http/http.util';
import socketUtil from 'utils/socket/socket.util';
// import socketUtil from 'utils/socket/socket.util';
import * as MessageTypes from 'types/message/message.types';

class MessageService {
  private storeObject = store;

  public getByRoom = async (room: string): Promise<MessageTypes.Message[]> => {
    const response = await HTTPUtil.send(
      {
        url: '/messages',
        method: 'GET',
        params: {
          room,
        },
        headers: {
          Authorization: `Bearer ${this.storeObject.getState()?.auth?.token}`,
        },
      },
      {
        alertOnFailed: true,
      }
    );

    if (response?.status === 200) {
      return response.data as MessageTypes.Message[];
    } else {
      return [];
    }
  };
}

export default MessageService;
