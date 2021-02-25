import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecycleBonusHistoryPage } from './recycle-bonus-history.page';

const routes: Routes = [
  {
    path: '',
    component: RecycleBonusHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecycleBonusHistoryPageRoutingModule {}
