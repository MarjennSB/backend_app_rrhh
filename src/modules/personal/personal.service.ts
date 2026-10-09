import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Not } from 'typeorm';
import { CreatePersonalDto } from './dto/create-personal.dto.js';
import { UpdatePersonalDto } from './dto/update-personal.dto.js';
import { Personal } from './entities/personal.entity.js';

@Injectable()
export class PersonalService {
  constructor(
    @InjectRepository(Personal)
    private readonly personalRepository: Repository<Personal>,
  ) {}

  async store(createPersonalDto: CreatePersonalDto) {
    const existingPersonal = await this.personalRepository.findOne({
      where: { person_id: createPersonalDto.person_id }
    });

    if (existingPersonal) {
      throw new ConflictException('Esta persona ya se encuentra registrada como personal.');
    }

    const personal = this.personalRepository.create(createPersonalDto);
    return this.personalRepository.save(personal);
  }

  async index() {
    return this.personalRepository.find({
      relations: {
        person: true,
        position: true,
        organizational_unit: true
      }
    });
  }

  async update(id: number, updatePersonalDto: UpdatePersonalDto) {
    const personal = await this.personalRepository.findOne({ where: { id } });
    if (!personal) {
      throw new NotFoundException('Personal no encontrado');
    }

    if (updatePersonalDto.person_id && updatePersonalDto.person_id !== personal.person_id) {
      const existingPersonal = await this.personalRepository.findOne({
        where: { person_id: updatePersonalDto.person_id, id: Not(id) }
      });

      if (existingPersonal) {
        throw new ConflictException('Esta persona ya se encuentra asignada en otro registro de personal.');
      }
    }
    
    Object.assign(personal, updatePersonalDto);

    // Fix eager load relations replacement bug
    if (updatePersonalDto.person_id) delete (personal as any).person;
    if (updatePersonalDto.position_id) delete (personal as any).position;
    if (updatePersonalDto.organizational_unit_id) delete (personal as any).organizational_unit;

    return this.personalRepository.save(personal);
  }
}
