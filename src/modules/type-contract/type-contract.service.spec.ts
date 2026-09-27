import { Test, TestingModule } from '@nestjs/testing';
import { TypeContractService } from './type-contract.service.js';

describe('TypeContractService', () => {
  let service: TypeContractService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeContractService],
    }).compile();

    service = module.get<TypeContractService>(TypeContractService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
