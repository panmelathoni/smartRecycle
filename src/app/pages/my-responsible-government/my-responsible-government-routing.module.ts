import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyResponsibleGovernmentPage } from './my-responsible-government.page';

const routes: Routes = [
  {
    path: '',
    component: MyResponsibleGovernmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyResponsibleGovernmentPageRoutingModule {}
