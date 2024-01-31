import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { RoomController } from './room/room.controller';
import { AppGateway } from './app/app.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chat } from './model/chat.entity';
import { RoomService } from './room/room.service';
import { UserService } from './user/user.service';
import { ChattingController } from './chatting/chatting.controller';
import { ChattingService } from './chatting/chatting.service';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: '172.17.0.2',
            username: 'postgres',
            password: 'postgres',
            database: 'demo-chat',
            entities: [Chat],
            synchronize: true,
        }),
        TypeOrmModule.forFeature([Chat]),
    ],
    controllers: [AppController, UserController, RoomController, ChattingController],
    providers: [AppService, AppGateway, RoomService, UserService, ChattingService],
})
export class AppModule { }
