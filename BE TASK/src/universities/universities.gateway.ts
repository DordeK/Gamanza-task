/* eslint-disable prettier/prettier */
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { UniversitiesService } from './universities.service';
import { Injectable } from '@nestjs/common';

type Sort = {
  name?: number
  created_date?: number
}

type Filter = {
  name?: string
  created_by?: string
  created_date?: string
  updated_by?: string
}

type Request = {
  filter?: Filter[]
  sort?: Sort
  limit?: number
  page?: number
}

@Injectable()
@WebSocketGateway()
export class UniversitiesGateway {
  constructor(private readonly universitiesService: UniversitiesService) {}

  @WebSocketServer()
  server;

  @SubscribeMessage('universities')
  async handleMessage(@MessageBody() body: Request) {
    const { filter, sort, limit, page } = body
  
    const filterOptions = {}
    if(filter?.length){
      filterOptions['$and'] = filter.map(f => ({[Object.keys(f)[0]]: new RegExp(Object.values(f)[0], 'i')}))
    }

    const sortOptions = {
      ...sort
    }
  
    return await this.universitiesService.findAll(filterOptions, sortOptions, page, limit);
  }
}
