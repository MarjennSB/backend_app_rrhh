import { Test, TestingModule } from '@nestjs/testing';
import { TypeContractController } from './type-contract.controller.js';
import { TypeContractService } from './type-contract.service.js';

describe('TypeContractController', () => {
  let controller: TypeContractController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeContractController],
      providers: [TypeContractService],
    }).compile();

    controller = module.get<TypeContractController>(TypeContractController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
