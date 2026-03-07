import { applyDecorators, UseGuards } from "@nestjs/common"
import { Role } from "../enums/rol.enum"
import { RolesGuard } from "../roles.guard";
import { AuthGuard } from "../auth.guard";
import { Roles } from "./role.decorator";


export function Auth(role: Role) {
    return applyDecorators(Roles(role), UseGuards(AuthGuard, RolesGuard));
}