/**
 * define User DTO
 */
import { IUser } from './user.interface';

// status: 1 - active | 0 - inactive
export const UserStatus = {
    ACTIVE: 1,
    INACTIVE: 0
};

export class UserInfo implements IUser {
    loginId: string;
    accountType: number;
    status: number;
    displayName: string;
    createdDate: Date;
}
