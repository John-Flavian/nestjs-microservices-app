import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { RmqModule } from 'src/rmq/rmq.module';
import { TaskService } from './task.service';
import { TASK_SERVICE } from './constants';

// const TASK_SERVICE = 'TASK';
@Module({
  imports: [RmqModule.register({ name: TASK_SERVICE })],
  providers: [TaskService],
  controllers: [TaskController],
})
export class TaskModule {}
