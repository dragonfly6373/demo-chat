import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {ChatMessageDto} from 'src/model/chatMessage.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ChattingService {
    constructor(@InjectRepository(ChatMessageDto) private chatMessageRepository: Repository<ChatMessageDto>) { }

    async sendMessage(message: ChatMessageDto) {
        // TODO: implementation
        const newMessage = this.chatMessageRepository.create(message);
        return await this.chatMessageRepository.save(newMessage);
    }

    async getRoomMessages(roomId: number, offset: number, size: number) {
        // TODO: implementation
        return await this.chatMessageRepository.find({where: {roomId}});
    }

    async deleteMessage(id: number) {
        // this.chatMessageRepository.delete(id);
        return await this.chatMessageRepository.update(id, {status: -1});
    }
}
