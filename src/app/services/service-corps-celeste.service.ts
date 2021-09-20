import { CorpsCeleste } from './../model/corps-celeste';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceCorpsCelesteService {
  private url: string = 'http://localhost:8080/projetAstro/api/CorpsCeleste';
  private headers: HttpHeaders | any = null;

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<CorpsCeleste[]> {
    return this.httpClient.get<CorpsCeleste[]>(this.url);
  }

  public initHeaders() {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + localStorage.getItem('token'),
    });
  }

  delete(id: number | undefined) {
    this.initHeaders();
    return this.httpClient.delete(this.url + '/' + id, {
      headers: this.headers,
    });
  }

  public get(id: number): Observable<CorpsCeleste> {
    this.initHeaders();
    return this.httpClient.get<CorpsCeleste>(this.url + '/' + id, {
      headers: this.headers,
    });
  }

  public create(corps: CorpsCeleste): Observable<CorpsCeleste> {
    this.initHeaders();
    //console.log(corps);
    const obj = {
      id: corps.id,
      type: corps.type,

      nom: corps.nom,
      nomInit: corps.nomInit,

      G: corps.G,
      GInit: corps.GInit,

      masse: corps.masse,
      masseInit: corps.masseInit,

      diametre: corps.diametre,
      diametreInit: corps.diametreInit,

      x: corps.x,
      xInit: corps.xInit,

      y: corps.y,
      yInit: corps.yInit,

      vx: corps.vx,
      vxInit: corps.vxInit,

      vy: corps.vy,
      vyInit: corps.vyInit,

      etat: corps.etat,
      etatInit: corps.etatInit,

      parent: corps.parent,
    };
    return this.httpClient.post<CorpsCeleste>(this.url, obj, {
      headers: this.headers,
    });
  }

  public update(corps: CorpsCeleste): Observable<CorpsCeleste> {
    this.initHeaders();
    return this.httpClient.put<CorpsCeleste>(this.url + '/' + corps.id, corps, {
      headers: this.headers,
    });
  }
}
