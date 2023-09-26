import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { TASK_SERVICE } from './constants';

@Injectable()
export class TaskService {
  constructor(@Inject(TASK_SERVICE) private client: ClientProxy) {}

  getTasks() {}
  getTaskById() {}

  createTask(dto) {
    return this.client.send({ cmd: 'Task' }, dto);
    // return dto;
  }

  editTask() {}
  deleteTask() {}
}
