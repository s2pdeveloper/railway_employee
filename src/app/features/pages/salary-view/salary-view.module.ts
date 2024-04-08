import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalaryViewPageRoutingModule } from './salary-view-routing.module';

import { SalaryViewPage } from './salary-view.page';
import { MonthlySalaryComponent } from './components/monthly-salary/monthly-salary.component';
import { SupplementarySalaryComponent } from './components/supplementary-salary/supplementary-salary.component';
import { YearlySalaryComponent } from './components/yearly-salary/yearly-salary.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalaryViewPageRoutingModule,
  ],
  declarations: [
    SalaryViewPage,
    MonthlySalaryComponent,
    SupplementarySalaryComponent,
    YearlySalaryComponent,
  ],
})
export class SalaryViewPageModule {}
