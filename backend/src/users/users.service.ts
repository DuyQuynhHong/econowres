import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}

  async create(userData: Partial<User>): Promise<UserDocument> {
    const user = new this.userModel(userData);
    return user.save();
  }

  async findByEmail(email: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ email }).exec();
  }

  async findById(id: string): Promise<UserDocument> {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async update(id: string, updateData: Partial<User>): Promise<UserDocument> {
    const user = await this.userModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async updateAvatar(userId: string, avatarUrl: string): Promise<UserDocument> {
    return this.update(userId, { avatar: avatarUrl });
  }

  async updateExperience(userId: string, expGained: number): Promise<UserDocument> {
    const user = await this.findById(userId);
    let newExp = user.experience + expGained;
    let newLevel = user.level;
    let maxExp = user.maxExperience;

    while (newExp >= maxExp) {
      newExp -= maxExp;
      newLevel += 1;
      maxExp = Math.floor(maxExp * 1.5);
    }

    return this.update(userId, {
      experience: newExp,
      level: newLevel,
      maxExperience: maxExp,
    });
  }
}
