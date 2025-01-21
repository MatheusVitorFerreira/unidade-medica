import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    ManyToOne, 
    JoinColumn, 
    ManyToMany, 
    JoinTable 
  } from 'typeorm';
 
import { RegionalEntity } from '../regional/regional.entity';
import { EspecialidadeMedicaEntity } from '../especialidades_medica/especialidade_medica.entity';
  
  @Entity({ name: 'clinica' }) 
  export class ClinicaEntity {
    @PrimaryGeneratedColumn()
    id: number; 
  
    @Column()
    razao_social: string; // Coluna para a razão social
  
    @Column({ unique: true })
    cnpj: string; // Coluna para o CNPJ, valor único
  
    @Column()
    nomefantasia: string; // Coluna para o nome fantasia
  
    @Column({ type: 'timestamp', nullable: true })
    data_inauguracao: Date; // Coluna para a data de inauguração
  
    @Column({ default: true })
    ativa: boolean; 
  
    @Column('simple-array', { nullable: true })
    especialidades_medicas_ids: number[]; 
  
    @ManyToOne(() => RegionalEntity, (regional) => regional.clinicas, { lazy: true, nullable: false })
    @JoinColumn({ name: 'regional_id' }) 
    regional: RegionalEntity;
  
    @ManyToMany(() => EspecialidadeMedicaEntity, { lazy: true })
    @JoinTable({
      name: 'clinica_especialidade', 
      joinColumn: { name: 'clinica_id' },
      inverseJoinColumn: { name: 'especialidade_id' },
    })
    especialidades: EspecialidadeMedicaEntity[]; 
  }
  