import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '../../../../node_modules/@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {

  constructor(private fb: FormBuilder, private _auth: AuthService, private router: Router) { }
  regform: FormGroup;
  error = true;
  noerror = false;
  processing = false;
  ErrorType: string = "";
  ngOnInit() {
    console.log('called');
    this.regform = this.fb.group({
      signup_username: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(15)])]
    });
  }
  subscription$: any;
  ValidateUsername(name: FormGroup) {
    if (!name.valid) {
      this.error = true;
      this.noerror = false;
      this.processing = false;
      return;
    }
    this.processing = true;
    this.error = false;
    this.noerror = false;
    let username = name.value.signup_username;
    if(this.subscription$){
      this.subscription$.unsubscribe();
    }
    this.subscription$ = this._auth.ValidateUsername(username).subscribe(
      (data) => {
        this.processing = false;
        this.error = false;
        this.noerror = true;
      },
      (err: HttpErrorResponse) => {
        this.processing = false;
        this.error = true;
        this.noerror = false;
        if(err.status == 409)
          this.ErrorType = "Username already exist. Try something else.";
        else if(err.status == 400)
          this.ErrorType = "Only alphanumeric & Symbols like _, #, and & is allowed";
        else
          this.ErrorType = "Server Error. Try after sometime."
      }
    );
  }

  NextForm() {
    this.router.navigate(['/register/step2']);
  }
}
