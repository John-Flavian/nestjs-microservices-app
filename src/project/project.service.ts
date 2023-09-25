import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}
  async getProjects(userId) {
    return await this.prisma.project.findMany({
      where: {
        userId,
      },
    });
  }

  async getProjectsById(userId, projectId) {
    return await this.prisma.project.findMany({
      where: {
        userId,
        id: projectId,
      },
    });
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

  async editProject(userId, projectId, dto) {
    return await this.prisma.project.update({
      where: {
        userId,
        id: projectId,
      },
      data: {
        userId,
        ...dto,
      },
    });
  }

  async deleteProject(userId, projectId) {
    const project = await this.prisma.project.findUnique({
      where: {
        id: projectId,
      },
    });
    if (!project || project.userId !== userId)
      throw new ForbiddenException('Access to resource denied!');
    await this.prisma.project.delete({
      where: {
        id: projectId,
      },
    });
    return {
      success: true,
      message: `Project: ${project.title} with the id: ${projectId} has been deleted`,
    };
  }
}
