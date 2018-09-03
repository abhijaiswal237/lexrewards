import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { LocationListComponent } from './location-list/location-list.component';
import { DealsListComponent } from './deals-list/deals-list.component';
import { DirectoryListComponent } from './directory-list/directory-list.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'directoryList'
      },
      {
        path: 'directoryList',
        component: DirectoryListComponent
      },
      {
        path: 'dealsList',
        component: DealsListComponent
      },
      {
        path: 'locationList',
        component: LocationListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
