import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class TaskService {
  constructor(@Inject('TASK_SERVICE') private client: ClientProxy) {}

  getTasks() {}
  getTaskById() {}

  createTask(dto) {
    return this.client.send({ cmd: 'Task' }, dto);
    // return dto;
  }

  editTask() {}
  deleteTask() {}
}
