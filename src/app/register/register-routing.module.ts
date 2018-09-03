import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { Step4Component } from './step4/step4.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    children: [
      {
        path: '',
        redirectTo: 'step1',
      },
      {
        path: 'step1',
        component: Step1Component
      },
      {
        path: 'step2',
        component: Step2Component
      },
      {
        path: 'step3',
        component: Step3Component
      },
      {
        path: 'step4',
        component: Step4Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
