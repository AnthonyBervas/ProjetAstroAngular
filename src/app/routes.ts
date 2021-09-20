import { Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';

export const routes: Routes = [
  {
    path: 'inscription',
    component: InscriptionComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'compte',
    component: LoginComponent,
  },
  {
    path: 'create',
    component: CreateComponent,
  },
];
