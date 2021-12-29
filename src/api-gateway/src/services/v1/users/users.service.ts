import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UsersService {
  constructor(@Inject('USERS_SERVICE') private readonly client: ClientProxy) {}

  async findAll() {
    return this.client.send(
      {
        role: 'users',
        cmd: 'getAll',
      },
      '',
    );
  }

  async findById(id: string) {
    return this.client.send(
      {
        role: 'users',
        cmd: 'getById',
      },
      id,
    );
  }
}
