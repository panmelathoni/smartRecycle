import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecycleCategoryMaterialsPageRoutingModule } from './recycle-category-materials-routing.module';

import { RecycleCategoryMaterialsPage } from './recycle-category-materials.page';
import { ComponentsModule } from '../layout/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecycleCategoryMaterialsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RecycleCategoryMaterialsPage]
})
export class RecycleCategoryMaterialsPageModule {}
