import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ClinicaEntity } from '../clinica/clinica.entity';


@Entity({ name: 'regional' }) 
export class RegionalEntity {
  @PrimaryGeneratedColumn()
  id: number; 

  @Column()
  label: string; 

  @Column()
  regiao: string; 

  @OneToMany(() => ClinicaEntity, (clinica) => clinica.regional)
  clinicas: ClinicaEntity[]; 
}
