import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';

import { UserService } from './user.service';
import { IUser } from '../model/user.interface';

@Injectable()
export class AuthSerializer extends PassportSerializer {
    constructor(private readonly userService: UserService) {
        super();
    }
    serializeUser(user: IUser, done: (err: Error, user: { id: number; role: string }) => void) {
        // done(null, { id: user.id, role: user.role });
    }

    deserializeUser(payload: { id: number; role: string }, done: (err: Error, user: Omit<IUser, 'password'>) => void) {
        // const user = this.userService.findById(payload.id);
        // done(null, user);
    }
}