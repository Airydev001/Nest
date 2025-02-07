/* eslint-disable prettier/prettier */
// controller decorator
import { Controller } from '@nestjs/common';
//whatsoever coming from the request should be handled by the user controller.
@Controller('users')
export class UsersController {

}