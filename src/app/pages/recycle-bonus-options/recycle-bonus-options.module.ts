import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecycleBonusOptionsPageRoutingModule } from './recycle-bonus-options-routing.module';

import { RecycleBonusOptionsPage } from './recycle-bonus-options.page';
import { ComponentsModule } from '../layout/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecycleBonusOptionsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RecycleBonusOptionsPage]
})
export class RecycleBonusOptionsPageModule {}
