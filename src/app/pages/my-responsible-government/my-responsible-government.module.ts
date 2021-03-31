import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyResponsibleGovernmentPageRoutingModule } from './my-responsible-government-routing.module';

import { MyResponsibleGovernmentPage } from './my-responsible-government.page';
import { ComponentsModule } from '../layout/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyResponsibleGovernmentPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MyResponsibleGovernmentPage]
})
export class MyResponsibleGovernmentPageModule {}
