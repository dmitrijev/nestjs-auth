import {
  ClassSerializerInterceptor,
  Controller,
  UseInterceptors,
  Post,
  Body,
  Inject,
} from '@nestjs/common';
import { User } from './user.entity';
import { AuthService } from '../auth/auth.service';
import { RegisterDto } from '../auth/auth.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('jwt')
@Controller('user')
export class UserController {
  @Inject(AuthService)
  private readonly service: AuthService;

  @Post()
  @ApiOperation({ summary: 'User Registration Endpoint' })
  @ApiResponse({
    status: 201,
    description: 'User Successfully Registered',
    type: User,
  })
  @ApiResponse({ status: 409, description: 'User Already Exists' })
  @ApiResponse({ status: 400, description: 'Input Validation Error' })
  @UseInterceptors(ClassSerializerInterceptor)
  private register(@Body() body: RegisterDto): Promise<User | never> {
    return this.service.register(body);
  }
}
