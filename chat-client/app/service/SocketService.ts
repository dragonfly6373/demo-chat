import io, {Socket} from 'socket.io-client';
import {BehaviorSubject, Observable} from 'rxjs';

type IOSocket = Socket & { request: (method: string, data?: any) => Promise<any> };

function timeoutCallback(cb: Function) {

}

export default class SocketService {
    private serverUrl: string = "";
    private socket: IOSocket | null = null;
    private isConnectedSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
    constructor(serverUrl: string) {
        this.serverUrl = serverUrl;
    }

    public async connect(sessionToken: string): Promise<void> {
        const url = `${this.serverUrl}/?sessionToken=${sessionToken}`;
        if (this.socket) this.socket.close();
        this.socket = io(url, {
            transports: ['websocket'], // use WebSocket first, if available,
            reconnection: true,
            reconnectionDelay: 1000,
            reconnectionDelayMax: 5000,
            reconnectionAttempts: 1000,
            autoConnect: true,
        }) as IOSocket;
        this.socket.on('connect_error', (err) => {
            console.log(`connect_error due to ${err.message}`);
        });
        this.onSocket('connect', async () => {
            console.log("socket is established");
            this.setIsConnected(true);
        });
        this.onSocket('disconnect', (reason: any) => {
            this.setIsConnected(false);
        });
        this.socket.connect();
        this.addTimeoutSocket();
    }

    public reconnect(): void {
        this.socket?.connect();
    }

    getSocket(): IOSocket | null {
        return this.socket;
    }

    addTimeoutSocket(): void {
        (this.socket as IOSocket).request = (method: string, data: any) => {
            return new Promise((resolve, reject) => {
                if (!this.socket) { reject('No socket connection'); }
                else {
                    this.socket.emit(
                        'request',
                        {method, data},
                        timeoutCallback((err: any, response: any) => {
                            if (err) { reject(err + " " + response); }
                            else { resolve(response); }
                        })
                    );
                }
            });
        };
    }

    async sendRequest(method: string, data: any): Promise<any> {
        if (!this.isConnectedSubject.value) throw new Error("socket disconnected");
        return this.socket?.request(method, data);
    }

    // tslint:disable-next-line:ban-types
    public onSocket(event: string, fn: Function): void{
        this.socket?.on(event, (params: any) => { fn(params); });
    }

    // Observer: isConnected
    public setIsConnected(status: boolean): void{
        this.isConnectedSubject.next(status);
    }

    public onConnected(): Observable<boolean>{
        return this.isConnectedSubject.asObservable();
    }
}
