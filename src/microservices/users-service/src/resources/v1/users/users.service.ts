import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { CreateUserDto } from './dto/requests/create-user.dto';
import { UpdateUserDto } from './dto/requests/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findById(id: string): Promise<User> {
    return await this.usersRepository.findOne(id);
  }

  async create(createUserDto: CreateUserDto): Promise<InsertResult> {
    const createdUser: User = this.usersRepository.create(createUserDto);
    const result: InsertResult = await this.usersRepository.insert(createdUser);

    return result;
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UpdateResult> {
    const result: UpdateResult = await this.usersRepository.update(
      id,
      updateUserDto,
    );

    return result;
  }

  async delete(id: string): Promise<DeleteResult> {
    const result: DeleteResult = await this.usersRepository.delete(id);

    return result;
  }
}
