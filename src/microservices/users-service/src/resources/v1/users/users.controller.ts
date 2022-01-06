import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { CreateUserDto } from './dto/requests/create-user.dto';
import { UpdateUserDto } from './dto/requests/update-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

// Rest API Controller
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User> {
    return await this.usersService.findById(id);
  }

  @Post()
  async createUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<InsertResult> {
    return await this.usersService.create(createUserDto);
  }

  @Put(':id')
  async updateUser(
    @Param() id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UpdateResult> {
    return await this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  async deleteUser(@Param() id: string): Promise<DeleteResult> {
    return await this.usersService.delete(id);
  }
}

// Grpc Controller
@Controller()
export class UsersGrpcController {
  constructor(private readonly usersService: UsersService) {}

  @GrpcMethod('UsersGrpcService', 'GetAll')
  async getAllUsers() {
    return { users: await this.usersService.findAll() };
  }

  @GrpcMethod('UsersGrpcService', 'Get')
  async getUserById(data: { id: string }) {
    return await this.usersService.findById(data.id);
  }

  @GrpcMethod('UsersGrpcService', 'Create')
  async createUser(createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @GrpcMethod('UsersGrpcService', 'Update')
  async updateUser(updateUserDto: UpdateUserDto) {
    return await this.usersService.update(updateUserDto.id, updateUserDto);
  }

  @GrpcMethod('UsersGrpcService', 'Delete')
  async deleteUser(data: { id: string }) {
    return await this.usersService.delete(data.id);
  }
}
