import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';
import { EditUserDto } from './dto';
import { JwtGuard } from 'src/auth/guard';
import { MessagePattern } from '@nestjs/microservices';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('user')
  getUser(@GetUser() user: User) {
    return user;
  }

  @Patch('user')
  editUser(@GetUser('id') userId: number, @Body() dto: EditUserDto) {
    return this.userService.editUser(userId, dto);
  }

  @MessagePattern({ cmd: 'Task' })
  handleTaskMessage(dto: any) {
    // Process the received message
    console.log('Received message:', dto);
    // You can now process the message further, save it to a database, etc.
  }
}
