import {
    Controller,
    Get,
    Param,
    ParseIntPipe,
  } from '@nestjs/common';
import { AuthService } from '../service/auth.service';



@Controller('auth')
    export class AuthController {

        constructor(private readonly authService: AuthService) {}

    @Get()
    getAllAuth() {
        return this.authService.getAllAuths();
    }

    @Get(':id')
    getOneUserById(@Param('id', ParseIntPipe) id: number) {
      return this.authService.getOneAuthById(id);
    }

    }