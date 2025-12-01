import { Model } from 'mongoose';
import { User, UserDocument } from './entities/user.entity';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    create(userData: Partial<User>): Promise<UserDocument>;
    findByEmail(email: string): Promise<UserDocument | null>;
    findById(id: string): Promise<UserDocument>;
    update(id: string, updateData: Partial<User>): Promise<UserDocument>;
    updateAvatar(userId: string, avatarUrl: string): Promise<UserDocument>;
    updateExperience(userId: string, expGained: number): Promise<UserDocument>;
}
