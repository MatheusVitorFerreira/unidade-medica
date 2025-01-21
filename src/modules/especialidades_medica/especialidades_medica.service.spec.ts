import { Test, TestingModule } from '@nestjs/testing';
import { EspecialidadesMedicaService } from './especialidades_medica.service';

describe('EspecialidadesMedicaService', () => {
  let service: EspecialidadesMedicaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EspecialidadesMedicaService],
    }).compile();

    service = module.get<EspecialidadesMedicaService>(EspecialidadesMedicaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
