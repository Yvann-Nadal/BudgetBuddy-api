import {
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Body,
    Put,
    Delete,
  } from '@nestjs/common';
import { UsersService } from '../service/user.service';
import { UsersEntity } from '../entity/user.entity';
import { UsersCreateDTO, UsersUpdateDTO } from '../dto/user.dto';



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

    @Post()
    createUser(@Body() data: UsersCreateDTO) {
      return this.usersService.createUser(data);
    }

    @Put(':id')
    updateUser(
      @Param('id', ParseIntPipe) id: number,
      @Body() data: UsersUpdateDTO,
    ) {
      return this.usersService.updateUser(id, data);
    }
  
    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number) {
      return this.usersService.deleteUser(id);
    }

    }