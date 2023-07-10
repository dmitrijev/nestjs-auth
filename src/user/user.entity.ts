import { Exclude } from 'class-transformer';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User extends BaseEntity {
  @ApiProperty({ type: 'integer', example: 1, description: 'User ID' })
  @PrimaryGeneratedColumn()
  public id!: number;

  @ApiProperty({
    type: 'string',
    example: 'email@example.com',
    description: 'User Email',
  })
  @Column({ type: 'varchar' })
  public email!: string;

  @Exclude()
  @Column({ type: 'varchar' })
  public password!: string;
}
