import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { LocalStrategy } from './local.strategy';
import { AuthSerializer } from './serialization.provider';

@Module({
  imports: [
    PassportModule.register({
      session: true,
    }),
  ],
  providers: [UserService, LocalStrategy, AuthSerializer],
  controllers: [UserController],
})
export class UserModule {}
