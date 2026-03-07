import { IsEmail, IsEnum, IsString, MinLength } from "class-validator";
import { Role } from "../enums/rol.enum";

export class RegisterDto {

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsEnum(Role)
  rol: Role;
    
}