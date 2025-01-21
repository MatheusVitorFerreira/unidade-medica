import { Module } from '@nestjs/common';
import { ClinicaModule } from './clinica/clinica.module';
import { EspecialidadesMedicaModule } from './especialidades_medica/especialidades_medica.module';
import { RegionalModule } from './regional/regional.module';

@Module({
  imports: [ClinicaModule, EspecialidadesMedicaModule, RegionalModule]
})
export class ModulesModule {}
