// dto/update-profile.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateProfileDto } from './create-profile.dto';
import { IsOptional, IsString, IsEmail, IsStrongPassword } from 'class-validator';

export class UpdateProfileDto extends PartialType(CreateProfileDto) {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail({}, { message: 'email is not valid' })
  email?: string;

  @IsOptional()
  @IsString()
  @IsStrongPassword(
    {
      minLength: 8,
      minNumbers: 1,
      minSymbols: 1,
      minUppercase: 1,
      minLowercase: 1,
    },
    {
      message:
        'password is not strong enough: minLength: 8, minNumbers: 1, minSymbols: 1, minUppercase: 1, minLowercase: 1',
    },
  )
  password?: string;
}
