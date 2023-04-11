/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUniversityDto } from './dto/create-university.dto';
import { UpdateUniversityDto } from './dto/update-university.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { University, Log } from './entities/entity';
import { LogType } from './dto/log.dto';

import { RabbitRPC } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class UniversitiesService {
  constructor(
    @InjectModel('Universities')
    private readonly universityModel: Model<University>,
    @InjectModel('Logs')
    private readonly log: Model<Log>,
  ) {}

  @RabbitRPC({
    exchange: 'university',
    routingKey: 'deleted',
    queue: 'deleted',
  })
  async handleDeleted(data: LogType) {
    this.log.create(data)
    return true
  }

  @RabbitRPC({
    exchange: 'university',
    routingKey: 'updated',
    queue: 'updated',
  })
  async handleUpdate(data: LogType) {
    this.log.create(data)
    return true
  }

  async create(createUniversityDto: CreateUniversityDto) {
    return await this.universityModel.create(createUniversityDto);
  }

  async findAll(filterOptions: any, sortOptions: any, page: number, limit: number) {
    return await this.universityModel.find(filterOptions).sort(sortOptions).skip((page - 1) * limit).limit(limit).exec();;
  }

  async findOne(id: string) {
    const _id = id.match(/^[0-9a-fA-F]{24}$/) ? id : null
    return await this.universityModel.findOne({$or: [ {_id}, {name: id} ]});
  }

  async update(id: string, updateUniversityDto: UpdateUniversityDto) {
    const _id = id.match(/^[0-9a-fA-F]{24}$/) ? id : null
    return await this.universityModel.findOneAndUpdate({$or: [ {_id}, {name: id} ]}, updateUniversityDto);
  }

  async remove(id: string) {
    const _id = id.match(/^[0-9a-fA-F]{24}$/) ? id : null
    return await this.universityModel.findOneAndDelete({$or: [ {_id}, {name: id} ]});
  }
}
