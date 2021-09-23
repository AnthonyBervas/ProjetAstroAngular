import { ViewsService } from './../services/views.service';
import { ServiceCorpsCelesteService } from './../services/service-corps-celeste.service';
import { Etoile } from './../model/etoile';
import { FormBuilder, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Planete} from "../model/planete";
import {CorpsCeleste} from "../model/corps-celeste";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  nom: FormControl;
  masse: FormControl;
  diametre: FormControl;
  nomAuto: string;
  masseAuto: number;
  diametreAuto: number;
  xAuto: number;
  yAuto: number;
  vxAuto: number;
  vyAuto: number;
  typeAuto: string;
  parentAuto: Etoile;
  idAuto: number;
  systemAuto: Planete[] = [];
  param: string = '';
  h: string = window.innerHeight * 0.09 + 'px';
  c: string = window.innerHeight * 0.9 + 'px';
  f: string = window.innerHeight * 0.05 + 'px';
  t: string = window.innerHeight * 1.1 + 'px';
  constructor(
    private viewsService: ViewsService,
    private fb: FormBuilder,
    private ar: ActivatedRoute,
    private router: Router,
    private corpsCelesteService: ServiceCorpsCelesteService,
  ) {
    this.ar.queryParams.subscribe((params) => {
      if (params.source) {
        this.param = params.source;
      }
    });
    this.nom = this.fb.control('', [Validators.required]);
    this.masse = this.fb.control('', [Validators.required, Validators.min(1)]);
    this.diametre = this.fb.control('', [
      Validators.required,
      Validators.min(1),
    ]);
    this.form = this.fb.group({
      nom: this.nom,
      masse: this.masse,
      diametre: this.diametre,
    });
  }

  ngOnInit(): void {}

  createSystem() {
    let etoile: Etoile = new Etoile(
      this.nom.value,
      this.masse.value,
      this.diametre.value
    );
    console.log(etoile);
    this.viewsService.createSystem(etoile).subscribe((res) => {
      this.router.navigate(['/modification']);
    });
  }

  createSolarSystem() {
    let soleil: Etoile = new Etoile(
      this.nomAuto = 'Soleil',
      this.masseAuto = 1.988e30,
      this.diametreAuto = 1.393e6,
    );

    this.viewsService.createSystem(soleil).subscribe((variable)=>{
      this.corpsCelesteService.get(1).subscribe((db)=>{

        soleil = db;

        let mercure: Planete = new Planete(
          this.nomAuto = 'Mercure',
          this.typeAuto = 'Planete',
          this.masseAuto = 3.285e23,
          this.diametreAuto = 4879.4,
          this.xAuto = 0,
          this.yAuto = 58e6,
          this.vxAuto = 47,
          this.vyAuto = 0,
          this.parentAuto = soleil
        );
        let venus: Planete = new Planete(
          this.nomAuto = 'Vénus',
          this.typeAuto = 'Planete',
          this.masseAuto = 4.867e24,
          this.diametreAuto = 12104,
          this.xAuto = 0,
          this.yAuto = 108.208e6,
          this.vxAuto = 35,
          this.vyAuto = 0,
          this.parentAuto = soleil
        );
        let terre: Planete = new Planete(
          this.nomAuto = 'Terre',
          this.typeAuto = 'Planete',
          this.masseAuto = 5.972e24,
          this.diametreAuto = 12742,
          this.xAuto = 0,
          this.yAuto = 149.598e6,
          this.vxAuto = 29.8,
          this.vyAuto = 0,
          this.parentAuto = soleil
        );
        let mars: Planete = new Planete(
          this.nomAuto = 'Mars',
          this.typeAuto = 'Planete',
          this.masseAuto = 6.39e23,
          this.diametreAuto = 6779,
          this.xAuto = 0,
          this.yAuto = 227.939e6,
          this.vxAuto = 24.08,
          this.vyAuto = 0,
          this.parentAuto = soleil
        );
        let jupiter: Planete = new Planete(
          this.nomAuto = 'Jupiter',
          this.typeAuto = 'Planete',
          this.masseAuto = 1.898e27,
          this.diametreAuto = 139820,
          this.xAuto = 0,
          this.yAuto = 778.6e6,
          this.vxAuto = 13.058,
          this.vyAuto = 0,
          this.parentAuto = soleil
        );
        let saturne: Planete = new Planete(
          this.nomAuto = 'Saturne',
          this.typeAuto = 'Planete',
          this.masseAuto = 5.683e26,
          this.diametreAuto = 116460,
          this.xAuto = 0,
          this.yAuto = 1.43e9,
          this.vxAuto = 9.641,
          this.vyAuto = 0,
          this.parentAuto = soleil
        );
        let uranus: Planete = new Planete(
          this.nomAuto = 'Uranus',
          this.typeAuto = 'Planete',
          this.masseAuto = 8.681e25,
          this.diametreAuto = 50724,
          this.xAuto = 0,
          this.yAuto = 2.87e9,
          this.vxAuto = 6.486,
          this.vyAuto = 0,
          this.parentAuto = soleil
        );
        let neptune: Planete = new Planete(
          this.nomAuto = 'Neptune',
          this.typeAuto = 'Planete',
          this.masseAuto = 1.024e26,
          this.diametreAuto = 49244,
          this.xAuto = 0,
          this.yAuto = 4.5e9,
          this.vxAuto = 5.432,
          this.vyAuto = 0,
          this.parentAuto = soleil
        );
        this.systemAuto.push(mercure,venus,terre,mars,jupiter,saturne,uranus,neptune);
        let i = 0;
        this.systemAuto.forEach((element)=>{
          i++;
          this.corpsCelesteService.create(element).subscribe((sub)=>{
            if(i==8){
              setTimeout (() => {
                this.router.navigate(['/modification']);
              }, 1000);
            }
          })
        });
      });
    });



  }
}
