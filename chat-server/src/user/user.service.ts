import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/model/user.dto';
import { UserInfo } from 'src/model/user.info';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserDto) private userRepository: Repository<UserDto>) {
        // empty constructor
    }

    async create(userInfo: UserInfo) {
        const newUser = this.userRepository.create(userInfo);
        await this.userRepository.save(newUser);
        return newUser;
    }

    async update(loginId: string, newData: UserInfo) {
        // TODO: Implementation
        const oldData = await this.userRepository.findOneBy({loginId});
        const updateData = {...oldData, ...newData};
        this.userRepository.save(updateData);
    }

    async authen(loginId: string) {
        const foundUser = await this.userRepository.findOneBy({loginId});
        if (!loginId || !foundUser) {
          throw new UnauthorizedException('Incorrect username or password');
        }
        const { accountType, status, createdDate, userToRoom, ...rest } = foundUser;
        return rest;
    }

    async getById(id: number) {
        const foundUser = await this.userRepository.findOneBy({id});
        if (!foundUser) {
            throw new UnauthorizedException('Incorrect userId');
        }
        const { accountType, status, createdDate, userToRoom, ...rest } = foundUser;
        return rest;
    }

    async getAll(offset: number, limit: number) {
        // TODO: Implementation
    }

    async findByRoom(roomId: number) {
        // TODO: Implementation
    }

    async delete(loginId: string) {
        const foundUser = await this.userRepository.findOneBy({loginId});
        if (!loginId || !foundUser) {
          throw new UnauthorizedException('Incorrect username\'s loginId');
        }
        return await this.userRepository.update({loginId}, {status: -1});
        // const updateData = {...foundUser, status: -1};
        // this.userRepository.save(updateData);
    }
}
