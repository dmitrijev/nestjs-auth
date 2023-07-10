import { Trim } from 'class-sanitizer';
import { IsEmail, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({
    type: 'string',
    example: 'email@example.com',
    description: 'User Email',
  })
  @Trim()
  @IsEmail()
  public readonly email: string;

  @ApiProperty({
    type: 'string',
    example: 'qwerty12345',
    description: 'User Password',
  })
  @IsString()
  @MinLength(8)
  public readonly password: string;
}

export class LoginDto {
  @ApiProperty({
    type: 'string',
    example: 'email@example.com',
    description: 'User Email',
  })
  @Trim()
  @IsEmail()
  public readonly email: string;

  @ApiProperty({
    type: 'string',
    example: 'qwerty12345',
    description: 'User Password',
  })
  @Trim()
  @IsString()
  public readonly password: string;
}
