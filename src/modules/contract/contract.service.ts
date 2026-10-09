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
    // Desactivar todos los demás contratos de este personal de forma obligatoria ("si o si")
    await this.contractRepository.update(
      { personal_id: createContractDto.personal_id },
      { status: false }
    );
    
    // Forzar el nuevo contrato a activo
    createContractDto.status = true;

    const contract = this.contractRepository.create(createContractDto);
    return this.contractRepository.save(contract);
  }

  async index() {
    return this.contractRepository.find({
      relations: {
        personal: {
          person: true
        },
        contract_type: true
      }
    });
  }

  async update(id: number, updateContractDto: UpdateContractDto) {
    const contract = await this.contractRepository.findOne({ where: { id } });
    if (!contract) {
      throw new NotFoundException('Contrato no encontrado');
    }
    
    const targetPersonalId = updateContractDto.personal_id ?? contract.personal_id;
    
    if (updateContractDto.status === true) {
      // Si este contrato se marca como activo, desactivar los demás del mismo personal
      await this.contractRepository
        .createQueryBuilder()
        .update(Contract)
        .set({ status: false })
        .where('personal_id = :pid AND id != :id', { pid: targetPersonalId, id })
        .execute();
    }

    Object.assign(contract, updateContractDto);
    
    // TypeORM fix para columnas que también tienen relaciones eager cargadas
    if (updateContractDto.personal_id) {
      delete (contract as any).personal;
    }
    if (updateContractDto.contract_type_id) {
      delete (contract as any).contract_type;
    }

    return this.contractRepository.save(contract);
  }
}
