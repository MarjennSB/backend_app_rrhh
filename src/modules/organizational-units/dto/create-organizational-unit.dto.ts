import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';

export class CreateOrganizationalUnitDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsBoolean()
  @IsOptional()
  status?: boolean;
}
