import { PartialType } from '@nestjs/swagger';
import { CreateTypeContractDto } from './create-type-contract.dto.js';

export class UpdateTypeContractDto extends PartialType(CreateTypeContractDto) {}
