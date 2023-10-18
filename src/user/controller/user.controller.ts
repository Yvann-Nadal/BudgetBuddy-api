import {
    Controller,
    Get,
    Param,
    ParseIntPipe,
  } from '@nestjs/common';
import { UsersService } from '../service/user.service';



@Controller('users')
    export class UsersController {

        constructor(private readonly usersService: UsersService) {}

    @Get()
    getAllUsers() {
        return this.usersService.getAllUsers();
    }

    @Get(':id')
    getOneUserById(@Param('id', ParseIntPipe) id: number) {
      return this.usersService.getOneUserById(id);
    }

    }