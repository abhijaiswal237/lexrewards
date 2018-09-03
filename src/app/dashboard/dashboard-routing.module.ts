import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { LoggedinGuard } from '../loggedin.guard';
import { PointsComponent } from './points/points.component';
import { DealsComponent } from './deals/deals.component';
import { FavouritesComponent } from './favourites/favourites.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'main'
      },
      {
        path: 'main',
        loadChildren: "../dashboard/main/main.module#MainModule"
      },
      {
        path: 'account',
        loadChildren: "../dashboard/account/account.module#AccountModule"
      },
      {
        path: 'points',
        component: PointsComponent
      },
      {
        path: 'deals',
        component: DealsComponent
      },
      {
        path: 'favourites',
        component: FavouritesComponent
      }
    ],
     canActivateChild: [LoggedinGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [LoggedinGuard]
})
export class DashboardRoutingModule { }
