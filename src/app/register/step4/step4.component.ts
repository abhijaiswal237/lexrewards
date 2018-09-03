import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '../../../../node_modules/@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css']
})
export class Step4Component implements OnInit {

  constructor(private fb: FormBuilder, private _auth: AuthService, private router: Router) { }
  regform: FormGroup;
  subscription$: any;
  error = false;
  username: string;
  noMatch: boolean = false;
  email: string;
  zipError = true;
  ZipData: string;
  processing = false;
  passwordError = false;
  // noerror = false;
  ngOnInit() {
    // if(localStorage.getItem('verifiedEmail') == null)
    // {
    //   this.router.navigate(['/register/step3']);
    // }
    this.username = localStorage.getItem('user');
    this.email = localStorage.getItem('email');
    this.regform = this.fb.group({
      signup_firstname: ['', Validators.required],
      signup_lastname: ['', Validators.required],
      signup_password: ['', Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{5,}')])],
      signup_confirm_password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      signup_terms: [false, Validators.requiredTrue],
      signup_zipcode: ['', Validators.compose([Validators.required, Validators.minLength(5)])]
    });
  }

  upperfound = false;
  lowerfound = false;
  symbolfound = false;
  numberfound = false;
  lengthsix = false;
  ValidatePassword(form: FormGroup) {
    let password = form.value.signup_password.toString();
    if (password.match(/[a-z]/g))
      this.lowerfound = true;
    else
      this.lowerfound = false;
    if (password.match(/[A-Z]/g))
      this.upperfound = true;
    else
      this.upperfound = false;
    if (password.match(/[0-9]/g))
      this.numberfound = true;
    else
      this.numberfound = false;
    if (password.match(/[$@$!%*?&#`~^_=+-/.,;:'"|]/g))
      this.symbolfound = true;
    else
      this.symbolfound = false;
    if (password.length >= 6)
      this.lengthsix = true;
    else
      this.lengthsix = false;
  }

  VerifyZip(form: FormGroup) {
    let zip = form.value.signup_zipcode.toString();
    if (zip.length != 5) {
      this.zipError = true;
      return;
    }
    else
      this.zipError = false;
    // this.processing = true;
    if (this.subscription$) {
      this.subscription$.unsubscribe();
      this.ZipData = "";
    }
    this.subscription$ = this._auth.VerifyZip(zip).subscribe(data => {
      this.ZipData = data;
      if (this.ZipData == "Cannot Locate")
        this.error = true;
      // console.log(this.ZipData);
      // this.processing = false;
    },
      (err: HttpErrorResponse) => {
        this.zipError = true;
        this.ZipData = 'Cannot locate this ZipCode';
      }
    );
  }

  ComparePassword(form: FormGroup) {
    let password = form.value.signup_password;
    let confirmPassword = form.value.signup_confirm_password;
    if (password != confirmPassword)
      this.noMatch = true;
    else
      this.noMatch = false;
  }

  UpdateUser(form: FormGroup) {
    this.processing = true;
    let firstname = form.value.signup_firstname;
    let lastname = form.value.signup_lastname;
    let zipcode = form.value.signup_zipcode;
    let password = form.value.signup_password;
    let confirmPassword = form.value.signup_confirm_password;
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }
    this.subscription$ = this._auth.UpdateBeforeLogin(firstname, lastname, zipcode, password, confirmPassword).subscribe(data => {
      this.processing = false
      this.router.navigate(['/login']);
    },
      (err: HttpErrorResponse) => {
        this.error = true;
        this.processing = false
      }
    );
  }
}
