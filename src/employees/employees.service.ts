import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EmployeesService {

  constructor(
    @InjectRepository(Employee) private employeeRepository: Repository<Employee>
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    const employee  = this.employeeRepository.create(createEmployeeDto);
    return this.employeeRepository.save(employee);
  }

  async findAll() {
    return await this.employeeRepository.find();
  }

  async findOne(id: number) {
    const employee = await this.employeeRepository.findOneBy({ id });
    if (!employee) {
      throw new NotFoundException(`Empleado con id ${id} no encontrado`);
    }
    return employee;
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    const employee = await this.employeeRepository.update(id, updateEmployeeDto);
    if (employee.affected === 0) {
      throw new NotFoundException(`Empleado con id ${id} no encontrado`);
    }
    return this.findOne(id);
  }

  async remove(id: number) {
    const employee = await this.employeeRepository.softDelete(id);
    if (employee.affected === 0) {
      throw new NotFoundException(`Empleado con id ${id} no encontrado`);
    }
    return `Empleado con id ${id} eliminado`;
  }
}
