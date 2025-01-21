import { IsNotEmpty } from "class-validator";


export class CreatedRegionalDto{

  @IsNotEmpty()
  label: string;

  @IsNotEmpty()
  regiao: string;
}