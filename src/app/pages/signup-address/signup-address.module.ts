import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupAddressPageRoutingModule } from './signup-address-routing.module';

import { SignupAddressPage } from './signup-address.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupAddressPageRoutingModule
  ],
  declarations: [SignupAddressPage]
})
export class SignupAddressPageModule {}
