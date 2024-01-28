
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
} from 'typeorm';

@Entity("chat_message")
export default class ChatMessageDto {
    @Column({name: "room_id"})
    room_id: number;
    @Column({name: "message_type"})
    message_type: number;
    @Column({name: "content"})
    content: string;
    @Column({name: "created_by"})
    createdBy: number;
    @Column({name: "created_date"})
    createdDate: number;
    @Column({name: "status"})
    status: number;
}
