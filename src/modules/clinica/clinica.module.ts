import { Module } from '@nestjs/common';
import { ClinicaService } from './clinica.service';
import { ClinicaController } from './clinica.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClinicaEntity } from './clinica.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ClinicaEntity])],
  providers: [ClinicaService],
  exports: [ClinicaService],
  controllers: [ClinicaController]
  
})
export class ClinicaModule {}
