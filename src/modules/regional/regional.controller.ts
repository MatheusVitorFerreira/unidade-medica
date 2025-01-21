import { CreatedRegionalDto } from './dto/created-regional.dto';
import { UpdadteRegionalDto } from './dto/update-regional.dto';
import { RegionalService } from './regional.service';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Post, Put } from '@nestjs/common';


@Controller('api/v1/regional')
export class RegionalController 
{
    constructor(private readonly regionalService:RegionalService){}
    @Get()
    async index(){
      return await this.regionalService.findAll();
    }
  
    @Post()
    async create(@Body() body: CreatedRegionalDto){
      return await this.regionalService.create(body);
    }
  
    @Get(':id')
    async show(@Param('id', ParseIntPipe) id: number) {
        return await this.regionalService.findOne(id);
    }
    
    @Put(':id')
    async update(@Param('id',ParseIntPipe) id:number,@Body() body: UpdadteRegionalDto){
      return await this.regionalService.update(id,body);
    }
  
    @Delete(':id')
    async destroy(@Param('id', ParseIntPipe) id:number){
      await this.regionalService.deleteById(id);
  
    }
  }

