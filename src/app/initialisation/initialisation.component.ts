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
  source: string = 'http://localhost:8080/projetAstro/musiques/marmelade.mp3';
  audio = new Audio();
  h: string = window.innerHeight * 0.09 + 'px';
  c: string = window.innerHeight * 0.9 + 'px';
  f: string = window.innerHeight * 0.05 + 'px';
  iw: string = window.innerWidth * 0.7 + 'px';
  ih: string = window.innerHeight * 0.7 + 'px';
  ml: string = window.innerWidth * 0.15 + 'px';
  t: string = window.innerHeight * 1.1 + 'px';

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
    this.calc = this.fb.control('');
    this.form = this.fb.group({
      timestep: this.timestep,
      calc: this.calc,
    });
  }

  ngOnInit(): void {
    this.attente = false;
    console.log(this.h);
  }

  playAudio() {
    this.audio.src = this.source;
    this.audio.load();
    this.audio.loop;
    this.audio.play();
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
    this.viewsService
      .lancerSimu(this.timestep.value, simple)
      .subscribe((res) => {
        this.router.navigate(['/result']);
        this.audio.pause();
      });
    //this.playAudio();
    window.setInterval(() => this.changerImage(), 2000);
    //let interval = setInterval(this.changerImage(), 2000);
  }

  musique() {
    console.log(this.source);
    this.audio.pause;
    this.audio.src = this.source;
    this.audio.play;
  }
}
