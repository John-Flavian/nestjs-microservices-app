import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { TaskService } from './task.service';
import { GetUser } from 'src/auth/decorator';
import { TaskDto } from './dto';

@UseGuards(JwtGuard)
@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}
  @Get()
  getTasks(@GetUser('id') userId: number) {
    return this.taskService.getTasks();
  }

  @Get(':id')
  getTaskById(@GetUser('id') userId: number, @Param() taskId: number) {}

  @Post()
  createTask(@Body() dto: TaskDto) {
    return this.taskService.createTask(dto);
  }

  editTask() {}
  deleteTask() {}
}
