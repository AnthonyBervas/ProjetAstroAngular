import {Routes} from "@angular/router";
import {InscriptionComponent} from "./inscription/inscription.component";
import {MenuComponent} from "./menu/menu.component";
import {LoginComponent} from "./login/login.component";

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
  }
]
