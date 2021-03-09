import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecycleBonusOptionsPageRoutingModule } from './recycle-bonus-options-routing.module';

import { RecycleBonusOptionsPage } from './recycle-bonus-options.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecycleBonusOptionsPageRoutingModule
  ],
  declarations: [RecycleBonusOptionsPage]
})
export class RecycleBonusOptionsPageModule {}
