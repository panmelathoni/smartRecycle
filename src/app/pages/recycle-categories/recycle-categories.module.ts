import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecycleCategoriesPageRoutingModule } from './recycle-categories-routing.module';

import { RecycleCategoriesPage } from './recycle-categories.page';
import { ComponentsModule } from '../layout/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecycleCategoriesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RecycleCategoriesPage]
})
export class RecycleCategoriesPageModule {}
