import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmRecyclePageRoutingModule } from './confirm-recycle-routing.module';

import { ConfirmRecyclePage } from './confirm-recycle.page';
import { ComponentsModule } from '../layout/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ConfirmRecyclePageRoutingModule,
    ComponentsModule
  ],
  declarations: [ConfirmRecyclePage]
})
export class ConfirmRecyclePageModule {}
