import { Controller, Render, Get, Res, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AdminGuard } from './user/admin.guard';
import { LoggedInGuard } from './user/login.guard';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Get('/chat')
    @Render('index')
    Home() {
        return;
    }

    @Get('/api/chat')
    async Chat(@Res() res) {
        const messages = await this.appService.getMessages();
        res.json(messages);
    }

    @UseGuards(LoggedInGuard)
    @Get('protected')
    guardedRoute() {
      return this.appService.getPrivateMessage();
    }
  
    @UseGuards(AdminGuard)
    @Get('admin')
    getAdminMessage() {
      return this.appService.getAdminMessage();
    }
}
