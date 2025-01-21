import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, Controller } from '@nestjs/common';
import { EspecialidadesMedicaService } from './especialidades_medica.service';
import { EspecialidadeMedicaEntity } from './especialidade_medica.entity';
import { EspecialidadesMedicaController } from './especialidades_medica.controller';


@Module({
  imports:[TypeOrmModule.forFeature([EspecialidadeMedicaEntity])],
  exports:[EspecialidadesMedicaService],
  providers: [EspecialidadesMedicaService],
  controllers: [EspecialidadesMedicaController]
})
export class EspecialidadesMedicaModule {}
