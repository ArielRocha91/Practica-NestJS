import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import * as bcryptjs from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor( 
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ) {}

    async register({name, email, password}: RegisterDto) {
        const user = await this.usersService.findOneByEmail(email);

        if (user) {
            throw new NotFoundException('El usuario ya existe');
        }

        const hashPassword = await bcryptjs.hash(password, 10);

        await this.usersService.create({
            name,
            email,
            password: hashPassword,
            rol: 'user'
        });
        return{
            name,
            email
        }
    }

    async login(email, password) {
        const user = await this.usersService.findOneByEmail(email);

        if (!user) {
            throw new NotFoundException('El usuario no existe');
        }
        const isPasswordValid = await bcryptjs.compare(password, user.password);
        if (!isPasswordValid) {
            throw new NotFoundException('Contraseña incorrecta');
        }

        const payload = { email: user.email };

        const token = await this.jwtService.signAsync(payload);

        return {
            name: user.name,
            email: user.email,
            rol: user.rol,
            token
        };
    }

}
