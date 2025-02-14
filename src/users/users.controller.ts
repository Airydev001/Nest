/* eslint-disable prettier/prettier */
import { Controller,Get,Post,Param,Query,Body,Req,Headers,Ip,ParseIntPipe,DefaultValuePipe} from '@nestjs/common';
import {Request} from 'express';
@Controller('users')
export class UsersController {
    @Get('/:id')
    public getUsers(@Param('id', ParseIntPipe)
     id:number | undefined, 
     @Query('limit',new DefaultValuePipe(10), ParseIntPipe) limit:number,@Query('page', new DefaultValuePipe(1),
         ParseIntPipe) page:number){
        console.log(typeof id);
        console.log(typeof page);
        console.log(page);
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
