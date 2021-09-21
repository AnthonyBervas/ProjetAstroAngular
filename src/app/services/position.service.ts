import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  private url: string = 'http://localhost:8080/projetAstro/api/position';

  constructor(private http: HttpClient) {}

  public getPosition(): Observable<any>{
    return this.http.get(this.url+'/order');
  }
}
