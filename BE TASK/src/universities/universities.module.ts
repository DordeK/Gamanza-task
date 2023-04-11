/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UniversitiesService } from './universities.service';
import { UniversitiesController } from './universities.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UniversitySchema, LogSchema } from './entities/entity';
import { UniversitiesGateway } from './universities.gateway';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'university',
          type: 'direct',
        },
      ],
      uri: process.env.RMQ_URL,
      connectionInitOptions: { wait: false },
    }),
    MongooseModule.forFeature([{ name: 'Universities', schema: UniversitySchema }]),
    MongooseModule.forFeature([{ name: 'Logs', schema: LogSchema }]),
  ],
  controllers: [UniversitiesController],
  providers: [UniversitiesService, UniversitiesGateway],
})
export class UniversitiesModule {}
