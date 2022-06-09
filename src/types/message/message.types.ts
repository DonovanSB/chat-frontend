import { User } from '../user/user.types';
export interface Message {
  _id: string;
  user: User;
  message: string;
  room: string;
  createdAt: Date;
}
