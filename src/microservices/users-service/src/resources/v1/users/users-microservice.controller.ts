import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { CreateUserDto } from './dto/requests/create-user.dto';
import { UpdateUserDto } from './dto/requests/update-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller()
export class UsersMicroserviceController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern({ role: 'users', cmd: 'getAll' })
  async getAllUsers(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @MessagePattern({ role: 'users', cmd: 'getById' })
  async getUserById(id: string): Promise<User> {
    return await this.usersService.findById(id);
  }

  @MessagePattern({ role: 'users', cmd: 'create' })
  async createUser(createUserDto: CreateUserDto): Promise<InsertResult> {
    return await this.usersService.create(createUserDto);
  }

  @MessagePattern({ role: 'users', cmd: 'update' })
  async updateUser(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UpdateResult> {
    return await this.usersService.update(id, updateUserDto);
  }

  @MessagePattern({ role: 'users', cmd: 'delete' })
  async deleteUser(id: string): Promise<DeleteResult> {
    return await this.usersService.delete(id);
  }
}
