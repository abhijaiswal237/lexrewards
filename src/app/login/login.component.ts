import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private _auth: AuthService, private router: Router) { }
  regform: FormGroup;
  noMatch = false;
  processing = false;
  ngOnInit() {
    this.regform = this.fb.group({
      signup_username: ['', Validators.required],
      signup_password: ['', Validators.required]
    });
  }
  LoginUser(form: FormGroup) {
    this.processing = true;
    let password = form.value.signup_password;
    let email = form.value.signup_username;
    this._auth.LoginUser(email, password).subscribe(data => {
        localStorage.setItem('loginStatus', 'true');
        this.processing = false;
        this.router.navigate(['/dashboard']);
      },
        (err: HttpErrorResponse) => {
          this.noMatch = true;
          this.processing = false;
        }
      );
    }
}