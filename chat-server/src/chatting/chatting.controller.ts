import { Body, Controller, Get, Param } from '@nestjs/common';
import {ChatMessageDto} from 'src/model/chatMessage.dto';
import { ChattingService } from './chatting.service';

@Controller('chatting')
export class ChattingController {
    constructor(private readonly chattingService: ChattingService) {}

    @Get('/sendMessage')
    async sendMessage(@Body() message: ChatMessageDto) {
        console.log("# sendMessage", arguments);
        // TODO: implementation
    }

    @Get(':roomId')
    async getRoomMessage(@Param('roomId') roomId: number) {
        let offset = 0;
        let size = 100
        this.chattingService.getRoomMessages(roomId, offset, size);
    }

    @Get('/deleteMessage')
    async deleteMessage(@Body() messageId: number) {
        console.log("# deleteMessage", arguments);
        // TODO: implementation

    }
}
