import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';
import { MongoRepository } from 'typeorm';
import { TCreateProfileResponse, TCreatedProfile, TFindAllResponse } from './types/profile.types';
import { ObjectId } from 'mongodb';

@Injectable()
export class ProfileService {
  constructor(@InjectRepository(Profile) private profileRepository: MongoRepository<Profile>) {}

  async create(createProfileDto: CreateProfileDto): TCreateProfileResponse {
    const existst = await this.profileRepository.findOne({
      where: { email: createProfileDto.email },
    });

    if (existst) {
      throw new ConflictException('Email already exists');
    }

    const profile = this.profileRepository.create(createProfileDto);

    const savedProfile = await this.profileRepository.save(profile);
    const { password, ...profileWithoutPassword } = savedProfile;

    return profileWithoutPassword;
  }

  async findAll(): TFindAllResponse {
    const profiles = await this.profileRepository.find();
    return profiles.map(({ comparePassword, hashPassword, password, ...restProfileProps }) => ({
      ...restProfileProps,
    }));
  }

  async findOne(id: string, include: boolean) {
    const profile = await this.profileRepository.findOne({
      where: { _id: new ObjectId(id) },
    });

    if (!profile) throw new NotFoundException('Profile not found');

    if (!include)
      return {
        id: profile.id,
        name: profile.name,
        email: profile.email,
      };

    return profile;
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return `This action updates a #${id} profile`;
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
