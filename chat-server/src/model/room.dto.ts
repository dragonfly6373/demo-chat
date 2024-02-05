import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    OneToMany,
} from 'typeorm';
import { JoinRoomDto } from './joinRoom.dto';

export const RoomStatus = {
    ACTIVE: 1,
    INACTIVE: 0
};

@Entity()
export class RoomDto {
    @PrimaryGeneratedColumn("uuid", {name: "id"})
    id: number;
    @Column({name: "name"})
    name: string;
    @Column({name: "created_date"})
    created_date: number;
    @Column({name: "status"})
    status: number;
    @Column({type: 'timestamptz', name: "created_by"})
    created_by: Date;
    @OneToMany(() => JoinRoomDto, joinRoom => joinRoom.roomId)
    roomToUser: JoinRoomDto[];
}
