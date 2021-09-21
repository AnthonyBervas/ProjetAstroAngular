import { Etoile } from './../model/etoile';
import { Satellite } from './../model/satellite';
import { Planete } from './../model/planete';
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
    this.initHeaders();
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
    console.log(corps);
    const obj = {
      //id: corps.id,
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
    if (corps.type == 'Planete') {
      return this.httpClient.post<Planete>(this.url, obj, {
        headers: this.headers,
      });
    } else if (corps.type == 'Satellite') {
      return this.httpClient.post<Satellite>(this.url, obj, {
        headers: this.headers,
      });
    } else if (corps.type == 'Etoile') {
      return this.httpClient.post<Etoile>(this.url, obj, {
        headers: this.headers,
      });
    } else {
      return this.httpClient.post<CorpsCeleste>(this.url, obj, {
        headers: this.headers,
      });
    }
  }

  public update(corps: CorpsCeleste): Observable<CorpsCeleste> {
    this.initHeaders();
    console.log('dans update');
    if (corps.type == 'Planete') {
      return this.httpClient.put<Planete>(this.url + '/' + corps.id, corps, {
        headers: this.headers,
      });
    } else if (corps.type == 'Satellite') {
      return this.httpClient.put<Satellite>(this.url + '/' + corps.id, corps, {
        headers: this.headers,
      });
    } else if (corps.type == 'Etoile') {
      return this.httpClient.put<Etoile>(this.url + '/' + corps.id, corps, {
        headers: this.headers,
      });
    } else {
      return this.httpClient.put<CorpsCeleste>(
        this.url + '/' + corps.id,
        corps,
        {
          headers: this.headers,
        }
      );
    }
    // return this.httpClient.put<CorpsCeleste>(this.url + '/' + corps.id, corps, {
    //   headers: this.headers,
    // });
  }
}
