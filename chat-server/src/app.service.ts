import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Chat } from './model/chat.entity';
import { RoomDto } from './model/room.dto';

@Injectable()
export class AppService {
    constructor(@InjectRepository(Chat) private chatRepository: Repository<Chat>, @InjectRepository(RoomDto) private roomRepository: Repository<RoomDto>) { }

    async createMessage(chat: Chat): Promise<Chat> {
        return await this.chatRepository.save(chat);
    }

    async getMessages(): Promise<Chat[]> {
        return await this.chatRepository.find();
    }

    getPrivateMessage(): string {
        return 'You can only see this if you are authenticated';
    }

    getAdminMessage(): string {
        return 'You can only see this if you are an admin';
    }
}
