import { Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { RoomService } from './room.service';

@Controller('chat')
export class RoomController {
    constructor(private readonly roomService: RoomService) { }

    @Post('/newRoom')
    async createRoom(@Res() res: Response, roomName: string) {
        let roomInfo = await this.roomService.createRoom(roomName);
        res.json(roomInfo);
    }

    @Get('/joinRoom')
    requestJoin(@Res() res: Response, roomId: number) {

    }

    @Get('/rooms')
    getAllRoom(@Res() res: Response) {

    }

    @Get('/history/:roomId')
    getHistory(@Res() res: Response, @Param("roomId") roomId: number) {

    }
}
