import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProvinceDto } from './dto/create-province.dto.js';
import { UpdateProvinceDto } from './dto/update-province.dto.js';
import { Province } from './entities/province.entity.js';

@Injectable()
export class ProvincesService {
  constructor(
    @InjectRepository(Province)
    private readonly provinceRepository: Repository<Province>
  ) {}

  async index() {
    return this.provinceRepository.find({ relations: { department: true} });
  }

  async store(dto: CreateProvinceDto) {
    const province = this.provinceRepository.create(dto);
    return this.provinceRepository.save(province);
  }

  async update(id: string, dto: UpdateProvinceDto) {
    const province = await this.provinceRepository.findOne({ where: { id } });
    if (!province) {
      throw new NotFoundException(`Provincia con ID ${id} no encontrada`);
    }

    if (dto.description !== undefined) province.description = dto.description;
    if (dto.department_id !== undefined) province.department_id = dto.department_id;
    if (dto.status !== undefined) province.status = dto.status;

    return this.provinceRepository.save(province);
  }
}
