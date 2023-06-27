import { Injectable } from '@nestjs/common';
import { AuthUser } from './user.service';

@Injectable()
export class AuditService {
  constructor() {}

  public isValidUser(authUser: AuthUser): boolean {
    return authUser.status === '1';
  }
}
