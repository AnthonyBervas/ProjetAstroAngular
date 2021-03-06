import { Satellite } from './../model/satellite';
import { Planete } from './../model/planete';
import { CorpsCeleste } from './../model/corps-celeste';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServiceCorpsCelesteService } from '../services/service-corps-celeste.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrls: ['./modification.component.css'],
})
export class ModificationComponent implements OnInit {
  h: string = window.innerHeight * 0.09 + 'px';
  c: string = window.innerHeight * 1.5 + 'px';
  f: string = window.innerHeight * 0.05 + 'px';

  system: CorpsCeleste[] = [];
  corps: CorpsCeleste = new CorpsCeleste();

  addFormSat: boolean = false;
  addFormPlan: boolean = false;
  updateFormSat: boolean = false;
  updateFormPlan: boolean = false;
  updateFormEtoile: boolean = false;
  type: string = '';
  idParent: number = 0;

  @Output()
  deleteEvent: EventEmitter<string> = new EventEmitter();

  constructor(
    private ar: ActivatedRoute,
    private corpsCelesteService: ServiceCorpsCelesteService
  ) {}

  list() {
    this.corpsCelesteService.getAll().subscribe((res) => {
      console.log(res);
      this.system = res;
      console.log(this.system);
    });
  }

  ngOnInit(): void {
    this.list();
  }

  delete(id: number) {
    this.corpsCelesteService.delete(id).subscribe((res) => {
      this.deleteEvent.emit();
      this.hideForms();
      this.list();
    });
  }

  hideForms() {
    this.addFormSat = false;
    this.addFormPlan = false;
    this.updateFormSat = false;
    this.updateFormPlan = false;
    this.updateFormEtoile = false;
  }

  save() {
    console.log(this.corps);
    if (this.corps.id) {
      console.log('dans if');
      this.corpsCelesteService.update(this.corps).subscribe((res) => {
        console.log('apres update');
        this.hideForms();
        this.list();
        this.corps = new CorpsCeleste();
        this.c = window.innerHeight * 0.9 + 'px';
      });
    } else {
      console.log('create');
      this.corpsCelesteService.create(this.corps).subscribe((res) => {
        this.hideForms();
        this.list();
        this.corps = new CorpsCeleste();
        this.c = window.innerHeight * 0.9 + 'px';
      });
    }
  }

  updateCorps(id: number) {
    this.corpsCelesteService.get(id).subscribe((res) => {
      this.corps = res;
      this.hideForms();
      if (this.corps.type == 'Satellite') {
        this.updateFormSat = true;
      }
      if (this.corps.type == 'Etoile') {
        this.updateFormEtoile = true;
      }

      if (this.corps.type == 'Planete') {
        this.updateFormPlan = true;
      }
      this.c = window.innerHeight * 1.2 + 'px';
    });
  }

  // sat_update_nom.value = nom;
  // sat_update_masse.value = parseInt(masse);
  // sat_update_diametre.value = parseInt(diametre);
  // sat_update_x.value = parseInt(x);
  // sat_update_y.value = parseInt(y);
  // sat_update_vx.value = parseInt(vx);
  // sat_update_vy.value = parseInt(vy);
  // sat_update_id_plan.value = id;
  // sat_update_parent_id = parent_id;
  addSat(parent: CorpsCeleste) {
    this.c = window.innerHeight * 1.2 + 'px';
    this.corps = new CorpsCeleste();
    this.corps = new Satellite();
    this.hideForms();
    this.addFormSat = true;
    this.corps.type = 'Satellite';
    this.corps.parent = parent;
  }

  addPlan() {
    this.c = window.innerHeight * 1.2 + 'px';
    this.hideForms();
    this.corps = new Planete();
    this.addFormPlan = true;
    this.corps.type = 'Planete';
    this.corpsCelesteService.get(1).subscribe((res) => {
      this.corps.parent = res;
    });
  }
}
