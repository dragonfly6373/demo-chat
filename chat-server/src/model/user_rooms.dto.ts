import { Column, Entity } from "typeorm";
import { RoomDto } from "./room.dto";

@Entity({name: 'user_rooms_view'})
export default class UserRoomsDto extends RoomDto {
    @Column({name: 'user_id', type: 'number'})
    userId: number;
}
