import { Injectable } from '@angular/core';
import {CanActivate} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserCanActivateService implements CanActivate{

  constructor() {}

  canActivate(): boolean {
    return localStorage.getItem('role') === 'ROLE_USER' ? true : false;
  }
}
