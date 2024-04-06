import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalaryViewPageRoutingModule } from './salary-view-routing.module';

import { SalaryViewPage } from './salary-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalaryViewPageRoutingModule
  ],
  declarations: [SalaryViewPage]
})
export class SalaryViewPageModule {}
