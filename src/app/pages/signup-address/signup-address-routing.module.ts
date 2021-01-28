import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupAddressPage } from './signup-address.page';

const routes: Routes = [
  {
    path: '',
    component: SignupAddressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupAddressPageRoutingModule {}
