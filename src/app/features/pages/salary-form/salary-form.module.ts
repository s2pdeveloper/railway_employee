import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalaryFormPageRoutingModule } from './salary-form-routing.module';

import { SalaryFormPage } from './salary-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalaryFormPageRoutingModule
  ],
  declarations: [SalaryFormPage]
})
export class SalaryFormPageModule {}
