import { IsArray, IsNumber, IsString } from 'class-validator';

export class TaskDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  projectId: number;

  @IsArray()
  usersId: number[];
}
