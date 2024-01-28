/**
 * define User DTO
 */
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
} from 'typeorm';

@Entity()
export default class UserDto {
    @PrimaryGeneratedColumn('uuid', { name: "login_id"})
    login_id: string;
    @Column({name: "account_type"})
    accountType: number;
    @Column()
    status: number;
    @CreateDateColumn({name: "created_date"})
    createdDate: number;
    @Column({name: "display_name"})
    displayName: string;
}
