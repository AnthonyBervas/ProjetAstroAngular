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
  attente: boolean = false;
  cptImage: number = 1;
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

  ngOnInit(): void {
    this.attente = false;
  }

  playAudio() {
    let audio = new Audio();
    audio.src = 'http://localhost:8080/projetAstro/musiques/marmelade.mp3';
    audio.load();
    audio.loop;
    audio.play();
  }

  changerImage() {
    this.cptImage++;
    if (this.cptImage == 12) {
      this.cptImage = 1;
    }
    return 1;
  }

  lancerSimu() {
    let simple: boolean = false;
    if (this.calc) {
      simple = true;
    }
    this.attente = true;
    this.viewsService.lancerSimu(this.timestep.value, simple).subscribe();
    this.playAudio();
    window.setInterval(() => this.changerImage(), 2000);
    //let interval = setInterval(this.changerImage(), 2000);
  }
}
