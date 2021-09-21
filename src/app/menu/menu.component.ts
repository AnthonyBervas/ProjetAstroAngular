import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(private router: Router) {}

  logout() {
    localStorage.clear();
    this.router.navigate(['/compte']);
  }

  get log(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  ngOnInit(): void {}
}
