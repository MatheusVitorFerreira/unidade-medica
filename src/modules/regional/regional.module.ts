import { Module } from '@nestjs/common';
import { RegionalService } from './regional.service';
import { RegionalController } from './regional.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegionalEntity } from './regional.entity';

@Module({
  imports:[TypeOrmModule.forFeature([RegionalEntity])],
  exports: [RegionalService],
  providers: [RegionalService],
  controllers: [RegionalController]
})
export class RegionalModule {}
