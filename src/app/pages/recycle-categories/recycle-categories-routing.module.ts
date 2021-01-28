import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecycleCategoriesPage } from './recycle-categories.page';

const routes: Routes = [
  {
    path: '',
    component: RecycleCategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecycleCategoriesPageRoutingModule {}
