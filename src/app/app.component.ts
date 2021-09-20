import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjetAstroAngular';

  constructor(private router: Router) {}

  logout(){
    localStorage.clear();
    this.router.navigate(['/compte'])
  }

  get log(): boolean{
    return localStorage.getItem('token') ? true : false;
  }

}
