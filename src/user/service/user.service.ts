import { Injectable, Inject, LoggerService } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { User } from '../model/user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User, 'SmarterNozzleUAC')
    private userModel: typeof User,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  async findOne(username: string): Promise<User> {
    this.logger.log(
      `[UserService] - About to get user information based on the user - ${username}`,
    );

    return this.userModel.findOne({
      where: {
        username,
      },
    });
  }
}
