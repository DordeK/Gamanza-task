import { Module } from '@nestjs/common';
import { UniversitiesModule } from './universities/universities.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UniversitiesModule,
    MongooseModule.forRoot(process.env.MONGODB_URL, {
      dbName: 'Gamanza',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
