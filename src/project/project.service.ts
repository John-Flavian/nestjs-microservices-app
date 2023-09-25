import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}
  getProjects(userId) {
    return 'projects gotten';
  }

  getProjectsById(userId, projectId) {
    return 'project gotten by id';
  }

  async createProject(userId, dto) {
    const project = await this.prisma.project.create({
      data: {
        userId,
        ...dto,
      },
    });

    return project;
  }

  editProject(userId, projectId) {
    return 'project Updated';
  }

  deleteProject(userId, projectId) {
    return 'project deleted';
  }
}
