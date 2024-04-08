import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BiodataFormPageRoutingModule } from './biodata-form-routing.module';

import { BiodataFormPage } from './biodata-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BiodataFormPageRoutingModule
  ],
  declarations: [BiodataFormPage]
})
export class BiodataFormPageModule {}
