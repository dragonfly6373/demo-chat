import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    ManyToOne,
} from 'typeorm';
import { RoomDto } from './room.dto';
import { UserDto } from './user.dto';

// -- status: 0 - wait for approved | 1 - approved | -1 - rejected
export const JoinStatus = {
    WAITTING: 0,
    APPROVED: 1,
    REJECTED: -1
};

@Entity()
export class JoinRoomDto {
    @PrimaryGeneratedColumn()
    id: number
    @Column({name: "room_id"})
    roomId: number;
    @Column({name: "user_id"})
    userId: number;
    @Column({name: "status"})
    status: number;
    @Column({name: "approved_by"})
    approvedBy: number;
    @ManyToOne(() => RoomDto, (room) => room.roomToUser)
    public room: RoomDto;
    @ManyToOne(() => UserDto, (user) => user.userToRoom)
    public user: UserDto;
}