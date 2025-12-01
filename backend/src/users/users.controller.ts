import {
  Controller,
  Get,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('profile/:id')
  async getProfile(@Param('id') id: string) {
    const user = await this.usersService.findById(id);
    const { password, ...result } = user.toObject();
    return result;
  }

  @Put('profile/:id')
  async updateProfile(@Param('id') id: string, @Body() updateData: any) {
    const user = await this.usersService.update(id, updateData);
    const { password, ...result } = user.toObject();
    return result;
  }
}
