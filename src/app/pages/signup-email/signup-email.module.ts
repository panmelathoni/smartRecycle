import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupEmailPageRoutingModule } from './signup-email-routing.module';

import { SignupEmailPage } from './signup-email.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupEmailPageRoutingModule
  ],
  declarations: [SignupEmailPage]
})
export class SignupEmailPageModule {}
