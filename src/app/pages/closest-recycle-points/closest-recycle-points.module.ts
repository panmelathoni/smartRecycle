import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClosestRecyclePointsPageRoutingModule } from './closest-recycle-points-routing.module';

import { ClosestRecyclePointsPage } from './closest-recycle-points.page';
import { ComponentsModule } from '../layout/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClosestRecyclePointsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ClosestRecyclePointsPage]
})
export class ClosestRecyclePointsPageModule {}
