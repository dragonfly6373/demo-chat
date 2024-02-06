import { Column, Entity } from "typeorm";
import { UserDto } from "./user.dto";

@Entity({name: 'room_users_view'})
export default class RoomUsersDTO extends UserDto {
    @Column({name: 'room_id', type: 'number'})
    roomId: number;
}
