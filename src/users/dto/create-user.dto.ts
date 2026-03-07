import { IsEnum, IsString, MinLength } from "class-validator";
import { Role } from "src/auth/enums/rol.enum";

export class CreateUserDto {

    @IsString()
    name: string;

    @IsString()
    email: string;

    @IsString()
    @MinLength(3)
    password: string;

    @IsEnum(Role)
    rol: Role;

}
