import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getProfile(id: string): Promise<any>;
    updateProfile(id: string, updateData: any): Promise<any>;
}
