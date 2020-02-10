import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id?;
  firstname?;
  lastname?;
  email?;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}

  getUsers() : Observable<any> {
    return this.http.get<any>('assets/users.json');

      /*.toPromise()
      .then(res => <User[]>res.data)
      .then(data => { return data; });
      */
    }

}
