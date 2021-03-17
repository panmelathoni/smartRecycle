import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecycleAvailableMaterialsPage } from './recycle-available-materials.page';

const routes: Routes = [
  {
    path: '',
    component: RecycleAvailableMaterialsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecycleAvailableMaterialsPageRoutingModule {}
