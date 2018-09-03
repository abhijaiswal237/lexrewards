import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FacebookSettingsComponent } from './facebook-settings/facebook-settings.component';
import { MyTransactionsComponent } from './my-transactions/my-transactions.component';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule
  ],
  declarations: [AccountComponent, ProfileComponent, ChangePasswordComponent, FacebookSettingsComponent, MyTransactionsComponent]
})
export class AccountModule { }
