import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  h: string = window.innerHeight * 0.09 + 'px';
  c: string = window.innerHeight * 0.9 + 'px';
  f: string = window.innerHeight * 0.05 + 'px';
  constructor(private router: Router) {}

  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  get log(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  ngOnInit(): void {}
}
