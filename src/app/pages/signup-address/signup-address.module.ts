import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupAddressPageRoutingModule } from './signup-address-routing.module';

import { SignupAddressPage } from './signup-address.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupAddressPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SignupAddressPage]
})
export class SignupAddressPageModule {}
