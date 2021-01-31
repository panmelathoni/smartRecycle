import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecycleCategoryMaterialsPageRoutingModule } from './recycle-category-materials-routing.module';

import { RecycleCategoryMaterialsPage } from './recycle-category-materials.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecycleCategoryMaterialsPageRoutingModule
  ],
  declarations: [RecycleCategoryMaterialsPage]
})
export class RecycleCategoryMaterialsPageModule {}
