import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { UserService } from './service/user.service';

import { User } from './model/user.model';

@Module({
  imports: [SequelizeModule.forFeature([User], 'SmarterNozzleUAC')],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
