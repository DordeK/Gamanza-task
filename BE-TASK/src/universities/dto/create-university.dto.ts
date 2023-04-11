/* eslint-disable prettier/prettier */
import { UniversityDto } from './university.dto'


export class CreateUniversityDto extends UniversityDto {
  created_by: string;
  created_date: string;

  constructor(name: string, image: string, Description: string, country: string, ip: string) {
    super({name, image, Description, country});
    this.created_by = ip;
    this.created_date = new Date().toISOString();
  }
}
