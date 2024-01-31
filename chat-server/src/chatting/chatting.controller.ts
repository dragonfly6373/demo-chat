import { Body, Controller, Get } from '@nestjs/common';
import ChatMessageDto from 'src/model/chatMessage.dto';

@Controller('chatting')
export class ChattingController {

    @Get('/sendMessage')
    async sendMessage(@Body() message: ChatMessageDto) {
        // TODO: implementation
    }

    @Get('/deleteMessage')
    async deleteMessage(@Body() messageId: number) {
        // TODO: implementation
    }
}
