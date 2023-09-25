import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { EditProjectDto, ProjectDto } from './dto';

@UseGuards(JwtGuard)
@Controller('projects')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @Get()
  getProjects(@GetUser('id') userId: number) {
    return this.projectService.getProjects(userId);
  }

  @Get(':id')
  getProjectsById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) projectId: number,
  ) {
    return this.projectService.getProjectsById(userId, projectId);
  }

  @Post()
  createProject(@GetUser('id') userId: number, @Body() dto: ProjectDto) {
    return this.projectService.createProject(userId, dto);
  }

  @Patch(':id')
  editProject(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) projectId: number,
    @Body() dto: EditProjectDto,
  ) {
    return this.projectService.editProject(userId, projectId, dto);
  }

  @Delete(':id')
  deleteProject(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) projectId: number,
  ) {
    return this.projectService.deleteProject(userId, projectId);
  }
}
