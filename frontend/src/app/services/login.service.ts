import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from "@angular/common/http";
import { take } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  private readonly API = environment.baseURL

  login(id)  {
    return this.http.post(`${this.API}/sessions`, id).pipe(take(1))
  }

}
