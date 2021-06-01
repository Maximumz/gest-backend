export class CreateUserDto {
  id: number;
  name: string;
  email: string;
  username: string;
  passhash: string;
  notables: [];
}
