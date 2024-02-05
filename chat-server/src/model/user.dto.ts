/**
 * define User DTO
 */
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    OneToMany,
} from 'typeorm';
import { JoinRoomDto } from './joinRoom.dto';
import { IUser } from './user.interface';

// status: 1 - active | 0 - inactive
export const UserStatus = {
    ACTIVE: 1,
    INACTIVE: 0
};

@Entity()
export class UserDto implements IUser {
    @PrimaryGeneratedColumn('uuid', { name: "id"})
    id: number;
    @Column({name: "loginId"})
    loginId: string;
    @Column({name: "account_type"})
    accountType: number;
    @Column({name: "status"})
    status: number;
    @CreateDateColumn({type: 'timestamptz', name: "created_date"})
    createdDate: Date;
    @Column({name: "display_name"})
    displayName: string;
    @OneToMany(() => JoinRoomDto, (joinRoom) => joinRoom.userId)
    userToRoom: JoinRoomDto[];
}
