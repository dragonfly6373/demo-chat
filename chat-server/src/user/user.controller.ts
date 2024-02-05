import { Body, Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { UserInfo } from 'src/model/user.info';
import { UserService } from './user.service';
import { LocalGuard } from './local.guard';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {

    }
    @Post("/signUp")
    async signUp(@Res() res: Response, @Body("userInfo") userInfo: UserInfo) {
        console.log("# signUp", arguments);
        // const saltOrRounds = 10;
        // const hashedPassword = await bcrypt.hash(userDto.password, saltOrRounds);
        const data = await this.userService.create(userInfo);
        res.json(data);
    }

    @UseGuards(LocalGuard)
    @Post("/login")
    async login(@Req() req, @Res() res: Response, @Body("loginId") loginId: string) {
        // console.log("# login", arguments);
        // const data = await this.userService.authen(loginId);
        // res.json(data);
        return req.session;
    }
}
