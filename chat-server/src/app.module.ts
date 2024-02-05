import { Inject, Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import * as RedisStore from 'connect-redis';
import * as session from 'express-session';
import * as passport from 'passport';
import { RedisClient } from 'redis';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { RoomController } from './room/room.controller';
import { AppGateway } from './app/app.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomService } from './room/room.service';
import { UserService } from './user/user.service';
import { ChattingController } from './chatting/chatting.controller';
import { ChattingService } from './chatting/chatting.service';
import { Chat } from './model/chat.entity';
import { RoomDto } from './model/room.dto';
import { UserDto } from './model/user.dto';
import { JoinRoomDto } from './model/joinRoom.dto';
import { ChatMessageDto } from './model/chatMessage.dto';
// import { RedisClient } from 'ioredis/built/connectors/SentinelConnector/types';
import { REDIS } from './redis/redis.constants';
import { RedisModule } from './redis/redis.module';
import { UserModule } from './user/user.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "postgres",//process.env.DB_TYPE as string,
            host: "172.17.0.2",//process.env.PG_HOST as string,
            port: 5432,//parseInt(process.env.PG_PORT),
            username: "postgres",// process.env.PG_USER as string,
            password: "postgres",// process.env.PG_PASSWORD as string,
            database: "demo-chat",// process.env.PG_DB || "demo-chat",
            entities: [Chat, RoomDto, UserDto, JoinRoomDto, ChatMessageDto],
            synchronize: false,
        }),
        TypeOrmModule.forFeature([Chat, RoomDto, UserDto, JoinRoomDto, ChatMessageDto]),
        RedisModule,
        UserModule,
    ],
    controllers: [AppController, UserController, RoomController, ChattingController],
    providers: [AppService, AppGateway, RoomService, UserService, ChattingService],
})
export class AppModule {
    constructor(@Inject(REDIS) private readonly redis: RedisClient) {
        console.log("AppModule - process.env", process.env.DB_TYPE, process.env.PG_HOST, process.env.PG_USER, process.env.PG_PASSWORD);

    }
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(
                session({
                    store: new (RedisStore(session))({ client: this.redis, logErrors: true }),
                    saveUninitialized: false,
                    secret: 'sup3rs3cr3t',
                    resave: false,
                    cookie: {
                        sameSite: true,
                        httpOnly: false,
                        maxAge: 60000,
                    },
                }),
                passport.initialize(),
                passport.session(),
            )
            .forRoutes('*');
    }
}
