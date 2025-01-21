import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegionalEntity } from './regional.entity';
import { NotFoundException } from '@nestjs/common';
import { CreatedRegionalDto } from './dto/created-regional.dto';
import { UpdadteRegionalDto } from './dto/update-regional.dto';

@Injectable()
export class RegionalService {
    constructor(
        @InjectRepository(RegionalEntity)
        private readonly regionalRepository: Repository<RegionalEntity>
    ) {}

    async findAll() {
        return await this.regionalRepository.find();
    }

    async create(data: CreatedRegionalDto) {
        const regional = this.regionalRepository.create(data);
        return await this.regionalRepository.save(regional);
    }

    async findOne(id: number) {
        try {
            return await this.regionalRepository.findOneOrFail({
                where: { id },
            });
        } catch (error) {
            throw new NotFoundException(`Regional with ID ${id} not found`);
        }
    }

    async update(id: number, data: UpdadteRegionalDto) {
        const regional = await this.findOne(id);
        this.regionalRepository.merge(regional, data);
        return await this.regionalRepository.save(regional); 
      }
    
    async deleteById(id: number) {
        await this.findOne(id);  
        await this.regionalRepository.delete(id); 
    }
}
