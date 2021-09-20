import { ServiceCorpsCelesteService } from './service-corps-celeste.service';
import { Etoile } from './../model/etoile';
import { CorpsCeleste } from './../model/corps-celeste';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ViewsService {
  private url: string = 'http://localhost:8080/projetAstro/api/views';
  private headers: HttpHeaders | any = null;

  constructor(
    private httpClient: HttpClient,
    private ccService: ServiceCorpsCelesteService
  ) {}

  public initHeaders() {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + localStorage.getItem('token'),
    });
  }

  public createSystem(e: Etoile): Observable<CorpsCeleste> {
    this.initHeaders();
    const obj = {
      type: e.type,

      nom: e.nom,
      nomInit: e.nomInit,

      G: e.G,
      GInit: e.GInit,

      masse: e.masse,
      masseInit: e.masseInit,

      diametre: e.diametre,
      diametreInit: e.diametreInit,

      x: e.x,
      xInit: e.xInit,

      y: e.y,
      yInit: e.yInit,

      vx: e.vx,
      vxInit: e.vxInit,

      vy: e.vy,
      vyInit: e.vyInit,

      etat: e.etat,
      etatInit: e.etatInit,
    };
    return this.httpClient.post<CorpsCeleste>(this.url + '/createSystem', obj, {
      headers: this.headers,
    });
  }

  public addPlanet() {}
}
