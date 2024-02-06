import {
    SubscribeMessage,
    WebSocketGateway,
    OnGatewayInit,
    WebSocketServer,
    OnGatewayConnection,
    OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { AppService } from '../app.service';
import { ChattingService } from 'src/chatting/chatting.service';
import { ChatMessageDto } from 'src/model/chatMessage.dto';
import { RoomService } from 'src/room/room.service';

@WebSocketGateway({
    cors: {
        origin: '*',
    },
})
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    constructor(private appService: AppService,
        private chatService: ChattingService,
        private roomService: RoomService) { }

    @WebSocketServer() server: Server;

    @SubscribeMessage('message')
    async handleSendMessage(client: Socket, payload: ChatMessageDto): Promise<void> {
        // await this.appService.createMessage(payload);
        await this.chatService.sendMessage(payload);
        this.server.emit('message', payload);
    }

    @SubscribeMessage('deleteMessage')
    async handleDeleteMessage(client: Socket, payload: any): Promise<void> {
        // await this.chatService.deleteMessage(client.id, payload.chatId);
    }

    @SubscribeMessage('createRoom')
    async handleCreateRoom(client: Socket, payload: any): Promise<void> {
        // await this.roomService.createRoom(client.id, payload);
    }

    @SubscribeMessage('joinRoom')
    async handleJoinRoom(client: Socket, payload: any): Promise<void> {
        // await this.roomService.joinRoom(client.id, payload.roomId, 1);
    }

    @SubscribeMessage('leaveRoom')
    async handleLeaveRoom(client: Socket, payload: any): Promise<void> {
        // await this.roomService.leaveRoom(client.id, payload.roomId);
    }

    @SubscribeMessage('kickPeer')
    async handleKickPeer(client: Socket, payload: any): Promise<void> {
        // await this.roomService.kickPeer(client.id, payload.roomId, payload.userId);
    }

    afterInit(server: Server) {
        console.log(server);
        //Do stuffs
    }

    handleDisconnect(client: Socket) {
        console.log(`Disconnected: ${client.id}`);
        //Do stuffs
    }

    handleConnection(client: Socket, ...args: any[]) {
        console.log(`Connected ${client.id}`);
        //Do stuffs
    }
}
