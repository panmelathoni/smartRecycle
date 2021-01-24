import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClosestRecyclePointsPage } from './closest-recycle-points.page';

const routes: Routes = [
  {
    path: '',
    component: ClosestRecyclePointsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClosestRecyclePointsPageRoutingModule {}
