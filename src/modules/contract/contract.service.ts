import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContractDto } from './dto/create-contract.dto.js';
import { UpdateContractDto } from './dto/update-contract.dto.js';
import { Contract } from './entities/contract.entity.js';

@Injectable()
export class ContractService {
  constructor(
    @InjectRepository(Contract)
    private readonly contractRepository: Repository<Contract>,
  ) {}

  async store(createContractDto: CreateContractDto) {
    const contract = this.contractRepository.create(createContractDto);
    return this.contractRepository.save(contract);
  }

  async index() {
    return this.contractRepository.find();
  }

  async update(id: number, updateContractDto: UpdateContractDto) {
    const contract = await this.contractRepository.findOne({ where: { id } });
    if (!contract) {
      throw new NotFoundException('Contrato no encontrado');
    }
    
    Object.assign(contract, updateContractDto);
    return this.contractRepository.save(contract);
  }
}
