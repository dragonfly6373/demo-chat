import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import UserDto from 'src/model/user.dto';

@Controller('user')
export class UserController {
    @Post("/signUp")
    signUp(@Res() res: Response, @Body("userInfo") userDto: UserDto) {

    }

    @Post("/login")
    login(@Res() res: Response, @Body("userInfo") userDto: UserDto) {

    }

    @Post("create")
    create(@Res() res: Response, @Body("userInfo") userDto: UserDto) {

    }
}
