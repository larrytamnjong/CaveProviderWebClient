import { Observable } from 'rxjs';


export interface User {
  FamilyName: string;
  GivenName: string;
  Email: string;
  PhoneNumber: string;
  UserName: string;
  Password: string;
}

export interface Login{
  userName: string;
  password: string;
}


export abstract class UserData {
  abstract getCurrentUser(): Observable<User>;
}
