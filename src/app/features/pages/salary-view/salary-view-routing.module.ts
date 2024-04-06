import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalaryViewPage } from './salary-view.page';

const routes: Routes = [
  {
    path: '',
    component: SalaryViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalaryViewPageRoutingModule {}
