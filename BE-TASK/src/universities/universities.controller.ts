/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, Ip, Inject } from '@nestjs/common';
import { UniversitiesService } from './universities.service';
import { CreateUniversityDto } from './dto/create-university.dto';
import { UpdateUniversityDto } from './dto/update-university.dto';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { LogDto, LogType } from './dto/log.dto';

@Controller('universities')
export class UniversitiesController {
  constructor(private readonly universitiesService: UniversitiesService, private readonly amqpConnection: AmqpConnection) {}

  @Post()
  create(@Body() university: CreateUniversityDto, @Ip() ip) {
    const { name, image, Description, country } = university
    const universityDto = new CreateUniversityDto(
      name,
      image,
      Description,
      country,
      ip
    )
    return this.universitiesService.create(universityDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.universitiesService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUniversityDto: UpdateUniversityDto, @Ip() ip) {
    updateUniversityDto.updated_date = new Date().toISOString();
    updateUniversityDto.updated_by = ip
    const res = await this.universitiesService.update(id, updateUniversityDto);
    const logData: LogType = new LogDto({ 
      object_id: res.id,
      user: updateUniversityDto.updated_by,
      action: 'updated',
      name: updateUniversityDto.name || res.name,
      date: new Date().toISOString() 
    })
    this.amqpConnection.publish('university', 'updated', logData);
    return res;
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Ip() ip) {
    const res = await this.universitiesService.remove(id);
    const logData: LogType = new LogDto({ 
      object_id: res.id,
      user: ip,
      action: 'deleted',
      name: res.name,
      date: new Date().toISOString() 
    })
    if(res) this.amqpConnection.publish('university', 'deleted', logData);
    return res;
  }
}
