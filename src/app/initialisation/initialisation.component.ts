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
  styleUrls: ['./initialisation.component.css']
})
export class InitialisationComponent implements OnInit {
  form:FormGroup;
  timestep:FormControl;
  oui:FormControl;
  non:FormControl;
  param: string = '';
  constructor(private fb: FormBuilder, private ar: ActivatedRoute, private router: Router) {this.ar.queryParams.subscribe((params) => {
    if (params.source) {
      this.param = params.source;
    }
  });
  this.timestep = this.fb.control('',[
    Validators.required,
    Validators.min(1)
  ]);
  this.oui = this.fb.control('',[
    Validators.required,
  ]);
  this.non = this.fb.control('',[
    Validators.required,
  ]);
  this.form = this.fb.group({
      timestep: this.timestep,
      oui: this.oui,
      non: this.non,
    }
  )}

  ngOnInit(): void {
  }

  lancerSimu(){

  }
}
