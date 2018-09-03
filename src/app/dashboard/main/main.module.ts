import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { DirectoryListComponent } from './directory-list/directory-list.component';
import { DealsListComponent } from './deals-list/deals-list.component';
import { LocationListComponent } from './location-list/location-list.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  declarations: [MainComponent, DirectoryListComponent, DealsListComponent, LocationListComponent]
})
export class MainModule { }
