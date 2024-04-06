import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalaryFormPage } from './salary-form.page';

const routes: Routes = [
  {
    path: '',
    component: SalaryFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalaryFormPageRoutingModule {}
