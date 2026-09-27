import { Test, TestingModule } from '@nestjs/testing';
import { TypeAttendanceService } from './type-attendance.service.js';

describe('TypeAttendanceService', () => {
  let service: TypeAttendanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeAttendanceService],
    }).compile();

    service = module.get<TypeAttendanceService>(TypeAttendanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
