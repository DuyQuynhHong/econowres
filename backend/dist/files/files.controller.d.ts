import { UsersService } from '../users/users.service';
export declare class FilesController {
    private usersService;
    constructor(usersService: UsersService);
    uploadAvatar(file: Express.Multer.File, userId: string): Promise<{
        url: string;
        user: {
            id: import("mongoose").Types.ObjectId;
            avatar: string;
        };
    }>;
}
