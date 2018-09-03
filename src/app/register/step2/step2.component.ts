import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '../../../../node_modules/@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {

  constructor(private fb: FormBuilder, private _auth: AuthService, private router: Router) { }
  regform: FormGroup;
  error = false;
  noerror = false;
  processing = false;
  ErrorType: string = '';
  ngOnInit() {
    if (localStorage.getItem('user') == null) {
      this.router.navigate(['/register/step1']);
    }
    this.regform = this.fb.group({
      signup_email: ['', Validators.compose([Validators.required, Validators.email])],
    });
  }
  subscription$: any;
  AvailableEmail(form: FormGroup) {
    if(!form.valid){
      this.error = true;
      this.noerror = false;
      this.processing = false;
      return;
    }
    this.processing = true;
    this.error = false;
    this.noerror = false;
    let email = form.value.signup_email;
    if(this.subscription$){
      this.subscription$.unsubscribe();
    }
    this.subscription$ = this._auth.availableEmail(email).subscribe(
      (data) => {
        this.processing = false;
        this.error = false;
        this.noerror = true;
        this.ErrorType = "Email ID Available";
      },
      (err: HttpErrorResponse) => {
        this.processing = false;
        this.error = true;
        this.noerror = false;
        if(err.status == 409)
          this.ErrorType = "Email ID already exist. Try something else.";
        else if(err.status == 400)
          this.ErrorType = "Invalid Email Id";
        else
          this.ErrorType = "Server Error. Try after sometime."
      }
    );
  }

  ValidateEmail(form: FormGroup) {
    this.processing = true;
    this.noerror = false;
    this.error = false;
    let email = form.value.signup_email;
    if(this.subscription$){
      this.subscription$.unsubscribe();
    }
    this.subscription$ = this._auth.Step2(email).subscribe(data => {
      localStorage.setItem('userid', data.toString());
      this.router.navigate(['/register/step3']);
    },
      (err: HttpErrorResponse) => {
        this.error = false;
        this.processing = false;
        this.noerror = false;
        this.ErrorType = "Cannot Send OTP. Try after sometime";
      }
    );
  }

}
