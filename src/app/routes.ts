import { ModificationComponent } from './modification/modification.component';
import { Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { UserCanActivateService } from './services/user-can-activate.service';
import { NoAuthCanActivateService } from './services/no-auth-can-activate.service';

export const routes: Routes = [
  {
    path: 'inscription',
    component: InscriptionComponent,
    canActivate: [NoAuthCanActivateService],
  },
  {
    path: 'menu',
    component: MenuComponent,
    canActivate: [UserCanActivateService],
  },
  {
    path: 'compte',
    component: LoginComponent,
    canActivate: [NoAuthCanActivateService],
  },
  {
    path: 'create',
    component: CreateComponent,
    canActivate: [UserCanActivateService],
  },
  {
    path: 'modification',
    component: ModificationComponent,
    canActivate: [UserCanActivateService],
  },
];
