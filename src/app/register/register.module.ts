import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { Step4Component } from './step4/step4.component';

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  declarations: [RegisterComponent, Step1Component, Step2Component, Step3Component, Step4Component]
})
export class RegisterModule { }
