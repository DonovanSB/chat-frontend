export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  role: string;
  username: string;
}

export interface CreateUser extends Omit<User, '_id'> {
  password: string;
}
