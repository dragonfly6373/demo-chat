import { ExecutionContext, Injectable } from '@nestjs/common';

import { LoggedInGuard } from './login.guard';

@Injectable()
export class AdminGuard extends LoggedInGuard {
    canActivate(context: ExecutionContext): boolean {
        const req = context.switchToHttp().getRequest();
        return super.canActivate(context) && req.session.passport.user.role === 'admin';
    }
}
