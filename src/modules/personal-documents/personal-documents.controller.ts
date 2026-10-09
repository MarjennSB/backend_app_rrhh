import { Controller, Get, Post, Body, Patch, Param, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import * as fs from 'fs';
import { PersonalDocumentsService } from './personal-documents.service.js';
import { CreatePersonalDocumentDto } from './dto/create-personal-document.dto.js';
import { UpdatePersonalDocumentDto } from './dto/update-personal-document.dto.js';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard.js';
import { RolesGuard } from '../../common/guards/roles.guard.js';
import { RequireRoles } from '../../common/decorators/roles.decorator.js';

const uploadPath = './uploads/documents';
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

@ApiTags('personal-documents')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@RequireRoles('Administrador')
@Controller('personal-documents')
export class PersonalDocumentsController {
  constructor(private readonly personalDocumentsService: PersonalDocumentsService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un registro de documento personal con archivo adjunto' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        personal_id: { type: 'number', example: 1 },
        personal_document_type_id: { type: 'number', example: 1 },
        document_date: { type: 'string', format: 'date', example: '2023-10-01' },
        status: { type: 'boolean', example: true },
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads/documents',
      filename: (req: any, file: any, cb: any) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = extname(file.originalname);
        cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
      }
    })
  }))
  store(
    @Body() createPersonalDocumentDto: CreatePersonalDocumentDto,
    @UploadedFile() file: any
  ) {
    if (createPersonalDocumentDto.personal_id !== undefined && typeof createPersonalDocumentDto.personal_id === 'string') {
      const parsed = parseInt(createPersonalDocumentDto.personal_id as any, 10);
      if (!isNaN(parsed)) createPersonalDocumentDto.personal_id = parsed;
      else delete (createPersonalDocumentDto as any).personal_id;
    }
    if (createPersonalDocumentDto.personal_document_type_id !== undefined && typeof createPersonalDocumentDto.personal_document_type_id === 'string') {
      const parsed = parseInt(createPersonalDocumentDto.personal_document_type_id as any, 10);
      if (!isNaN(parsed)) createPersonalDocumentDto.personal_document_type_id = parsed;
      else delete (createPersonalDocumentDto as any).personal_document_type_id;
    }
    if (typeof createPersonalDocumentDto.status === 'string') {
      createPersonalDocumentDto.status = createPersonalDocumentDto.status === 'true';
    }

    if (file) {
      createPersonalDocumentDto.file_name = file.originalname;
      createPersonalDocumentDto.file_path = `/uploads/documents/${file.filename}`;
    }
    return this.personalDocumentsService.store(createPersonalDocumentDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los documentos de personal' })
  index() {
    return this.personalDocumentsService.index();
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un documento de personal' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads/documents',
      filename: (req: any, file: any, cb: any) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = extname(file.originalname);
        cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
      }
    })
  }))
  update(
    @Param('id') id: string, 
    @Body() updatePersonalDocumentDto: UpdatePersonalDocumentDto,
    @UploadedFile() file: any
  ) {
    if (typeof updatePersonalDocumentDto.personal_id === 'string') {
      updatePersonalDocumentDto.personal_id = parseInt(updatePersonalDocumentDto.personal_id as any, 10);
    }
    if (typeof updatePersonalDocumentDto.personal_document_type_id === 'string') {
      updatePersonalDocumentDto.personal_document_type_id = parseInt(updatePersonalDocumentDto.personal_document_type_id as any, 10);
    }
    if (typeof updatePersonalDocumentDto.status === 'string') {
      updatePersonalDocumentDto.status = updatePersonalDocumentDto.status === 'true';
    }

    if (file) {
      updatePersonalDocumentDto.file_name = file.originalname;
      updatePersonalDocumentDto.file_path = `/uploads/documents/${file.filename}`;
    }
    return this.personalDocumentsService.update(+id, updatePersonalDocumentDto);
  }
}
