import { Body, Controller, Get, Post } from '@nestjs/common';
import { IResponse } from '../../../shared/models/response.model';
import { AuthService } from '../../services/auth/auth.service';

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) {
  }

  @Get('login')
  getLogin(): string {
    return 'login works mazzafaquaer';
  }

  @Post('login')
  postLogin(@Body() body: any): IResponse {
    console.log('auth cred`s', body);
    return this.authService.getAuthToken(body?.login, body?.password);
  }
}
