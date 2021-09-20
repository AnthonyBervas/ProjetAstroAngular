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
      nomInit: e.nom,

      G: e.G,
      GInit: e.G,

      masse: e.masse,
      masseInit: e.masse,

      diametre: e.diametre,
      diametreInit: e.diametre,

      x: e.x,
      xInit: e.x,

      y: e.y,
      yInit: e.y,

      vx: e.vx,
      vxInit: e.vx,

      vy: e.vy,
      vyInit: e.vy,

      etat: e.etat,
      etatInit: e.etat,
    };
    return this.httpClient.post<CorpsCeleste>(this.url + '/createSystem', obj, {
      headers: this.headers,
    });
  }

  public lancerSimu(timestep: number, calc: boolean) {
    return this.httpClient.post(this.url + '/lancerSimu', {
      headers: this.headers,
    });
  }
}
