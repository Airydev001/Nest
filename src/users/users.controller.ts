/* eslint-disable prettier/prettier */
import { Controller,Get,Post,Param,Query,Body,Req,Headers,Ip} from '@nestjs/common';
import {Request} from 'express';
@Controller('users')
export class UsersController {
    @Get('/:id')
    public getUsers(@Param('id') id:any, @Query('limit') limit:any){
        console.log(id);
        console.log(limit);
        return "You sent a get request to users endpoint";
    }

    @Post()
    public createUsers(@Body('email') email:any, @Headers() headers,@Ip() ip:any){
        console.log(headers);
        console.log(ip);
        return "You sent a post to users endpoints "
    }
}
