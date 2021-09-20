import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from "@angular/forms";
import {LoginService} from "../services/login.service";
import {ActivatedRoute, Router} from "@angular/router";
import {debounceTime, map} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  login: FormControl;
  password: FormControl;
  form: FormGroup;
  param: string = '';

  constructor(private fb: FormBuilder, private loginService: LoginService, private ar: ActivatedRoute, private router: Router) {
    this.ar.queryParams.subscribe((params) => {
      if (params.source) {
        this.param = params.source;
      }
    });
    this.login = this.fb.control('',[
      Validators.required,
      Validators.minLength(3),
    ]);
    this.password = this.fb.control('',[
      Validators.required,
      Validators.minLength(3),
    ]);
    this.form = this.fb.group({
        login: this.login,
        password: this.password,
      }
    )
  }


ngOnInit(): void {}

  controlLoginIsPresent(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.loginService.isPresent(control.value).pipe(
        debounceTime(1000),
        map((res: boolean) => {
          return res ? { isPresent: true } : null;
        })
      );
    };
  }

  submit() {
    let compte = {
      login: this.login.value,
      password: this.password.value,
    };
    this.loginService.inscription(compte).subscribe((res) => {
      if (this.param) {
        this.router.navigate(['/' + this.param]);
      } else {
        this.router.navigate(['/menu']);
      }
    });
  }
}

