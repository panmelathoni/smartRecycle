import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecycleBonusOptionsPage } from './recycle-bonus-options.page';

const routes: Routes = [
  {
    path: '',
    component: RecycleBonusOptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecycleBonusOptionsPageRoutingModule {}
