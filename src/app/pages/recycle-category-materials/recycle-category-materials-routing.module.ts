import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecycleCategoryMaterialsPage } from './recycle-category-materials.page';

const routes: Routes = [
  {
    path: '',
    component: RecycleCategoryMaterialsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecycleCategoryMaterialsPageRoutingModule {}
