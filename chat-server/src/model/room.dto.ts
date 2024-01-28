
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
} from 'typeorm';

@Entity()
export default class RoomDto {
    @Column("uuid", {name: "id"})
    id: number;
    @Column({name: "name"})
    name: string;
    @Column({name: "created_date"})
    created_date: number;
    @Column({name: "status"})
    status: number;
    @Column({name: "created_by"})
    created_by: number;
}
