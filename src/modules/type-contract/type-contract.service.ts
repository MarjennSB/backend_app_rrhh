import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTypeContractDto } from './dto/create-type-contract.dto.js';
import { UpdateTypeContractDto } from './dto/update-type-contract.dto.js';
import { TypeContract } from './entities/type-contract.entity.js';

@Injectable()
export class TypeContractService {
  constructor(
    @InjectRepository(TypeContract)
    private readonly typeContractRepository: Repository<TypeContract>
  ) {}

  async index() {
    return this.typeContractRepository.find();
  }

  async store(dto: CreateTypeContractDto) {
    const typeContract = this.typeContractRepository.create(dto);
    return this.typeContractRepository.save(typeContract);
  }

  async update(id: number, dto: UpdateTypeContractDto) {
    const typeContract = await this.typeContractRepository.findOne({ where: { id } });
    if (!typeContract) {
      throw new NotFoundException(`Tipo de contrato con ID ${id} no encontrado`);
    }

    if (dto.name !== undefined) typeContract.name = dto.name;
    if (dto.description !== undefined) typeContract.description = dto.description;
    if (dto.status !== undefined) typeContract.status = dto.status;

    return this.typeContractRepository.save(typeContract);
  }
}
