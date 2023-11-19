import { type User as RawUser } from '@prisma/client';
import { User } from '../../../../domain/entitis/task/User';

export class PrismaUserMapper {
    static toPrisma (user: User): RawUser {
        return {
            id: user.id,
            fullname: user.fullname,
            email: user.email,
            document: user.document,
            role: user.role === 'admin' ? 'admin' : 'user',
        };
    };

    static toEntity (user: RawUser): User {
        const userEntity = new User({
            fullname: user.fullname,
            document: user.document,
            email: user.email,
            role:  user.role === 'admin' ? 'admin' : 'user',
        });

        return userEntity;
    }
}
