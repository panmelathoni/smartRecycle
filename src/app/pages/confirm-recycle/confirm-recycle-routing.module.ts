import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmRecyclePage } from './confirm-recycle.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmRecyclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmRecyclePageRoutingModule {}
