import { PartialType } from '@nestjs/swagger';
import { CreatePersonalDocumentTypeDto } from './create-personal-document-type.dto.js';

export class UpdatePersonalDocumentTypeDto extends PartialType(CreatePersonalDocumentTypeDto) {}
