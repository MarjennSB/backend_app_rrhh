import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';

/**
 * Este Pipe intercepta los datos (DTOs) que llegan a tus rutas (POST/PATCH),
 * los transforma a la clase correspondiente y los valida automáticamente.
 */
@Injectable()
export class CustomValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    
    // Convertimos el JSON puro que llega en la petición a una instancia de la clase DTO
    const object = plainToInstance(metatype, value, { enableImplicitConversion: true });
    
    // Validamos la instancia usando class-validator
    const errors = await validate(object);
    if (errors.length > 0) {
      // Extraemos los mensajes de error para que sean legibles y los lanzamos
      const messages = errors.map(err => Object.values(err.constraints || {})).flat();
      throw new BadRequestException({
        message: 'Error de validación en los datos enviados',
        errors: messages
      });
    }
    return object;
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
