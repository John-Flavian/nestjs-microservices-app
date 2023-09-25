import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  getTasks() {}
  getTaskById() {}

  createTask(dto) {
    return dto;
  }

  editTask() {}
  deleteTask() {}
}
