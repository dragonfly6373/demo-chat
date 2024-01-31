import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import ChatMessageDto from 'src/model/chatMessage.dto';
import JoinRoomDto from 'src/model/joinRoom.dto';
import RoomDto from 'src/model/room.dto';
import UserDto from 'src/model/user.dto';
import { Repository } from 'typeorm';

@Injectable()
export class RoomService {
    constructor(@InjectRepository(RoomDto) private roomRepository: Repository<RoomDto>,
    @InjectRepository(UserDto) private userRepository: Repository<UserDto>,
    @InjectRepository(JoinRoomDto) private joinRoomRepository: Repository<JoinRoomDto>,
    @InjectRepository(ChatMessageDto) private chatMessageRepository: Repository<ChatMessageDto>) { }

    async createRoom(roomName: string) {
        return await this.roomRepository.save(Object.setPrototypeOf({roomName}, RoomDto.prototype));
    }

    async getRoom(roomId: number) {
        return await this.roomRepository.findOneBy({id: roomId});
    }

    async getAllRoom() {
        return await this.roomRepository.find();
    }

    async deleteRoom(roomId: number) {
        return await this.roomRepository.update({id: roomId}, {status: -1});
    }

    async joinRoom(userId: number, roomId: number, status: number) {
        return await this.joinRoomRepository.save(Object.setPrototypeOf({userId, roomId, status}, JoinRoomDto.prototype));
    }

    async getChatHistory(roomId: number) {
        return await this.chatMessageRepository.find();
    }
}
