import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContractService } from './contract.service.js';
import { ContractController } from './contract.controller.js';
import { Contract } from './entities/contract.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Contract])],
  controllers: [ContractController],
  providers: [ContractService],
})
export class ContractModule {}
