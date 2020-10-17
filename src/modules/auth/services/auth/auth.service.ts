import { Injectable } from '@nestjs/common';
import { IResponse } from '../../../shared/models/response.model';

@Injectable()
export class AuthService {
  getAuthToken(login: string, password: string): IResponse {
    // not implemented properly
    return  {
      status: true,
      data: {
        token: 'smoken'
      }
    };
  }
}
