import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDistrictDto } from './dto/create-district.dto.js';
import { UpdateDistrictDto } from './dto/update-district.dto.js';
import { District } from './entities/district.entity.js';

@Injectable()
export class DistrictsService {
  constructor(
    @InjectRepository(District)
    private readonly districtRepository: Repository<District>
  ) {}

  async index() {
    return this.districtRepository.find({ relations: { province: true} });
  }

  async store(dto: CreateDistrictDto) {
    const district = this.districtRepository.create(dto);
    return this.districtRepository.save(district);
  }

  async update(id: string, dto: UpdateDistrictDto) {
    const district = await this.districtRepository.findOne({ where: { id } });
    if (!district) {
      throw new NotFoundException(`Distrito con ID ${id} no encontrado`);
    }

    if (dto.description !== undefined) district.description = dto.description;
    if (dto.province_id !== undefined) district.province_id = dto.province_id;
    if (dto.status !== undefined) district.status = dto.status;

    return this.districtRepository.save(district);
  }
}
