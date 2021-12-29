import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { CreateUserDto } from '../dto/requests/users/create-user.dto';
import { UpdateUserDto } from '../dto/requests/users/update-user.dto';
import { User } from '../entities/user.entity';
import { UsersService } from '../services/users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern({ role: 'users', cmd: 'getAll' })
  getAllUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @MessagePattern({ role: 'users', cmd: 'getById' })
  getUserById(id: string): Promise<User> {
    return this.usersService.findById(id);
  }

  @MessagePattern({ role: 'users', cmd: 'create' })
  createUser(createUserDto: CreateUserDto): Promise<InsertResult> {
    return this.usersService.create(createUserDto);
  }

  @MessagePattern({ role: 'users', cmd: 'update' })
  updateUser(id: string, updateUserDto: UpdateUserDto): Promise<UpdateResult> {
    return this.usersService.update(id, updateUserDto);
  }

  @MessagePattern({ role: 'users', cmd: 'delete' })
  deleteUser(id: string): Promise<DeleteResult> {
    return this.usersService.delete(id);
  }
}
