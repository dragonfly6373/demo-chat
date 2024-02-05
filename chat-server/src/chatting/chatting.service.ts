import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {ChatMessageDto} from 'src/model/chatMessage.dto';
import { Entity, Repository } from 'typeorm';

@Injectable()
export class ChattingService {
    constructor(@InjectRepository(ChatMessageDto) private chatMessageRepository: Repository<ChatMessageDto>) { }

    sendMessage(message: ChatMessageDto) {
        // TODO: implementation
        const newMessage = this.chatMessageRepository.create(message);
        return this.chatMessageRepository.save(newMessage);
    }

    getRoomMessages(roomId: number, offset: number, size: number) {
        // TODO: implementation
        this.chatMessageRepository.find({where: {roomId}});
    }

    deleteMessage(id: number) {
        // this.chatMessageRepository.delete(id);
        this.chatMessageRepository.update(id, {status: -1});
    }
}
