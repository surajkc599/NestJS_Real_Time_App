import { Module, DynamicModule } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { ConfigModule, ConfigService } from '@nestjs/config';

import { GasStationModule } from './gas-station/gas-station.module';
import { NozzleBoothModule } from './nozzle-booth/nozzle-booth.module';
import { NozzleMaintenanceModule } from './nozzle-maintenance/nozzle-maintenance.module';
import { NozzleSleevesModule } from './nozzle-sleeves/nozzle-sleeves.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

import {
  WinstonModule,
  utilities as nestWinstonModuleUtilities,
} from 'nest-winston';
import * as winston from 'winston';
import * as winstonDailyRotateFile from 'winston-daily-rotate-file';

import { AppController } from './app.controller';

const nozzleLogFormat = winston.format.printf(
  ({ level, message, label, timestamp }) => {
    return `${label}:${timestamp}:${level}: ${message}`;
  },
);

const rotationalTransport = new winstonDailyRotateFile({
  filename: `logs/monteurs-Api-Server-%DATE%.log`,
  maxSize: process.env.MAX_LOG_FILE_SIZE || '10m',
  maxFiles: process.env.MAX_NUMBER_DAYS_LOG_LIFETIME || '7d',
  handleExceptions: true,
  format: winston.format.combine(
    winston.format.label({ label: 'Monteurs_API_Server' }),
    winston.format.timestamp(),
    nozzleLogFormat,
  ),
  level: process.env.LOG_LEVEL || 'debug',
});

const smarternozzleDB: DynamicModule = SequelizeModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (config: ConfigService) => ({
    host: config.get<string>('DB_HOST'),
    port: parseInt(config.get<string>('DB_PORT')),
    username: config.get<string>('DB_USER'),
    password: config.get<string>('DB_PASSWORD'),
    database: config.get<string>('DB_NAME'),
    dialect: 'mariadb',
    autoLoadModels: true,
    synchronize: true,
    define: {
      freezeTableName: true,
      timestamps: false,
    },
  }),
});

const smarternozzleUACDB: DynamicModule = SequelizeModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  name: 'SmarterNozzleUAC',
  useFactory: (config: ConfigService) => ({
    host: config.get<string>('DB_HOST'),
    port: parseInt(config.get<string>('DB_PORT')),
    username: config.get<string>('DB_USER'),
    password: config.get<string>('DB_PASSWORD'),
    database: config.get<string>('DB_UAC_NAME'),
    dialect: 'mariadb',
    autoLoadModels: true,
    synchronize: true,
    define: {
      freezeTableName: true,
      timestamps: false,
    },
  }),
});

@Module({
  imports: [
    smarternozzleDB,
    smarternozzleUACDB,
    ConfigModule.forRoot({
      envFilePath: [
        process.env.NODE_ENV === 'development'
          ? 'development.env'
          : 'production.env',
      ],
    }),
    WinstonModule.forRoot({
      exitOnError: false,
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            nestWinstonModuleUtilities.format.nestLike(),
          ),
        }),
        rotationalTransport,
      ],
    }),
    GasStationModule,
    NozzleBoothModule,
    NozzleMaintenanceModule,
    NozzleSleevesModule,
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
