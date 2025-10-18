import { Profile } from '../entities/profile.entity';

export type TSavedProfile = Omit<Profile, 'password' | 'hashPassword' | 'comparePassword'>;
export type TCreateProfileResponse = Promise<TSavedProfile>;
