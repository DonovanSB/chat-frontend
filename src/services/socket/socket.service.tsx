import socketUtil from 'utils/socket/socket.util';

class SocketService {

    constructor(){
        
    }

    // ==================== Para la propiedad event de las herramientas ================
    public listenEvent = (event: string, callback: any) => {
        socketUtil.on(event, callback)
    }
    
    public removeListenEvent = (event: string, callback: any) => {
        socketUtil.removeEventListener(event, callback)
    }
    
    public emitEvent = (event: string, data: any) => {
        socketUtil.emit(event, data);
    }
    
}

export default SocketService