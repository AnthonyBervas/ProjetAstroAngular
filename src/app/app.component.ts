import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ProjetAstroAngular';
  h: string = window.innerHeight * 0.09 + 'px';
  c: string = window.innerHeight * 0.9 + 'px';
  f: string = window.innerHeight * 0.05 + 'px';

  constructor(private router: Router) {}

  logout() {
    localStorage.clear();
    this.router.navigate(['/compte']);
  }

  get log(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
}
