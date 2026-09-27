import { Test, TestingModule } from '@nestjs/testing';
import { TypeAttendanceController } from './type-attendance.controller.js';
import { TypeAttendanceService } from './type-attendance.service.js';

describe('TypeAttendanceController', () => {
  let controller: TypeAttendanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeAttendanceController],
      providers: [TypeAttendanceService],
    }).compile();

    controller = module.get<TypeAttendanceController>(TypeAttendanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
