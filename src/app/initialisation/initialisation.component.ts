import { ViewsService } from './../services/views.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initialisation',
  templateUrl: './initialisation.component.html',
  styleUrls: ['./initialisation.component.css'],
})
export class InitialisationComponent implements OnInit {
  form: FormGroup;
  timestep: FormControl;
  calc: FormControl;
  param: string = '';
  constructor(
    private fb: FormBuilder,
    private ar: ActivatedRoute,
    private router: Router,
    private viewsService: ViewsService
  ) {
    this.ar.queryParams.subscribe((params) => {
      if (params.source) {
        this.param = params.source;
      }
    });
    this.timestep = this.fb.control('', [
      Validators.required,
      Validators.min(1),
    ]);
    this.calc = this.fb.control('', [Validators.required]);
    this.form = this.fb.group({
      timestep: this.timestep,
      calc: this.calc,
    });
  }

  ngOnInit(): void {}

  lancerSimu() {
    let simple: boolean = false;
    if (this.calc) {
      simple = true;
    }
    this.viewsService.lancerSimu(this.timestep.value, simple);
  }
}
