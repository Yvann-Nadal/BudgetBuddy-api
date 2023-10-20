import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/user/service/user.service';
import { JwtConstants } from '../constantes';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(username, password ) {
    const user = await this.usersService.findOneByUsername(username);
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }
    
    const payload = { username: user.username, sub: user.id };
    
    return {
      access_token: await this.jwtService.signAsync(payload, { secret: JwtConstants.secret}),
    };
  }
}