import { PartialType } from '@nestjs/swagger';
import { CreateProvinceDto } from './create-province.dto.js';

export class UpdateProvinceDto extends PartialType(CreateProvinceDto) {}
