import { io, Socket } from 'socket.io-client';
import { socket_url } from 'config/globals';

class SocketUtil {
  static myInstance: SocketUtil | undefined = undefined;
  static socket: Socket | undefined = undefined;

  /**
   * @INFO Obtener instancia del socket
   */
  static getInstance = () => {
    if (!SocketUtil.myInstance) {
      SocketUtil.myInstance = new SocketUtil();
    }
    return SocketUtil.myInstance;
  };

  /**
   * @INFO Obtener el socket
   * @returns
   */
  public getSocketInstance() {
    return SocketUtil.socket;
  }

  constructor() {}

  public on = (event: string, callback: any) => {
    if (SocketUtil.socket) {
      SocketUtil.socket.on(event, callback);
    }
  };

  public emit = (event: string, data: any) => {
    if (SocketUtil.socket) {
      SocketUtil.socket.emit(event, data);
    }
  };

  public removeEventListener = (event: string, callback: any) => {
    if (SocketUtil.socket) {
      SocketUtil.socket.removeListener(event);
    }
  };

  public connectIO = () => {
    if (socket_url) {
      SocketUtil.socket = io(socket_url, {
        transports: ['websocket'],
      });
    }
  };
}

const socketUtil = SocketUtil.getInstance();

export default socketUtil;
