import { Injectable } from '@nestjs/common';
import { CreateOrganizationalUnitDto } from './dto/create-organizational-unit.dto.js';
import { UpdateOrganizationalUnitDto } from './dto/update-organizational-unit.dto.js';

@Injectable()
export class OrganizationalUnitsService {
  create(createOrganizationalUnitDto: CreateOrganizationalUnitDto) {
    return 'This action adds a new organizationalUnit';
  }

  findAll() {
    return `This action returns all organizationalUnits`;
  }

  findOne(id: number) {
    return `This action returns a #${id} organizationalUnit`;
  }

  update(id: number, updateOrganizationalUnitDto: UpdateOrganizationalUnitDto) {
    return `This action updates a #${id} organizationalUnit`;
  }
}
