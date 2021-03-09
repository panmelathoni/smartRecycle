import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecycleBonusHistoryPageRoutingModule } from './recycle-bonus-history-routing.module';

import { RecycleBonusHistoryPage } from './recycle-bonus-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecycleBonusHistoryPageRoutingModule
  ],
  declarations: [RecycleBonusHistoryPage]
})
export class RecycleBonusHistoryPageModule {}
