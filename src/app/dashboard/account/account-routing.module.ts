import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { MyTransactionsComponent } from './my-transactions/my-transactions.component';
import { FacebookSettingsComponent } from './facebook-settings/facebook-settings.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: '',
        redirectTo: 'profile'
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'changePassword',
        component: ChangePasswordComponent
      },
      {
        path: 'fbSettings',
        component: FacebookSettingsComponent
      },
      {
        path: 'myTransactions',
        component: MyTransactionsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
