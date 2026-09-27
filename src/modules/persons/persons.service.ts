import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePersonDto } from './dto/create-person.dto.js';
import { UpdatePersonDto } from './dto/update-person.dto.js';
import { Person } from './entities/person.entity.js';

@Injectable()
export class PersonsService {
  constructor(
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>,
  ) {}

  async store(createPersonDto: CreatePersonDto) {
    const exists = await this.personRepository.findOne({ where: { document_number: createPersonDto.document_number } });
    if (exists) {
        throw new BadRequestException('El número de documento ya está registrado');
    }
    const person = this.personRepository.create(createPersonDto);
    return this.personRepository.save(person);
  }

  async index() {
    return this.personRepository.find();
  }

  async update(id: number, updatePersonDto: UpdatePersonDto) {
    const person = await this.personRepository.findOne({ where: { id } });
    if (!person) {
      throw new NotFoundException('Persona no encontrada');
    }
    
    if (updatePersonDto.document_number && updatePersonDto.document_number !== person.document_number) {
        const exists = await this.personRepository.findOne({ where: { document_number: updatePersonDto.document_number } });
        if (exists) {
            throw new BadRequestException('El número de documento ya está registrado por otra persona');
        }
    }

    Object.assign(person, updatePersonDto);
    return this.personRepository.save(person);
  }
}
