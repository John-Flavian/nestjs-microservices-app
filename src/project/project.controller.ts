import { Controller, Get, UseGuards } from '@nestjs/common';
import { ProjectService } from './project.service';
import { GetUser } from 'src/auth/decorator';
import { User } from '@prisma/client';
import { JwtGuard } from 'src/auth/guard';

@UseGuards(JwtGuard)
@Controller('projects')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @Get()
  getProjects(@GetUser() user: User) {
    return `Projects gotten:, ${user.id}`;
  }
}
