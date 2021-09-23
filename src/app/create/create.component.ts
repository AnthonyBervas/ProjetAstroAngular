import { ViewsService } from './../services/views.service';
import { ServiceCorpsCelesteService } from './../services/service-corps-celeste.service';
import { Etoile } from './../model/etoile';
import { FormBuilder, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  param: string = '';
  h: string = window.innerHeight * 0.05 + 'px';
  c: string = window.innerHeight * 0.9 + 'px';
  f: string = window.innerHeight * 0.05 + 'px';
  t: string = window.innerHeight * 1.1 + 'px';
  constructor(
    private viewsService: ViewsService,
    private fb: FormBuilder,
    private ar: ActivatedRoute,
    private router: Router
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
}
