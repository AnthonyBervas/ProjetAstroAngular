import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { MenuComponent } from './menu/menu.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import { CreateComponent } from './create/create.component';
import { InitialisationComponent } from './initialisation/initialisation.component';
import { ModificationComponent } from './modification/modification.component';
import { ResultComponent } from './result/result.component';
import { WaitComponent } from './wait/wait.component';
import {CommonModule} from "@angular/common";
import {PlotlyModule} from "angular-plotly.js";
import * as PlotlyJS from 'plotly.js-dist-min';

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InscriptionComponent,
    MenuComponent,
    CreateComponent,
    InitialisationComponent,
    ModificationComponent,
    ResultComponent,
    WaitComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    CommonModule,
    PlotlyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
