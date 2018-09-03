import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { LoggedoutDashboardComponent } from './loggedout-dashboard/loggedout-dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: LoggedoutDashboardComponent,
    pathMatch: 'full'
  },
  {
    path: "login",
    loadChildren: "../app/login/login.module#LoginModule"
  },
  {
    path: "register",
    loadChildren: "../app/register/register.module#RegisterModule"
  },
  {
    path: "forgetPassword",
    loadChildren: "../app/forget-password/forget-password.module#ForgetPasswordModule"
  },
  {
    path: "dashboard",
    loadChildren: "../app/dashboard/dashboard.module#DashboardModule"
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
