/* eslint-disable prettier/prettier */

export type LogType = {
    action: string;
    object_id: string;
    user: string;
    name: string;
    date: string;
}

export class LogDto {
    action: string;
    object_id: string;
    user: string;
    name: string;
    date: string;
  
    constructor({action, object_id, user, name, date}: LogType) {
      this.action = action;
      this.object_id = object_id;
      this.user = user;
      this.name = name;
      this.date = date;
    }
}
  