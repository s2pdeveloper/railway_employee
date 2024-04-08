import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalaryFormPageRoutingModule } from './salary-form-routing.module';

import { SalaryFormPage } from './salary-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SalaryFormPageRoutingModule
  ],
  declarations: [SalaryFormPage]
})
export class SalaryFormPageModule {}
