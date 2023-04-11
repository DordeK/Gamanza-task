/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { UniversityDto } from './university.dto'
import { IsNotEmpty } from 'class-validator';


export type updateUniversity = {
    name?: string;
    image?: string;
    Description?: string;
    country?: string;
}

export class UpdateUniversityDto extends PartialType(UniversityDto) {
    updated_by: string;
    updated_date: string;
}