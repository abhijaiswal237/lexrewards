import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private fb: FormBuilder, private _auth: AuthService, private router: Router) { }
  regform: FormGroup;
  ngOnInit() {
    this.regform = this.fb.group({
      signup_email: ['', Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")])]
    });
  }

  error = false;
  noerror = false;
  processing = false;
  MessageType: string = '';
  subscription$: any;
  AvailableEmail(form: FormGroup) {
    if (!form.valid) {
      this.error = true;
      this.noerror = false;
      this.processing = false;
      return;
    }
    this.processing = true;
    this.error = false;
    this.noerror = false;
    let email = form.value.signup_email;
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }
    this.subscription$ = this._auth.AvailableResetEmail(email).subscribe(
      (data) => {
        this.processing = false;
        this.error = false;
        this.noerror = true;
        this.MessageType = "Email ID Found";
      },
      (err: HttpErrorResponse) => {
        this.processing = false;
        this.error = true;
        this.noerror = false;
        if (err.status == 409)
          this.MessageType = "Email ID Not Registered";
        else if (err.status == 400)
          this.MessageType = "Invalid Email Id";
        else
          this.MessageType = "Server Error. Try after sometime."
      }
    );
  }

  ForgetPassword(form: FormGroup) {
    this.processing = true;
    this.error = false;
    this.noerror = false;
    let email = form.value.signup_email;
    this._auth.ForgetPassword(email)
      .subscribe( (data) => {
        this.noerror = true;
        this.error = false;
        this.processing = false;
        this.MessageType = "Reset Link Send";
        //this.router.navigate(['/login']);
      },
        (err) => { 
          this.error = true;
          this.processing = false;
          this.noerror = true;
          this.MessageType = "An Error Occured";
        }
      );
  }
}
