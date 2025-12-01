import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async login(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    
    if (!user || user.password !== password) {
      throw new UnauthorizedException('Email hoặc mật khẩu không đúng');
    }

    const { password: _, ...result } = user.toObject();
    return {
      user: result,
      message: 'Đăng nhập thành công',
    };
  }

  async register(userData: any) {
    const existingUser = await this.usersService.findByEmail(userData.email);
    if (existingUser) {
      throw new UnauthorizedException('Email đã tồn tại');
    }

    const user = await this.usersService.create(userData);
    const { password, ...result } = user.toObject();
    
    return {
      user: result,
      message: 'Đăng ký thành công',
    };
  }
}
