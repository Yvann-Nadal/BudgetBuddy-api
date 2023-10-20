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
import { UsersCreateDTO, UsersUpdateDTO } from '../dto/user.dto';
import { Public } from 'src/auth/decorator/public.decorator';



@Controller('users')
    export class UsersController {

        constructor(private readonly usersService: UsersService) {}

    @Public()
    @Get()
    getAllUsers() {
        return this.usersService.getAllUsers();
    }

    @Get(':id')
    getOneUserById(@Param('id', ParseIntPipe) id: number) {
      return this.usersService.getOneUserById(id);
    }

    @Public()
    @Get(':username')
    findOneByUsername(@Param('username') username: string) {
      return this.usersService.findOneByUsername(username);
    }



    @Public()
    @Post()
    createUser(@Body() data: UsersCreateDTO) {
      return this.usersService.createUser(data);
    }

    @Public()
    @Put(':id')
    updateUser(
      @Param('id', ParseIntPipe) id: number,
      @Body() data: UsersUpdateDTO,
    ) {
      return this.usersService.updateUser(id, data);
    }
  
    @Public()
    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number) {
      return this.usersService.deleteUser(id);
    }

    }