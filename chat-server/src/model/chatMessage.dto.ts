import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
} from 'typeorm';

@Entity("chat_message")
export class ChatMessageDto {
    @PrimaryGeneratedColumn("uuid", {name: "id"})
    id: number;
    @Column({name: "room_id"})
    roomId: number;
    @Column({name: "message_type"})
    messageType: number;
    @Column({name: "content"})
    content: string;
    @Column({name: "created_by"})
    createdBy: number;
    @Column({type: 'timestamptz', name: "created_date"})
    createdDate: Date;
    @Column({name: "status"})
    status: number;
}
