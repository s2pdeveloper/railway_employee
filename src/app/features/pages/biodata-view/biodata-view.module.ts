import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BiodataViewPageRoutingModule } from './biodata-view-routing.module';

import { BiodataViewPage } from './biodata-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BiodataViewPageRoutingModule
  ],
  declarations: [BiodataViewPage]
})
export class BiodataViewPageModule {}
