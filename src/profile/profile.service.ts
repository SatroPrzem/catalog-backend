import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

const users = [
  { id: 1, name: 'Janek', email: 'janek@gmail.com' },
  { id: 2, name: 'Adam', email: 'adam@gmail.com' },
  { id: 3, name: 'Tomasz', email: 'tomek@my.com' },
  { id: 4, name: 'Dawid', email: 'dawid@email.com' },
];

@Injectable()
export class ProfileService {
  create(createProfileDto: CreateProfileDto) {
    return 'This action adds a new profile';
  }

  findAll() {
    return `This action returns all profile: \n
    ${JSON.stringify(users, null, 2)}`;
  }

  findOne(id: number, details: string) {
    console.log(id, details);

    const user = users.find((user) => user.id === id);

    if (details === 'details') {
      return user;
    }

    return user?.name;
  }

  findOneWithDetails(id: number, mode: string) {
    console.log('yooo, co se deje', id, mode);

    if (mode === 'details') {
      return users.find((user) => user.id === id);
    }
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return `This action updates a #${id} profile`;
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
