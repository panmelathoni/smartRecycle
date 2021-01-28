import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupEmailPage } from './signup-email.page';

const routes: Routes = [
  {
    path: '',
    component: SignupEmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupEmailPageRoutingModule {}
