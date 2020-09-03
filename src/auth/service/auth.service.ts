import { Injectable, Inject, LoggerService } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import * as crypto from 'crypto';

import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

import { User } from '../../user/model/user.model';
import { UserService } from 'src/user/service/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    this.logger.log(
      `[AuthService] - Retreived user information based on the user - ${user.username}`,
    );
    if (user && user.salted_pw === this.md5(pass + user.salt)) {
      this.logger.log(
        `[AuthService] - Username/Password match success - ${user.username}`,
      );
      const { ...result } = user;
      return result;
    }
    this.logger.log(
      `[AuthService] - Username/Password did not match - ${user.username}`,
    );

    return null;
  }


  async login(user: User) {
    const payload = { username: user.username, sub: user.id };
    this.logger.log(
      `[AuthService] - Username/Password match success and will return new JWT token`,
    );
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  private md5 = (value) => {
    return crypto.createHash("md5").update(value).digest("hex");
  }
}
