/* eslint-disable prettier/prettier */
import { Controller,Get,Post,Param,Query,Body,Req} from '@nestjs/common';
import {Request} from 'express';
@Controller('users')
export class UsersController {
    @Get('/:id')
    public getUsers(@Param() params:any, @Query() query:any){
        console.log(params);
        console.log(query);
        return "You sent a get request to users endpoint";
    }

    @Post()
    public createUsers(@Req() request:Request){
        console.log(request);
        return "You sent a post to users endpoints "
    }
}
