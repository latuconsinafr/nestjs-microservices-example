import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

interface UsersGrpcService {
  getAll(data: {}): Promise<any>;
  get(data: { id: string }): Promise<any>;
}

@Injectable()
export class UsersService implements OnModuleInit {
  private usersGrpcService: UsersGrpcService;

  constructor(@Inject('USERS_PACKAGE') private readonly client: ClientGrpc) {}

  onModuleInit() {
    this.usersGrpcService =
      this.client.getService<UsersGrpcService>('UsersGrpcService');
  }

  async findAll() {
    return await this.usersGrpcService.getAll({});
  }

  async findById(id: string) {
    return this.usersGrpcService.get({ id });
  }
}
