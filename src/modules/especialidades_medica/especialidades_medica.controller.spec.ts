import { Test, TestingModule } from '@nestjs/testing';
import { EspecialidadesMedicaController } from './especialidades_medica.controller';

describe('EspecialidadesMedicaController', () => {
  let controller: EspecialidadesMedicaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EspecialidadesMedicaController],
    }).compile();

    controller = module.get<EspecialidadesMedicaController>(EspecialidadesMedicaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
