import {
  Body,
  Controller,
  Inject,
  Post,
  Get,
  UseGuards,
  Req,
} from '@nestjs/common';
import { User } from '../user/user.entity';
import { LoginDto } from './auth.dto';
import { JwtAuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { Request } from 'express';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('jwt')
@Controller('auth')
export class AuthController {
  @Inject(AuthService)
  private readonly service: AuthService;

  @Post('login')
  @ApiOperation({ summary: 'User Authentication Endpoint' })
  @ApiResponse({ status: 200, description: 'User Logs In', type: User })
  @ApiResponse({ status: 400, description: 'Input Validation Error' })
  @ApiResponse({ status: 404, description: 'User Not Found' })
  private login(@Body() body: LoginDto): Promise<string | never> {
    return this.service.login(body);
  }

  @Get('me')
  @ApiBearerAuth('jwt')
  @ApiOperation({ summary: 'User Information Fetching Endpoint' })
  @ApiResponse({ status: 200, description: 'User Info', type: User })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @UseGuards(JwtAuthGuard)
  private me(@Req() { user }: Request): Promise<User | never> {
    return this.service.info(<User>user);
  }
}
