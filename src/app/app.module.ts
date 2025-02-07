/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
/*
* User created modules
**/

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UsersModule } from 'src/users/users.module';


@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
