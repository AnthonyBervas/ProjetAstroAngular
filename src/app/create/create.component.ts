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
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form:FormGroup;
  nom:FormControl;
  masse:FormControl;
  diametre:FormControl;
  param: string = '';
  constructor(private ccService: ServiceCorpsCelesteService, private fb: FormBuilder, private ar: ActivatedRoute, private router: Router) {
    this.ar.queryParams.subscribe((params) => {
      if (params.source) {
        this.param = params.source;
      }
    });
    this.nom = this.fb.control('',[
      Validators.required,
    ]);
    this.masse = this.fb.control('',[
      Validators.required,
    ]);
    this.diametre = this.fb.control('',[
      Validators.required,
    ]);
    this.form = this.fb.group({
        nom: this.nom,
        masse: this.masse,
        diametre: this.diametre,
      }
    )
  }

  ngOnInit(): void {
  }

  createSystem(){
    let etoile: Etoile =new Etoile (this.nom.value,this.masse.value,this.diametre.value);
    this.ccService.create(etoile).subscribe((res) =>{
      this.router.navigate(['/modification']);
    });
  }
}
