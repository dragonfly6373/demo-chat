import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import ChatMessageDto from 'src/model/chatMessage.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ChattingService {
    constructor(@InjectRepository(ChatMessageDto) private chatMessageRepository: Repository<ChatMessageDto>) { }

    sendMessage() {
        // TODO: implementation
    }

    deleteMessage() {
        // TODO: implement delete message handler
    }

    getMessages(groupId: number, index: number) {
        // TODO: implementation
    }
}
