import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPage } from './header/header.page';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [HeaderPage],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderPage
  ],
  schemas:[ 
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ComponentsModule { }
