import { IsString } from 'class-validator';

export class ProjectDto {
  @IsString()
  title: string;

  @IsString()
  description: string;
}
