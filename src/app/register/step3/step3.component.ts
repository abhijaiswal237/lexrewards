import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '../../../../node_modules/@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {

  constructor(private fb: FormBuilder, private _auth: AuthService, private router: Router) { }
  regform: FormGroup;
  error = false;
  processing = false;
  noerror = false;
  delaytime = false;
  ngOnInit() {
    if(localStorage.getItem('userid') == null)
    {
      this.router.navigate(['/register/step2']);
    }
    this.regform = this.fb.group({
      signup_otp: ['', Validators.required]
    });
  }
  subscription$: any;
  ValidateEmail(form: FormGroup) {
    this.processing = true;
    this.error = false;
;    this.noerror = false
    let code = form.value.signup_otp.toString();
    if(code.length < 8)
      {
        this.processing = false;
        this.noerror = false;
        this.error = false;
        return;
      }
      if(this.subscription$){
        this.subscription$.unsubscribe();
      }
      this.subscription$ = this._auth.ConfirmEmail(code).subscribe(data => {
      // this.noerror = true;
      this.noerror = true;
      this.error = false;
      this.processing = false;
      localStorage.setItem('verifiedEmail', 'true');
      this.delaytime = true;
      setTimeout(()=>{ this.router.navigate(['/register/step4']) }, 3000)
    },
      (err: HttpErrorResponse) => {
        this.processing = false;
        this.noerror = false;
        this.error = true;
      }
    );
  }
}
