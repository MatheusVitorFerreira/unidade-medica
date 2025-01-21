import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { ClinicaEntity } from "../clinica/clinica.entity";


@Entity({ name: 'especialidade_medica' })
export class EspecialidadeMedicaEntity {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  descricao: string;

  @ManyToMany(() => ClinicaEntity, clinica => clinica.especialidades)
  clinicas: ClinicaEntity[];
}
