import { UsersService } from '../users/users.service';
export declare class AuthService {
    private usersService;
    constructor(usersService: UsersService);
    login(email: string, password: string): Promise<{
        user: any;
        message: string;
    }>;
    register(userData: any): Promise<{
        user: any;
        message: string;
    }>;
}
