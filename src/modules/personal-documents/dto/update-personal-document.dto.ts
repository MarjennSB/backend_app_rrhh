import { PartialType } from '@nestjs/swagger';
import { CreatePersonalDocumentDto } from './create-personal-document.dto.js';

export class UpdatePersonalDocumentDto extends PartialType(CreatePersonalDocumentDto) {}
