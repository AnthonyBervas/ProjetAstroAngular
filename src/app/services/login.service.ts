import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: string = 'http://localhost:8080/projetAstro/api/compte';

  constructor(private http: HttpClient) {}

  public isPresent(login: string): Observable<boolean>{
    return this.http.get<boolean>(this.url + '/isPresent/' + login);
  }

  public login(login: string, password: string): Observable<any>{
    let info = btoa(login + ':' + password);
    let headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Basic ${info}`,
    });
    return this.http.get(this.url, {headers: headers})
  }

  public inscription(compte: Object): Observable<any>{
    return this.http.post(this.url + '/inscription', compte);
  }
}
