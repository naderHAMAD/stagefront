import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL="http://localhost:8090/workflow/users";
  constructor(private httpClient:HttpClient) { }
  getUserByUsername(username:String):Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/${username}`);
  }
}
