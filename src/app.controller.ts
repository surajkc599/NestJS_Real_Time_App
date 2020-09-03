import {
  Controller,
  Post,
  Request,
  UseGuards,
  Inject,
  LoggerService,
} from '@nestjs/common';

import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

import { AuthService } from './auth/service/auth.service';
import { LocalAuthGuard } from './auth/guards/local.guard';

@Controller()
export class AppController {
  constructor(
    private readonly authService: AuthService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    this.logger.debug(
      `[AppController] - Username matched and it is valid`,
      'GasStationController',
    );
    return this.authService.login(req.user);
  }
}
