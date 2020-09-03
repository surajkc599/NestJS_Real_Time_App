import {
  Injectable,
  UnauthorizedException,
  Inject,
  LoggerService,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

import { Strategy } from 'passport-local';

import { AuthService } from '../service/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authService: AuthService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    this.logger.debug(
      `[LocalStrategy] - About to verify the user in the database - ${username}`,
      'LocalStrategy',
    );
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      this.logger.debug(
        `[LocalStrategy] - username did not match in the database - ${username}`,
        'LocalStrategy',
      );
      throw new UnauthorizedException();
    }
    return user;
  }
}
