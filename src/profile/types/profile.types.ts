import { DeleteResult, ObjectId } from 'typeorm';
import { Profile } from '../entities/profile.entity';

export interface IBaseProfile {
  id: ObjectId;
  name: string;
  email: string;
}

export type TCreatedProfile = Omit<Profile, 'password' | 'hashPassword' | 'comparePassword'>;

export type TCreateProfileResponse = Promise<TCreatedProfile>;

export type TFindAllResponse = Promise<Array<TCreatedProfile>>;

export type TFindOneResponse = Promise<Profile | IBaseProfile>;

export type TUpdateResponse = Promise<
  Omit<Profile, 'password' | 'hashPassword' | 'comparePassword'>
>;

export type TDeleteResponse = Promise<DeleteResult>;
