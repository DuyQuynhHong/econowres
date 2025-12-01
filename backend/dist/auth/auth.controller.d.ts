import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(loginData: {
        email: string;
        password: string;
    }): Promise<{
        user: any;
        message: string;
    }>;
    register(userData: any): Promise<{
        user: any;
        message: string;
    }>;
}
