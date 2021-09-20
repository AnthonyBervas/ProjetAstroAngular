import { ModificationComponent } from './modification/modification.component';
import { Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
<<<<<<< HEAD
import { UserCanActivateService } from './services/user-can-activate.service';
import { NoAuthCanActivateService } from './services/no-auth-can-activate.service';
=======
import {UserCanActivateService} from "./services/user-can-activate.service";
import {NoAuthCanActivateService} from "./services/no-auth-can-activate.service";
>>>>>>> master

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
    path: 'Modification',
    component: ModificationComponent,
    canActivate: [UserCanActivateService],
  },
];
