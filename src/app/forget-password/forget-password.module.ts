import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

import { ForgetPasswordRoutingModule } from './forget-password-routing.module';
import { ForgetPasswordComponent } from './forget-password.component';

@NgModule({
  imports: [
    CommonModule,
    ForgetPasswordRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  declarations: [ForgetPasswordComponent]
})
export class ForgetPasswordModule { }
