import { Module } from '@nestjs/common';
import { TypeContractService } from './type-contract.service.js';
import { TypeContractController } from './type-contract.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeContract } from './entities/type-contract.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([TypeContract])],
  controllers: [TypeContractController],
  providers: [TypeContractService],
  exports: [TypeContractService]
})
export class TypeContractModule {}
