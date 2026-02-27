import { IsString } from "class-validator";

export class CreateEmployeeDto {

    @IsString()
    fullname: string;

    @IsString()
    position: string;

    @IsString()
    salary: number;

    @IsString()
    phone: string;

}
