import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity.js';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { Role } from '../role/entities/role.entity.js';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({ 
      where: { email },
      relations: {role: {permissions: true}}
    });
  }

  async index() {
    return this.userRepository.find();
  }

  async store(dto: CreateUserDto) {
    const emailExists = await this.userRepository.findOne({ where: { email: dto.email } });
    if (emailExists) throw new BadRequestException('El email ya está registrado');

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const roleExists = await this.roleRepository.findOne({ where: { id: dto.role_id } });
    if (!roleExists) throw new BadRequestException('El rol especificado no existe');

    const user = this.userRepository.create({
      ...dto,
      password: hashedPassword
    });

    return this.userRepository.save(user);
  }

  async update(id: number, dto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) throw new NotFoundException('Usuario no encontrado');

    if (dto.password) {
      user.password = await bcrypt.hash(dto.password, 10);
    }
    
    if (dto.role_id !== undefined) {
      const roleExists = await this.roleRepository.findOne({ where: { id: dto.role_id } });
      if (!roleExists) throw new BadRequestException('El rol especificado no existe');
      user.role_id = dto.role_id;
    }

    if (dto.first_name !== undefined) user.first_name = dto.first_name;
    if (dto.last_name !== undefined) user.last_name = dto.last_name;
    if (dto.second_last_name !== undefined) user.second_last_name = dto.second_last_name;
    if (dto.email !== undefined) user.email = dto.email;
    if (dto.profile_photo_path !== undefined) user.profile_photo_path = dto.profile_photo_path;
    if (dto.status !== undefined) user.status = dto.status;

    return this.userRepository.save(user);
  }
}
