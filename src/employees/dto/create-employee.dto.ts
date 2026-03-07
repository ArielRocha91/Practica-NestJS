import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateEmployeeDto {

    @ApiProperty({
        description: 'Nombre completo del empleado',
        example: 'Juan Pérez'
    })
    @IsString()
    fullname: string;

    @ApiProperty({
        description: 'Puesto del empleado',
        example: 'Gerente'
    })
    @IsString()
    position: string;

    @ApiProperty({
        description: 'Salario del empleado',
        example: '50000'
    })
    @IsString()
    salary: number;

    @ApiProperty({
        description: 'Número de teléfono del empleado',
        example: '1234567890'
    })
    @IsString()
    phone: string;

}
