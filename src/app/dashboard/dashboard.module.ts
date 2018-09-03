import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { DealsComponent } from './deals/deals.component';
import { PointsComponent } from './points/points.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent, FavouritesComponent, DealsComponent, PointsComponent]
})
export class DashboardModule { }
