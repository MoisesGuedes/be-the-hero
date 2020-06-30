import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { take } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})


export class ApiService {

  headers = new HttpHeaders({
    Authorization: localStorage.getItem('ongId')
  })


  constructor(private http: HttpClient) { }

  private readonly API = environment.baseURL


  createOng(ong) {
    return this.http.post(`${this.API}/ongs`, ong).pipe(take(1))
  }

  getIncidentsByOng() {
    return this.http.get(`${this.API}/profile`, {headers:this.headers}).pipe(take(1))
  }

  deleteIncident(id) {
    return this.http.delete(`${this.API}/incidents/${id}`, {headers: this.headers}).pipe(take(1))
  }

  createIncident(incident){
    return this.http.post(`${this.API}/incidents`, incident, {headers:this.headers}).pipe(take(1))
  }

}
