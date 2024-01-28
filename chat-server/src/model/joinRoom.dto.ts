
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
} from 'typeorm';

@Entity()
export default class JoinRoomDto {
    @Column({name: "room_id"})
    roomId: number;
    @Column({name: "user_id"})
    userId: number;
    @Column({name: "status"})
    status: number;
    @Column({name: "approved_by"})
    approvedBy: number;
}